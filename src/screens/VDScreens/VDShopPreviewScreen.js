import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Alert} from 'react-native';
import * as UI from '../../components/common';
import {female4, male1} from '../../assets/images';
import {
  grayColor,
  info,
  primaryColor,
  inactiveColor,
} from '../../components/common/variables';
import Skeleton from 'react-native-skeleton-placeholder';
import {connect} from 'react-redux';
import {useLazyQuery} from '@apollo/react-hooks';
import {VENDOR} from '../../apollo/queries';
import {setVendor} from '../../redux/actions/VendorActions';

const VDShopPreviewScreen = ({navigation, offline, setVendor, vendor}) => {
  const [getVendor, {loading, data, error}] = useLazyQuery(VENDOR);

  useEffect(() => {
    if (!offline) {
      if (!data && !error) {
        getVendor();
      }
      if (data) {
        setVendor(data.getVendor);
      }
      if (error) {
        Alert.alert('Error!', 'An errror occured while trying to load data!');
      }
    }
  }, [data, error]);

  return (
    <>
      <UI.Loading show={loading} />
      <UI.Layout style={styles.layout}>
        <View style={styles.header}>
          <View>
            <Image style={styles.coverImage} source={female4} />
          </View>
          <UI.Row>
            <View>
              <View style={styles.logoContainer}>
                <Image style={styles.logo} source={male1} />
              </View>
            </View>

            <View style={styles.shopDetails}>
              <UI.Spacer />
              <UI.Text style={styles.shopTitle}>
                Tiana Rosser {'  '}
                {vendor.isVerified ? (
                  <UI.Icon
                    size={18}
                    type="Octicons"
                    color={primaryColor}
                    name="verified"
                  />
                ) : (
                  <UI.Icon
                    size={18}
                    type="Octicons"
                    color={info}
                    name="unverified"
                  />
                )}
              </UI.Text>
              <UI.Spacer />
              <UI.Text style={styles.shopDescription}>
                {vendor.profile.description}
              </UI.Text>
            </View>
          </UI.Row>

          <UI.Spacer />

          <UI.Row style={styles.contact}>
            <View style={styles.contactLeft}>
              <UI.Icon name="ios-mail" color={primaryColor} />
              <UI.Spacer />
              <UI.Link>Email</UI.Link>
            </View>

            <View style={styles.contactRight}>
              <UI.Icon name="ios-call" color={primaryColor} />
              <UI.Spacer />
              <UI.Link>Phone</UI.Link>
            </View>
          </UI.Row>

          <UI.Spacer />

          <View style={{paddingHorizontal: 10}}>
            <UI.Text style={styles.title}>Ratings and Reviews</UI.Text>
          </View>

          <View style={styles.reviewSection}>
            <View style={styles.ratingPoint}>
              <UI.Text size={50}>5.0</UI.Text>
              <UI.Rating size={15} s4={1} />
              <UI.Text>0</UI.Text>
            </View>

            <View style={styles.ratingGraph}>
              <UI.ProgressBar label="5" percent={0} />
              <UI.ProgressBar label="4" percent={0} />
              <UI.ProgressBar label="3" percent={0} />
              <UI.ProgressBar label="2" percent={0} />
              <UI.ProgressBar label="1" percent={0} />
            </View>
          </View>

          <UI.Spacer />

          <UI.Divider />

          <View style={{paddingHorizontal: 10}}>
            <UI.Button>
              <UI.Icon size={20} name="md-create" color="#fff" />
              {'   '}
              <UI.Text color="#fff">Write a review</UI.Text>
            </UI.Button>
            <UI.Spacer />
          </View>
        </View>

        <UI.Divider />

        <View style={styles.container}>
          <View style={{paddingHorizontal: 10}}>
            <UI.Text style={styles.title}>Recent Products</UI.Text>
          </View>

          <UI.Spacer />

          <UI.Row style={{justifyContent: 'space-between'}}>
            <Skeleton highlightColor={inactiveColor}>
              <View>
                <View style={{width: 120, height: 120, borderRadius: 5}} />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
              </View>
              <View>
                <View style={{width: 120, height: 120, borderRadius: 5}} />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
              </View>
              <View>
                <View style={{width: 120, height: 120, borderRadius: 5}} />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
              </View>
              <View>
                <View style={{width: 120, height: 120, borderRadius: 5}} />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
              </View>
              <View>
                <View style={{width: 120, height: 120, borderRadius: 5}} />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
              </View>
              <View>
                <View style={{width: 120, height: 120, borderRadius: 5}} />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
              </View>
              <View>
                <View style={{width: 120, height: 120, borderRadius: 5}} />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
              </View>
              <View>
                <View style={{width: 120, height: 120, borderRadius: 5}} />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
              </View>
              <View>
                <View style={{width: 120, height: 120, borderRadius: 5}} />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    width: 120,
                    height: 12,
                    marginTop: 10,
                    borderRadius: 5,
                  }}
                />
              </View>
            </Skeleton>
          </UI.Row>
        </View>
      </UI.Layout>
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

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
    vendor: state.vendor,
  };
};

export default connect(mapStateToProps, {setVendor})(VDShopPreviewScreen);
