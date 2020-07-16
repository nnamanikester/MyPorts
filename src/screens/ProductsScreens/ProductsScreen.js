import React from 'react';
import {connect} from 'react-redux';
import * as UI from '../../components/common';
import Swiper from 'react-native-swiper';
import Header from '../../components/Header';
import Product from '../../components/Product';
import FeaturedProduct from '../../components/FeaturedProduct';
import {ScrollView, StyleSheet, View, Image, Alert} from 'react-native';
import {useLazyQuery, useSubscription} from '@apollo/react-hooks';
import {GET_PRODUCTS} from '../../apollo/queries';
import {SUBSCRIBE_TO_PRODUCT} from '../../apollo/subcriptions';
import EmptyItem from '../../components/EmptyItem';
import {female2, female3, bag1, shoe1, shoe2} from '../../assets/images';
import {info} from '../../components/common/variables';

const ProductsScreen = ({navigation, offline}) => {
  const [products, setProducts] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);

  const [
    getProducts,
    {loading, data, error, refetch, fetchMore, subscribeToMore},
  ] = useLazyQuery(GET_PRODUCTS, {
    variables: {
      first: 42,
      where: {
        status: 1,
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

  // const {error: prodError} = useSubscription(SUBSCRIBE_TO_PRODUCT, {
  //   onSubcriptionData: (data) => {
  //     console.log('SUBSCRIPTION DATA ---------');
  //     console.log(data);
  //   },
  // });

  // console.log('anything');

  // if (prodError) {
  //   console.log('SUbscription ');
  //   console.log(prodError);
  // }

  const subscribeToProducts = (subscribeToMore) => {
    subscribeToMore({
      document: SUBSCRIBE_TO_PRODUCT,
      updateQuery: (prev, {subscriptionData}) => {
        if (!subscriptionData.data) {
          return prev;
        }
        const newProduct = subscriptionData.data.newProduct;
        const exists = prev.products.edges.find(
          (node) => node.id === newProduct.id,
        );
        if (exists) {
          return prev;
        }

        console.log('previous', prev);
        console.log('SubscriptionData', subscriptionData);
        return {
          products: {
            edges: [...prev.products.edges, ...newProduct.node],
            __typename: prev.products.__typename,
          },
        };
      },
    });
  };

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
      <Header
        isCart
        title="Shop"
        headerLeft={
          <UI.Clickable onClick={() => navigation.openDrawer()}>
            <UI.Icon name="ios-menu" color="#fff" />
          </UI.Clickable>
        }
        headerRight={
          <>
            <UI.Clickable onClick={() => navigation.navigate('Cart')}>
              <UI.Icon
                name="shopping-bag"
                size={22}
                type="Feather"
                color="#fff"
              />
            </UI.Clickable>
            <UI.Spacer medium />
            <UI.Clickable onClick={() => navigation.navigate('Search')}>
              <UI.Icon name="ios-search" color="#fff" />
            </UI.Clickable>
          </>
        }
      />
      <UI.Layout
        refreshing={loading}
        onRefresh={() => refetch()}
        onEndReached={() => fetchMoreProducts()}>
        <View style={styles.container}>
          <Swiper
            paginationStyle={{bottom: 5}}
            animated
            autoplayTimeout={10}
            height={100}
            loop
            autoplay>
            <UI.Clickable>
              <Image style={styles.advert} source={shoe1} />
            </UI.Clickable>
            <UI.Clickable>
              <Image style={styles.advert} source={shoe2} />
            </UI.Clickable>
            <UI.Clickable>
              <Image style={styles.advert} source={bag1} />
            </UI.Clickable>
            <UI.Clickable>
              <Image style={styles.advert} source={female3} />
            </UI.Clickable>
          </Swiper>
        </View>
        <View style={styles.container}>
          <UI.Text style={styles.title}>Top Selling Products</UI.Text>
          <UI.Spacer />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FeaturedProduct
            quantity="8"
            image={bag1}
            name="Gucci Bag"
            vendor="Shop And Smile"
            onClick={() => navigation.navigate('SingleProduct')}
          />
          <FeaturedProduct
            quantity="89"
            image={shoe1}
            name="Water Proof Bag"
            vendor="Ugoski Wears"
            onClick={() => navigation.navigate('SingleProduct')}
          />
          <FeaturedProduct
            quantity="14"
            image={shoe2}
            name="Table Spoon"
            vendor="Benard Shoes"
            onClick={() => navigation.navigate('SingleProduct')}
          />
          <FeaturedProduct
            image={female2}
            name="Female belt holder"
            vendor="Viky Coperate wears"
            quantity="31"
            onClick={() => navigation.navigate('SingleProduct')}
          />
          <FeaturedProduct
            quantity="45"
            image={female3}
            name="Balenciaga Shoe"
            vendor="Kriative Collections"
            onClick={() => navigation.navigate('SingleProduct')}
          />
        </ScrollView>

        <View style={styles.container}>
          <UI.Text style={styles.title}>Shop Our Collections</UI.Text>
          <UI.Spacer />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FeaturedProduct
            image={bag1}
            onClick={() => navigation.navigate('SingleProduct')}
          />
          <FeaturedProduct
            image={shoe1}
            onClick={() => navigation.navigate('SingleProduct')}
          />
          <FeaturedProduct
            image={shoe2}
            onClick={() => navigation.navigate('SingleProduct')}
          />
          <FeaturedProduct
            image={female3}
            onClick={() => navigation.navigate('SingleProduct')}
          />
        </ScrollView>

        <View style={styles.container}>
          <UI.Text style={styles.title}>Latest Products</UI.Text>
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
                subscribeToProducts(subscribeToMore);
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

export default connect(mapStateToProps)(ProductsScreen);
