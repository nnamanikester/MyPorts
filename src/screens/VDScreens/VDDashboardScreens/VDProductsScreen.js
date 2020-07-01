import React from 'react';
import * as UI from '../../../components/common';
import { View, FlatList, ScrollView } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_PRODUCTS } from '../../../apollo/queries';
import { connect } from 'react-redux';
import Skeleton from 'react-native-skeleton-placeholder';
import EmptyItem from '../../../components/EmptyItem';
import { formatMoney } from '../../../utils';
import moment from 'moment';

const VDProductsScreen = ({ navigation, offline, vendor }) => {
  const [products, setProducts] = React.useState([]);

  const [searchText, setSearchText] = React.useState('');
  const [showFilter, setShowFilter] = React.useState(false);
  const [fetching, setFetching] = React.useState(false);

  const [filter, setFilter] = React.useState({
    label: 'createdAt',
    value: 'createdAt_DESC',
  });

  const [
    getProducts,
    { loading, data, error, refetch, fetchMore },
  ] = useLazyQuery(GET_PRODUCTS, {
    variables: {
      where: {
        vendor: {
          id: vendor.id,
        },
        name_contains: searchText,
      },
      first: 20,
      orderBy: filter.value,
    },
  });

  React.useEffect(() => {
    if (!offline) {
      getProducts();
    } else {
      alert("Please check if you're connected to the internet!");
    }
    if (data) {
      setProducts(data.products.edges.map((p) => p.node));
    }

    if (error) {
      alert('Unable to fetch your products!');
    }
  }, [data]);

  // Refetch data while typing search keyword.
  const handleSearch = (value) => {
    setSearchText(value);
    refetch();
  };

  // Fetch more products onEndReach for pagination.
  const fetchMoreProducts = () => {
    setFetching(true);
    // Check if  there's a next page.
    if (data.products.pageInfo.hasNextPage) {
      // Fetch more products
      fetchMore({
        variables: {
          after: data.products.pageInfo.endCursor,
        },
        // Update the cached data with the fetched product
        updateQuery: (prev, { fetchMoreResult }) => {
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
                pageInfo: { ...fetchMoreResult.products.pageInfo },
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
      <UI.Layout noScroll>
        <UI.Spacer />

        <SearchBar
          placeholder="Search product"
          onChangeText={(value) => handleSearch(value)}
          value={searchText}
          onFilterClick={() => setShowFilter(true)}
        />

        <UI.Spacer />

        {!loading && !error && !products.length > 0 && (
          <>
            <UI.Spacer large />
            <EmptyItem
              show
              title="No product found!"
              message="Click the + button to add a new product."
            />
          </>
        )}

        {(loading || error) && (
          <ScrollView>
            <UI.ListItem
              left={
                <Skeleton>
                  <Skeleton.Item width={50} height={50} borderRadius={5} />
                </Skeleton>
              }
              body={
                <Skeleton>
                  <View
                    style={{ width: '70%', height: 10, marginBottom: 10 }}
                  />
                  <View style={{ width: '40%', height: 10 }} />
                </Skeleton>
              }
            />
            <UI.ListItem
              left={
                <Skeleton>
                  <Skeleton.Item width={50} height={50} borderRadius={5} />
                </Skeleton>
              }
              body={
                <Skeleton>
                  <View
                    style={{ width: '70%', height: 10, marginBottom: 10 }}
                  />
                  <View style={{ width: '40%', height: 10 }} />
                </Skeleton>
              }
            />
            <UI.ListItem
              left={
                <Skeleton>
                  <Skeleton.Item width={50} height={50} borderRadius={5} />
                </Skeleton>
              }
              body={
                <Skeleton>
                  <View
                    style={{ width: '70%', height: 10, marginBottom: 10 }}
                  />
                  <View style={{ width: '40%', height: 10 }} />
                </Skeleton>
              }
            />
          </ScrollView>
        )}

        {!loading && !error && products.length > 0 && (
          <>
            <FlatList
              ListFooterComponentStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              ListFooterComponent={
                <>
                  <UI.Spacer />
                  <UI.Spinner show={fetching} area={40} />
                  {!fetching && <UI.Text>No more products</UI.Text>}
                  <UI.Spacer large />
                </>
              }
              onEndReached={() => fetchMoreProducts()}
              onEndReachedThreshold={0.3}
              refreshing={loading}
              onRefresh={() => refetch()}
              showsVerticalScrollIndicator={false}
              data={products}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <UI.ListItem
                  key={item.id}
                  onClick={() => navigation.navigate('VDEditProduct')}
                  left={<UI.Avatar medium src={{ uri: item.images[0].url }} />}
                  body={
                    <>
                      <UI.Text heading>{item.name}</UI.Text>
                      <UI.Text note color="">
                        {moment(item.createdAt).format('DD/MM/YYYY')}
                      </UI.Text>
                    </>
                  }
                  right={
                    <View style={{ alignItems: 'flex-end' }}>
                      <UI.Text>{formatMoney(item.price)}</UI.Text>
                      <UI.Text>
                        {item.status === 1 ? 'Published' : 'Draft'}
                      </UI.Text>
                    </View>
                  }
                />
              )}
            />
          </>
        )}
      </UI.Layout>

      <UI.FAB onClick={() => navigation.navigate('VDAddProduct')} size={60}>
        <UI.Icon color="#fff" name="md-add" />
      </UI.FAB>

      <UI.ActionBar
        headerText="Sort Products"
        show={showFilter}
        onCloseButtonClick={() => setShowFilter(false)}>
        <UI.Text heading>Sort by</UI.Text>

        <UI.Spacer />

        <UI.Row>
          <UI.Column size="6">
            <UI.Select
              type="dropdown"
              selected={filter.label}
              onChange={(value) => setFilter({ ...filter, label: value })}
              data={[
                { label: 'Name', value: 'name' },
                { label: 'Date', value: 'createdAt' },
                { label: 'Price', value: 'price' },
                { label: 'Sales', value: 'sales' },
              ]}
            />
          </UI.Column>
          <UI.Column size="6">
            <UI.Select
              type="dropdown"
              selected={filter.value}
              onChange={(value) => setFilter({ ...filter, value })}
              data={[
                { label: 'ASC', value: `${filter.label}_ASC` },
                { label: 'DESC', value: `${filter.label}_DESC` },
              ]}
            />
          </UI.Column>
        </UI.Row>

        <UI.Spacer large />

        <UI.Button onClick={() => setShowFilter(false)}>
          <UI.Text color="#fff">Done</UI.Text>
        </UI.Button>

        <UI.Spacer />

        <UI.Button
          onClick={() =>
            setFilter({
              label: 'createdAt',
              value: 'createdAt_DESC',
            })
          }
          type="ghost">
          Reset
        </UI.Button>
      </UI.ActionBar>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
    vendor: state.vendor,
  };
};

export default connect(mapStateToProps)(VDProductsScreen);
