import React, {useState} from 'react';
import * as UI from '../components/common';
import SearchBar from '../components/SearchBar';
import EmptyItem from '../components/EmptyItem';
import Product from '../components/Product';
import {StyleSheet, View, ToastAndroid} from 'react-native';
import {useLazyQuery, useMutation} from '@apollo/react-hooks';
import {GET_PRODUCTS, SEARCH_TERMS} from '../apollo/queries';
import {CREATE_SEARCH_TERM} from '../apollo/mutations';
import {connect} from 'react-redux';
import {info} from '../components/common/variables';
import ScreenHeaderWithoutRightIcon from '../components/ScreenHeaderWithoutRightIcons';

const SearchScreen = ({navigation, offline}) => {
  // Defining state variables.
  const [products, setProducts] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);
  const [term, setTerm] = React.useState('');
  const [recentSearches, setRecentSearches] = React.useState([]);
  const [priceRange, setPriceRange] = React.useState({
    min: '0',
    max: '999999999999',
  });
  const [filter, setFilter] = React.useState({
    label: 'createdAt',
    value: 'createdAt_DESC',
  });
  const [isFilter, setIsFilter] = useState(false);
  const [showAllTerms, setShowAllTerms] = useState(false);

  // Query for getting products after search
  const [
    getProducts,
    {loading, data, error, fetchMore, refetch},
  ] = useLazyQuery(GET_PRODUCTS, {
    variables: {
      where: {
        // OR: {
        name_contains: term,
        //   description_contains: term,
        // },
        // category: {
        //   name_contains: term,
        // },
        price_gte: parseInt(priceRange.min),
        price_lte: parseInt(priceRange.max),
      },
      first: 60,
      orderBy: filter.value,
    },
  });

  // Mutation for creating a searchTerm after search.
  const [createSearchTerm] = useMutation(CREATE_SEARCH_TERM, {
    variables: {
      term,
    },
  });

  // Query to fetch search terms
  const [
    fetchSearchTerms,
    {data: searchTermsData, refetch: refetchSearchTerms},
  ] = useLazyQuery(SEARCH_TERMS);

  // A function that is called when the searchBox is blured,
  // to search the terms in products
  const handleSearch = () => {
    if (!term) {
      refetchSearchTerms();
      return setProducts([]);
    }
    if (!offline) {
      getProducts();
      createSearchTerm();
    }
  };

  React.useMemo(() => {
    if (data) {
      setProducts(data.products.edges.map((p) => p.node));
    }
  }, [data]);

  React.useMemo(() => {
    if (!offline) {
      fetchSearchTerms();
    }

    if (searchTermsData) {
      setRecentSearches(searchTermsData.searchTerms);
      if (searchTermsData.searchTerms.length > 5) {
        setShowAllTerms(false);
      } else {
        setShowAllTerms(true);
      }
    }
  }, [searchTermsData]);

  React.useEffect(() => {
    if (error) {
      ToastAndroid.show('Unable to get data at the time.', ToastAndroid.SHORT);
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
      <UI.Loading show={loading} />

      <ScreenHeaderWithoutRightIcon
        title="Search"
        navigation={navigation}
        icon="back"
      />

      <UI.Layout onEndReached={() => fetchMoreProducts()}>
        <UI.Spacer />

        <SearchBar
          onEndEditing={() => handleSearch()}
          onChangeText={(value) => setTerm(value)}
          value={term}
          placeholder="What are you looking for?"
          onFilterClick={() => setIsFilter(true)}
        />

        <View style={styles.container}>
          <UI.Spacer medium />

          {!products.length > 0 && !term && (
            <View>
              {recentSearches.length > 0 && (
                <>
                  <UI.Row>
                    <UI.Column size="10">
                      <UI.Text heading>Recent Searches</UI.Text>
                    </UI.Column>
                    {recentSearches.length > 5 && (
                      <UI.Column size="2" style={{alignItems: 'flex-end'}}>
                        <UI.Link onClick={() => setShowAllTerms(true)}>
                          View All
                        </UI.Link>
                      </UI.Column>
                    )}
                  </UI.Row>

                  {recentSearches.map((t, i) => {
                    if (!showAllTerms && i > 4) {
                      return;
                    }
                    return (
                      <UI.ListItem
                        key={t.id}
                        onClick={() => {
                          setTerm(t.term);
                          handleSearch();
                        }}
                        body={<UI.Text>{t.term}</UI.Text>}
                      />
                    );
                  })}
                </>
              )}
            </View>
          )}

          {!products.length > 0 && !recentSearches.length > 0 && (
            <>
              <UI.Spacer large />
              <EmptyItem
                icon={<UI.Icon color={info} size={100} name="ios-basket" />}
                show
                title="No product found!"
                message="Products you searched for will appear here."
              />
            </>
          )}

          {products.length > 0 && (
            <View>
              <UI.Row style={{justifyContent: 'space-between'}}>
                {products.map((p) => {
                  return (
                    <Product
                      key={p.id}
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
                <UI.Spinner show={fetching} area={40} />
                {!fetching && !loading && !error && (
                  <UI.Text>No more products!</UI.Text>
                )}
              </View>

              <UI.Spacer large />
            </View>
          )}
        </View>
      </UI.Layout>

      <UI.ActionBar
        show={isFilter}
        onCloseButtonClick={() => setIsFilter(false)}
        headerText="Filter Search">
        <View>
          <UI.Text heading>Price range</UI.Text>
          <UI.Spacer />
          <UI.Row>
            <UI.Column size="6">
              <UI.TextInput
                onChangeText={(value) =>
                  setPriceRange({...priceRange, min: value})
                }
                value={priceRange.min}
                keyboardType="number-pad"
                placeholder="Min"
              />
            </UI.Column>
            <UI.Column size="6">
              <UI.TextInput
                onChangeText={(value) =>
                  setPriceRange({...priceRange, max: value})
                }
                value={priceRange.max}
                keyboardType="number-pad"
                placeholder="Max"
              />
            </UI.Column>
          </UI.Row>
        </View>

        <UI.Spacer />

        <View>
          <UI.Text heading>Sort By</UI.Text>
          <UI.Spacer />
        </View>

        <UI.Row>
          <UI.Column size="6">
            <UI.Select
              type="dropdown"
              selected={filter.label}
              onChange={(value) => setFilter({...filter, label: value})}
              data={[
                {label: 'Name', value: 'name'},
                {label: 'Date', value: 'createdAt'},
                {label: 'Price', value: 'price'},
              ]}
            />
          </UI.Column>
          <UI.Column size="6">
            <UI.Select
              type="dropdown"
              selected={filter.value}
              onChange={(value) => setFilter({...filter, value})}
              data={[
                {label: 'Ascending', value: `${filter.label}_ASC`},
                {label: 'Descending', value: `${filter.label}_DESC`},
              ]}
            />
          </UI.Column>
        </UI.Row>

        <UI.Spacer />

        <UI.Spacer large />
        <UI.Button
          onClick={() => {
            setIsFilter(false);
            refetch();
          }}>
          <UI.Text color="#fff">Apply</UI.Text>
        </UI.Button>

        <UI.Spacer />

        <UI.Button
          type="ghost"
          onClick={() => {
            setIsFilter(false);
            setPriceRange({
              min: 0,
              max: 999999999999,
            });
            setFilter({
              label: 'createdAt',
              value: 'createdAt_DESC',
            });
          }}>
          Clear
        </UI.Button>
        <UI.Spacer large />
      </UI.ActionBar>
    </>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps)(SearchScreen);
