import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as UI from '../../components/common';
import VendorList from '../../components/VendorList';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Alert,
  Linking,
} from 'react-native';
import FeaturedVendor from '../../components/FeaturedVendor';
import SearchBar from '../../components/SearchBar';
import Swiper from 'react-native-swiper';
import {useLazyQuery} from '@apollo/react-hooks';
import {GET_SHOPS} from '../../apollo/queries';
import Skeleton from 'react-native-skeleton-placeholder';
import ScreenHeaderWithCart from '../../components/ScreenHeaderWithCart';

const VendorListScreen = ({navigation, offline, adverts}) => {
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

  React.useEffect(() => {
    if (!offline) {
      getShop();
    }
  }, []);

  React.useMemo(() => {
    if (data) {
      setShops(data.shops.edges.map((s) => s.node));
    }
  }, [data]);

  React.useMemo(() => {
    if (error) {
      Alert.alert(
        'Network Error!',
        'An error occured trying to load vendors. Please check if you are connected to the internet and try again.',
        [{text: 'Try again', onPress: () => getShop()}],
      );
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
      <ScreenHeaderWithCart navigation={navigation} title="Vendors" />

      <UI.Layout
        onEndReached={() => fetchMoreShops()}
        onRefresh={() => refetch()}
        refreshing={fetching}>
        {/* ADVERTS */}
        {adverts ? (
          <View style={styles.container}>
            <Swiper
              paginationStyle={{bottom: 5}}
              animated
              autoplayTimeout={10}
              height={100}
              loop
              autoplay>
              {adverts.map((a, i) => {
                if (a.type === 1) {
                  return (
                    <UI.Clickable
                      key={a.id + i}
                      onClick={() => Linking.openURL(a.url)}>
                      <Image style={styles.advert} source={{uri: a.imageUrl}} />
                    </UI.Clickable>
                  );
                }
              })}
            </Swiper>
          </View>
        ) : null}
        {/* /ADVERTS */}

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
                    onClick={() => navigation.navigate('VendorShop', {s})}
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

          {loading && (
            <Skeleton>
              <Skeleton.Item
                borderRadius={5}
                width="100%"
                height={150}
                marginVertical={10}
              />
              <Skeleton.Item
                borderRadius={5}
                width="100%"
                height={150}
                marginVertical={10}
              />
              <Skeleton.Item
                borderRadius={5}
                width="100%"
                height={150}
                marginVertical={10}
              />
            </Skeleton>
          )}

          {shops &&
            shops.map((s, i) => {
              return (
                <VendorList
                  key={s.id + i}
                  onClick={() => navigation.navigate('VendorShop', {s})}
                  location={s.profile.location}
                  name={s.profile.name}
                  image={{uri: s.profile.logo}}
                  verified={s.isVerified}
                />
              );
            })}

          <UI.Spacer />

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <UI.Spinner show={fetching} area={40} />
            {!fetching && !loading && !error && (
              <UI.Text>No more vendors!</UI.Text>
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
    adverts: state.adverts,
  };
};

export default connect(mapStateToProps)(VendorListScreen);
