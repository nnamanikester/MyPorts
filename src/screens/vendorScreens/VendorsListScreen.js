import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import VendorList from '../../components/VendorList';
import {StyleSheet, ScrollView, View, Image, ToastAndroid} from 'react-native';
import {female3, shoe1, shoe2, bag1} from '../../assets/images';
import FeaturedVendor from '../../components/FeaturedVendor';
import SearchBar from '../../components/SearchBar';
import Swiper from 'react-native-swiper';
import {useLazyQuery} from '@apollo/react-hooks';
import {GET_SHOPS} from '../../apollo/queries';

const VendorListScreen = ({navigation, offline}) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [fetching, setFetching] = React.useState(false);
  const [showTitle, setShowTitle] = React.useState(false);
  const [shops, setShops] = React.useState([]);

  // Query to get the vendor shops
  const [getShop, {data, loading, error, refetch, fetchMore}] = useLazyQuery(
    GET_SHOPS,
    {
      variables: {
        orderBy: 'createdAt_DESC',
        where: {
          profile: {
            name_contains: searchText,
          },
          status: 1,
        },
        first: 20,
      },
    },
  );

  React.useMemo(() => {
    if (!offline) {
      getShop();
    }

    if (data) {
      setShops(data.shops.edges.map((s) => s.node));
    }
  }, [data]);

  React.useMemo(() => {
    if (error) {
      ToastAndroid.show('Error loading products!', ToastAndroid.SHORT);
    }
  }, [error]);

  // A function to get more shops on end reached
  const fetchMoreShops = () => {
    if (!data) {
      return;
    }
    setFetching(true);
    // Check if  there's a next page.
    if (data.shops.pageInfo.hasNextPage) {
      // Fetch more products
      fetchMore({
        variables: {
          after: data.shops.pageInfo.endCursor,
        },
        // Update the cached data with the fetched product
        updateQuery: (prev, {fetchMoreResult}) => {
          if (prev.shops.pageInfo.hasNextPage) {
            // if the previous page info has next page
            setFetching(false);
            // return the products with the new data added to cache
            return {
              shops: {
                edges: [...prev.shops.edges, ...fetchMoreResult.shops.edges],
                pageInfo: {...fetchMoreResult.shops.pageInfo},
                __typename: fetchMoreResult.shops.__typename,
              },
            };
          } else {
            // If not, return the previous cached data
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
        title="Vendors"
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
        onEndReached={() => fetchMoreShops()}
        onRefresh={() => refetch()}
        refreshing={loading}>
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

        {showTitle && (
          <View style={styles.container}>
            <UI.Text style={styles.title}>Featured Vendors</UI.Text>
          </View>
        )}
        <ScrollView
          style={{paddingLeft: 10}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {shops &&
            shops.map((s, i) => {
              if (s.featured) {
                setShowTitle(true);
                return (
                  <FeaturedVendor
                    key={s.id + i}
                    onClick={() => navigation.navigate('VendorShop')}
                    location={s.profile.location}
                    name={s.profile.name}
                    image={{uri: s.profile.logo}}
                    verified={s.isVerified}
                  />
                );
              }
            })}
        </ScrollView>
        <UI.Spacer />
        <View style={styles.container}>
          <UI.Row>
            <UI.Column size="10">
              <UI.Text style={styles.title}>All Vendors</UI.Text>
            </UI.Column>
            <UI.Column size="2" style={{alignItems: 'flex-end'}}>
              <UI.Clickable onClick={() => setShowSearchBar(!showSearchBar)}>
                <UI.Icon name={showSearchBar ? 'md-close' : 'ios-search'} />
              </UI.Clickable>
            </UI.Column>
          </UI.Row>

          {showSearchBar && (
            <View style={styles.searchBar}>
              <SearchBar
                value={searchText}
                onChangeText={(value) => setSearchText(value)}
                hideFilterIcon
                placeholder="Search your favorite vendor"
              />
            </View>
          )}

          {shops &&
            shops.map((s, i) => {
              return (
                <VendorList
                  key={s.id + i}
                  onClick={() => navigation.navigate('VendorShop')}
                  location={s.profile.location}
                  name={s.profile.name}
                  image={{uri: s.profile.logo}}
                  verified={s.isVerified}
                />
              );
            })}

          <UI.Spacer />

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <UI.Spinner show={fetching || loading || error} area={40} />
            {!fetching && !loading && !error && (
              <UI.Text>No more shops!</UI.Text>
            )}
          </View>

          <UI.Spacer medium />
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
  container: {
    marginHorizontal: 10,
    paddingTop: 10,
  },
  searchBar: {
    paddingHorizontal: 10,
    paddingVertical: 15,
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

export default connect(mapStateToProps)(VendorListScreen);
