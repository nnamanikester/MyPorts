import React, { useState } from 'react';
import * as UI from '../components/common';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Product from '../components/Product';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useLazyQuery, useQuery, useMutation } from '@apollo/react-hooks';
import { GET_PRODUCTS, SEARCH_TERMS } from '../apollo/queries';
import { CREATE_SEARCH_TERM } from '../apollo/mutations';
import {
  female1,
  female2,
  bag1,
  female3,
  male1,
  shoe2,
  shoe1,
} from '../assets/images';
import FeaturedProduct from '../components/FeaturedProduct';
import { connect } from 'react-redux';

const SearchScreen = ({ navigation }) => {
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

  const [searching, setSearching] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const [
    getProducts,
    { loading, data, error, fetchMore, refetch },
  ] = useLazyQuery(GET_PRODUCTS, {
    variables: {
      where: {
        name_contains: term,
        price_gte: parseInt(priceRange.min),
        price_lte: parseInt(priceRange.max),
      },
      first: 42,
      orderBy: filter.value,
    },
  });
  const [createSearchTerm, { data: termData }] = useMutation(
    CREATE_SEARCH_TERM,
  );
  const { data: searchTermsData } = useQuery(SEARCH_TERMS);

  const handleSearch = (term) => {
    if (!searching) setSearching(true);
    if (!offline) {
      getProducts();
      createSearchTerm({ variables: { term } });
    } else {
      alert("Please check if you're connected to the internet!");
    }
  };

  React.useEffect(() => {
    if (data) {
      setProducts(data.products.edges.map((p) => p.node));
    }
    if (searchTermsData) {
      setRecentSearches(searchTermsData.searchTerms);
    }

    if (error) {
      alert("There's a problem loading getting the data. Please try again.");
    }
  }, [data, searchTermsData]);

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
      <Header
        title="Search"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" size={25} color="#fff" />
          </UI.Clickable>
        }
      />
      <UI.Layout>
        <UI.Spacer />

        <SearchBar
          onChangeText={handleSearch}
          value={term}
          placeholder="What are you looking for?"
          onFilterClick={() => setIsFilter(true)}
        />

        <View style={styles.container}>
          <UI.Spacer medium />

          {!searching && (
            <View>
              <UI.Row>
                <UI.Column size="10">
                  <UI.Text heading>Recent Searches</UI.Text>
                </UI.Column>
                <UI.Column size="2" style={{ alignItems: 'flex-end' }}>
                  <UI.Link>View All</UI.Link>
                </UI.Column>
              </UI.Row>

              <UI.ListItem
                onClick={() => setTerm('Men Cloths')}
                body={<UI.Text>Men Cloths</UI.Text>}
              />
              <UI.ListItem
                onClick={() => setTerm('Piano')}
                body={<UI.Text>Piano</UI.Text>}
              />
              <UI.ListItem
                onClick={() => setTerm('Black Board')}
                body={<UI.Text>Black Board</UI.Text>}
              />
              <UI.ListItem
                onClick={() => setTerm('Baby Toys')}
                body={<UI.Text>Baby Toys</UI.Text>}
              />

              <UI.Spacer medium />

              <UI.Row>
                <UI.Column size="10">
                  <UI.Text heading>Recommended for you</UI.Text>
                </UI.Column>
                <UI.Column size="2" style={{ alignItems: 'flex-end' }}>
                  <UI.Link>View All</UI.Link>
                </UI.Column>
              </UI.Row>

              <UI.Spacer medium />

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
                  image={female2}
                  onClick={() => navigation.navigate('SingleProduct')}
                />
                <FeaturedProduct
                  image={female3}
                  onClick={() => navigation.navigate('SingleProduct')}
                />
              </ScrollView>
            </View>
          )}

          {searching && (
            <View>
              <UI.Row style={{ justifyContent: 'space-between' }}>
                <Product
                  quantity="89"
                  image={female1}
                  name="Water Proof Bag"
                  vendor="Chiomy Styles"
                  onClick={() => navigation.navigate('SingleProduct')}
                />
                <Product
                  quantity="14"
                  image={male1}
                  name="Table Spoon"
                  vendor="Benson Utilities"
                  onClick={() => navigation.navigate('SingleProduct')}
                />
                <Product
                  image={female2}
                  name="Female belt holder"
                  vendor="Genny Collections"
                  quantity="31"
                  onClick={() => navigation.navigate('SingleProduct')}
                />
                <Product
                  quantity="45"
                  image={female3}
                  name="Balenciaga Shoe"
                  vendor="Chucks Ventiany"
                  onClick={() => navigation.navigate('SingleProduct')}
                />
                <Product
                  quantity="15"
                  image={shoe1}
                  name="Adidas Shoe"
                  vendor="Adidas"
                  onClick={() => navigation.navigate('SingleProduct')}
                />
                <Product
                  quantity="20"
                  image={female3}
                  name="Nike Shoe"
                  vendor="Nike"
                  onClick={() => navigation.navigate('SingleProduct')}
                />
                <Product
                  quantity="8"
                  image={female3}
                  name="Gucci Bag"
                  vendor="Cossy Viantae"
                  onClick={() => navigation.navigate('SingleProduct')}
                />
              </UI.Row>
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
                  setPriceRange({ ...priceRange, min: value })
                }
                value={priceRange.min}
                keyboardType="number-pad"
                placeholder="Min"
              />
            </UI.Column>
            <UI.Column size="6">
              <UI.TextInput
                onChangeText={(value) =>
                  setPriceRange({ ...priceRange, max: value })
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
              onChange={(value) => setFilter({ ...filter, label: value })}
              data={[
                { label: 'Name', value: 'name' },
                { label: 'Date', value: 'createdAt' },
                { label: 'Price', value: 'price' },
              ]}
            />
          </UI.Column>
          <UI.Column size="6">
            <UI.Select
              type="dropdown"
              selected={filter.value}
              onChange={(value) => setFilter({ ...filter, value })}
              data={[
                { label: 'Ascending', value: `${filter.label}_ASC` },
                { label: 'Descending', value: `${filter.label}_DESC` },
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
