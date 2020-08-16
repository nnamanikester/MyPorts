import React from 'react';
import {connect} from 'react-redux';
import * as UI from '../../components/common';
import Product from '../../components/Product';
import {StyleSheet, View, Alert} from 'react-native';
import {useLazyQuery} from '@apollo/react-hooks';
import {GET_PRODUCTS} from '../../apollo/queries';
import EmptyItem from '../../components/EmptyItem';
import {info} from '../../components/common/variables';
import ScreenHeaderWithCart from '../../components/ScreenHeaderWithCart';

const ProductsByCategoryScreen = ({navigation, offline, route: {params}}) => {
  const {category} = params;
  const [products, setProducts] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);

  const [
    getProducts,
    {loading, data, error, refetch, fetchMore},
  ] = useLazyQuery(GET_PRODUCTS, {
    variables: {
      first: 60,
      where: {
        AND: {
          status: 1,
          quantity_gt: 0,
          category: {
            id: category.id,
          },
        },
      },
      orderBy: 'createdAt_DESC',
    },
  });

  React.useEffect(() => {
    if (!offline) {
      getProducts();
    }
  }, []);

  React.useMemo(() => {
    if (data) {
      setProducts(data.products.edges.map((p) => p.node));
    }
  }, [data]);

  React.useMemo(() => {
    if (error) {
      Alert.alert(
        'Network Error!',
        'An error occured trying to load products. Please check if you are connected to the internet and try again.',
        [{text: 'Try again', onPress: () => getProducts()}],
      );
    }
  }, [error]);

  // Fetch more products onEndReach for pagination.
  const fetchMoreProducts = () => {
    if (!data) {
      return;
    }
    setFetching(true);
    // Check if  there's a next page.
    if (data.products.pageInfo.hasNextPage) {
      // Fetch more products
      fetchMore({
        variables: {
          after: data.products.pageInfo.endCursor,
        },
        // Update the cached data with the fetched product
        updateQuery: (prev, {fetchMoreResult}) => {
          if (prev.products.pageInfo.hasNextPage) {
            // if the previous page info has next page
            setFetching(false);
            // return the products with the new data added to cache
            return {
              products: {
                edges: [
                  ...prev.products.edges,
                  ...fetchMoreResult.products.edges,
                ],
                pageInfo: {...fetchMoreResult.products.pageInfo},
                __typename: fetchMoreResult.products.__typename,
              },
            };
          } else {
            // If not, return the precious cached data
            setFetching(false);
            return prev;
          }
        },
      });
    } else {
      setFetching(false);
    }
  };

  return (
    <>
      <ScreenHeaderWithCart
        navigation={navigation}
        title={category.name}
        icon="back"
      />

      <UI.Layout
        refreshing={loading}
        onRefresh={() => refetch()}
        onEndReached={() => fetchMoreProducts()}>
        <View style={styles.container}>
          <UI.Text style={styles.title}>{category.name} Products</UI.Text>
          <UI.Spacer />
          <UI.Row style={{justifyContent: 'space-between'}}>
            {!loading && !error && !products.length > 0 && (
              <>
                <UI.Spacer large />
                <EmptyItem
                  icon={<UI.Icon color={info} size={100} name="ios-basket" />}
                  show
                  title="No product found!"
                  message="There are no products yet! Please check back later."
                />
              </>
            )}

            {!loading &&
              !error &&
              products.length > 0 &&
              products.map((p, i) => {
                return (
                  <Product
                    key={p.id + i}
                    quantity={p.quantity}
                    image={{uri: p.images[0].url}}
                    name={p.name}
                    vendor={p.category.name}
                    onClick={() =>
                      navigation.navigate('SingleProduct', {product: p})
                    }
                  />
                );
              })}
          </UI.Row>

          <UI.Spacer medium />

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <UI.Spinner show={fetching || loading || error} area={40} />
            {!fetching && !loading && !error && (
              <UI.Text>No more products!</UI.Text>
            )}
          </View>

          <UI.Spacer large />
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
  advert: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps)(ProductsByCategoryScreen);
