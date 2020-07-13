import React from 'react';
import {View, StyleSheet, Image, ToastAndroid} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import Product from '../../components/Product';
import SearchBar from '../../components/SearchBar';
import {grayColor, info, primaryColor} from '../../components/common/variables';
import {GET_SHOP, GET_PRODUCTS} from '../../apollo/queries';
import {useLazyQuery} from '@apollo/react-hooks';
import {connect} from 'react-redux';
import EmptyItem from '../../components/EmptyItem';
import {
  calculateRating,
  calculateRatePecentage,
} from '../../utils/calculations';

const VendorShopScreen = ({navigation, route: {params}, offline}) => {
  const {s} = params;
  const [openReview, setOpenReview] = React.useState(false);
  const [showSearchBar, setShowSearchBar] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [shop, setShop] = React.useState({});
  const [products, setProducts] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);
  const [s1] = React.useState(
    s.reviews.map((r) => {
      if (r.rating === 1) {
        return r.rating;
      }
    }),
  );
  const [s2] = React.useState(
    s.reviews.map((r) => {
      if (r.rating === 2) {
        return r.rating;
      }
    }),
  );
  const [s3] = React.useState(
    s.reviews.map((r) => {
      if (r.rating === 3) {
        return r.rating;
      }
    }),
  );
  const [s4] = React.useState(
    s.reviews.map((r) => {
      if (r.rating === 4) {
        return r.rating;
      }
    }),
  );
  const [s5] = React.useState(
    s.reviews.map((r) => {
      if (r.rating === 5) {
        return r.rating;
      }
    }),
  );

  const [getShop, {data, loading, error}] = useLazyQuery(GET_SHOP, {
    variables: {
      id: s.id,
    },
    pollInterval: 500,
  });

  const [
    getProducts,
    {loading: pLoading, data: pData, error: pError, refetch, fetchMore},
  ] = useLazyQuery(GET_PRODUCTS, {
    variables: {
      first: 42,
      where: {
        name_contains: searchText,
        vendor: {
          id: s.id,
        },
        status: 1,
      },
      orderBy: 'createdAt_DESC',
    },
  });

  React.useMemo(() => {
    if (!offline) {
      getProducts();
    }
    if (pData) {
      setProducts(pData.products.edges.map((p) => p.node));
    }
  }, [pData]);

  React.useMemo(() => {
    if (pError) {
      ToastAndroid.show('Unable to get Shop Products!', ToastAndroid.LONG);
    }
  }, [pError]);

  React.useMemo(() => {
    if (!offline) {
      getShop();
    }
    if (data) {
      setShop(data.shop);
    }
  }, [data]);

  React.useMemo(() => {
    if (error) {
      ToastAndroid.show('Error loading vendor shop!', ToastAndroid.LONG);
    }
  }, [error]);

  // Fetch more products onEndReach for pagination.
  const fetchMoreProducts = () => {
    if (!pData) {
      return;
    }
    setFetching(true);
    // Check if  there's a next page.
    if (pData.products.pageInfo.hasNextPage) {
      // Fetch more products
      fetchMore({
        variables: {
          after: pData.products.pageInfo.endCursor,
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
      <UI.Loading show={loading || error ? true : false} />
      <Header
        isCart
        title={s.profile.name}
        headerLeft={
          <UI.Link onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Link>
        }
        headerRight={
          <>
            <UI.Link
              onClick={() => navigation.navigate('Cart')}
              activeOpacity={0.7}>
              <UI.Icon
                name="shopping-bag"
                size={22}
                type="Feather"
                color="#fff"
              />
            </UI.Link>
            <UI.Spacer medium />
            <UI.Link onClick={() => navigation.navigate('Search')}>
              <UI.Icon name="ios-search" color="#fff" />
            </UI.Link>
          </>
        }
      />
      <UI.Layout
        onRefresh={() => refetch()}
        onEndReached={() => fetchMoreProducts()}
        style={styles.layout}>
        <View style={styles.header}>
          <View>
            <Image
              style={styles.coverImage}
              source={{uri: s.profile.coverPhoto}}
            />
          </View>
          <UI.Row>
            <View>
              <View style={styles.logoContainer}>
                <Image style={styles.logo} source={{uri: s.profile.logo}} />
              </View>
            </View>

            <View style={styles.shopDetails}>
              <UI.Spacer />
              <UI.Text style={styles.shopTitle}>
                {s.profile.name}{' '}
                {s.isVerified ? (
                  <UI.Icon
                    size={18}
                    type="Octicons"
                    color={primaryColor}
                    name="verified"
                  />
                ) : null}
              </UI.Text>
              <UI.Text style={styles.shopDescription}>
                {s.profile.description}
              </UI.Text>
            </View>
          </UI.Row>

          <UI.Spacer />

          <UI.Row style={styles.contact}>
            <View style={styles.contactLeft}>
              <UI.Icon name="ios-mail" color={primaryColor} />
              <UI.Spacer />
              <UI.Link to={`mailto:${s.profile.email}`}>Email</UI.Link>
            </View>

            <View style={styles.contactRight}>
              <UI.Icon name="ios-call" color={primaryColor} />
              <UI.Spacer />
              <UI.Link to={`tel:${s.profile.phone}`}>Phone</UI.Link>
            </View>
          </UI.Row>

          <UI.Spacer />

          <UI.Row
            style={{justifyContent: 'space-between', paddingHorizontal: 10}}>
            <UI.Text style={styles.title}>Ratings and Reviews</UI.Text>
            <UI.Link onClick={() => navigation.navigate('VendorShopReview')}>
              See All Reviews
            </UI.Link>
          </UI.Row>

          <View style={styles.reviewSection}>
            <View style={styles.ratingPoint}>
              <UI.Text size={50}>
                {calculateRating(s.reviews.map((r) => r.rating))}
              </UI.Text>
              <UI.Rating
                size={15}
                s1={s1.length}
                s2={s2.length}
                s3={s3.length}
                s4={s4.length}
                s5={s5.length}
              />
              <UI.Text>
                {s.reviews.length > 0 ? s.reviews.length : 'No rating'}
              </UI.Text>
            </View>

            <View style={styles.ratingGraph}>
              <UI.ProgressBar
                label="5"
                percent={calculateRatePecentage(s5, 5)}
              />
              <UI.ProgressBar
                label="4"
                percent={calculateRatePecentage(s4, 4)}
              />
              <UI.ProgressBar
                label="3"
                percent={calculateRatePecentage(s3, 3)}
              />
              <UI.ProgressBar
                label="2"
                percent={calculateRatePecentage(s2, 2)}
              />
              <UI.ProgressBar
                label="1"
                percent={calculateRatePecentage(s1, 1)}
              />
            </View>
          </View>

          <UI.Spacer />

          <UI.Divider />

          <View style={{paddingHorizontal: 10}}>
            <UI.Button onClick={() => setOpenReview(true)}>
              <UI.Icon size={20} name="md-create" color="#fff" />
              {'   '}
              <UI.Text color="#fff">Write a review</UI.Text>
            </UI.Button>
            <UI.Spacer />
          </View>
        </View>

        <UI.Divider />

        <View style={styles.container}>
          <UI.Row style={{justifyContent: 'space-between'}}>
            <UI.Text style={styles.title}>Recent Products</UI.Text>
            <UI.Link onClick={() => setShowSearchBar(!showSearchBar)}>
              <UI.Icon name={showSearchBar ? 'md-close' : 'ios-search'} />
            </UI.Link>
          </UI.Row>

          {showSearchBar && (
            <View>
              <UI.Spacer />
              <SearchBar
                hideFilterIcon
                value={searchText}
                onChangeText={(value) => setSearchText(value)}
                placeholder="What are you looking for?"
              />
              <UI.Spacer />
            </View>
          )}

          <UI.Spacer />

          <UI.Row style={{justifyContent: 'space-between'}}>
            {products &&
              products.map((p, i) => {
                return (
                  <Product
                    key={p.id + i}
                    quantity={p.quantity}
                    image={{uri: p.images[0].url}}
                    name={p.name}
                    onClick={() =>
                      navigation.navigate('SingleProduct', {product: p})
                    }
                  />
                );
              })}
          </UI.Row>

          {pLoading || pError || fetching ? (
            <View style={{alignItems: 'center', flex: 1}}>
              <UI.Spacer />
              <UI.Spinner area={40} show />
            </View>
          ) : null}

          {!pLoading && !products.length > 0 && !pError ? (
            <>
              <UI.Spacer medium />
              <EmptyItem
                icon={<UI.Icon color={info} size={100} name="ios-basket" />}
                show
                title="No product found!"
                message="There are no products yet! Please check back later."
              />
            </>
          ) : null}
        </View>
      </UI.Layout>

      <UI.FAB size={60} type="outline">
        <UI.Icon name="ios-chatbubbles" color={primaryColor} />
      </UI.FAB>

      <UI.Modal show={openReview}>
        <UI.Text heading>Write a Review</UI.Text>
        <UI.Spacer medium />
        <UI.Rating />
        <UI.Spacer medium />
        <View style={{width: '100%'}}>
          <UI.TextInput placeholder="Comment..." autoFocus multiline />
        </View>
        <UI.Divider />
        <UI.Row style={{justifyContent: 'space-between'}}>
          <UI.Button
            onClick={() => setOpenReview(false)}
            size="small"
            type="ghost">
            Cancel
          </UI.Button>
          <UI.Spacer />
          <UI.Button onClick={() => setOpenReview(false)} size="small">
            <UI.Text color="#fff">Submit</UI.Text>
          </UI.Button>
        </UI.Row>
      </UI.Modal>
    </>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 200,
  },
  layout: {
    paddingHorizontal: 0,
  },
  container: {
    paddingHorizontal: 10,
    paddingBottom: 100,
    paddingTop: 10,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: grayColor,
  },
  logoContainer: {
    width: 80,
    height: 80,
    marginHorizontal: 30,
    position: 'relative',
    top: -30,
    elevation: 5,
  },
  shopTitle: {
    fontFamily: 'SFPD-regular',
    fontSize: 20,
  },
  shopDetails: {
    overflow: 'hidden',
    width: '60%',
  },
  shopDescription: {
    color: info,
    paddingLeft: 10,
  },
  contact: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: grayColor,
  },
  contactLeft: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: grayColor,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contactRight: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  reviewSection: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingPoint: {
    marginRight: 30,
    alignItems: 'center',
  },
  ratingGraph: {
    width: '50%',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps)(VendorShopScreen);
