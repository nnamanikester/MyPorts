import React from 'react';
import {View, StyleSheet, Image, ToastAndroid} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import Product from '../../components/Product';
import SearchBar from '../../components/SearchBar';
import {
  female2,
  female3,
  female1,
  shoe1,
  female4,
  male1,
} from '../../assets/images';
import {grayColor, info, primaryColor} from '../../components/common/variables';
import {GET_SHOP} from '../../apollo/queries';
import {useLazyQuery} from '@apollo/react-hooks';
import {connect} from 'react-redux';

const VendorShopScreen = ({navigation, route: {params}, offline}) => {
  const {s} = params;
  const [openReview, setOpenReview] = React.useState(false);
  const [showSearchBar, setShowSearchBar] = React.useState(false);
  const [shop, setShop] = React.useState({});

  const [getShop, {data, loading, error}] = useLazyQuery(GET_SHOP, {
    variables: {
      id: s.id,
    },
    pollInterval: 500,
  });

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
      <UI.Layout style={styles.layout}>
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
              <UI.Text size={50}>4.0</UI.Text>
              <UI.Rating size={15} s4={1} />
              <UI.Text>10,000</UI.Text>
            </View>

            <View style={styles.ratingGraph}>
              <UI.ProgressBar label="5" percent={75} />
              <UI.ProgressBar label="4" percent={15} />
              <UI.ProgressBar label="3" percent={2} />
              <UI.ProgressBar label="2" percent={3} />
              <UI.ProgressBar label="1" percent={5} />
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
          <UI.Row
            style={{justifyContent: 'space-between', paddingHorizontal: 10}}>
            <UI.Text style={styles.title}>Recent Products</UI.Text>
            <UI.Link onClick={() => setShowSearchBar(!showSearchBar)}>
              <UI.Icon name={showSearchBar ? 'md-close' : 'ios-search'} />
            </UI.Link>
          </UI.Row>

          {showSearchBar && (
            <View>
              <SearchBar placeholder="What are you looking for?" />
            </View>
          )}

          <UI.Spacer />

          <UI.Row style={{justifyContent: 'space-between'}}>
            <Product
              quantity="89"
              image={female1}
              name="Water Proof Bag"
              onClick={() => navigation.navigate('SingleProduct')}
            />

            <Product
              quantity="14"
              image={male1}
              name="Table Spoon"
              onClick={() => navigation.navigate('SingleProduct')}
            />

            <Product
              image={female2}
              name="Female belt holder"
              quantity="31"
              onClick={() => navigation.navigate('SingleProduct')}
            />

            <Product
              quantity="45"
              image={female3}
              name="Balenciaga Shoe"
              onClick={() => navigation.navigate('SingleProduct')}
            />

            <Product
              quantity="15"
              image={shoe1}
              name="Adidas Shoe"
              onClick={() => navigation.navigate('SingleProduct')}
            />
            <Product
              quantity="20"
              image={female3}
              name="Nike Shoe"
              onClick={() => navigation.navigate('SingleProduct')}
            />

            <Product
              quantity="8"
              image={female3}
              name="Gucci Bag"
              onClick={() => navigation.navigate('SingleProduct')}
            />
          </UI.Row>
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
    offline: !state.network.isConnecte,
  };
};

export default connect(mapStateToProps)(VendorShopScreen);
