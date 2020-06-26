import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  Layout,
  Row,
  Icon,
  Spacer,
  Text,
  Link,
  Rating,
  ProgressBar,
  Divider,
  Button,
  Modal,
  TextInput,
} from '../../components/common';
import Header from '../../components/Header';
import Product from '../../components/Product';
import ContactVendor from '../../components/ContactVendor';
import SearchBar from '../../components/SearchBar';
import {
  female2,
  female3,
  female1,
  shoe1,
  female4,
  male1,
} from '../../assets/images';
import {
  grayColor,
  info,
  primaryColor,
} from '../../components/common/variables';

const VendorShopScreen = ({ navigation }) => {
  const [openChat, setOpenChat] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [verified, setVerified] = useState(true);

  return (
    <>
      <Header
        isCart
        title="Tiana Rosser"
        headerLeft={
          <Link onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Link>
        }
        headerRight={
          <>
            <Link
              onClick={() => navigation.navigate('Cart')}
              activeOpacity={0.7}>
              <Icon name="shopping-bag" size={22} type="Feather" color="#fff" />
            </Link>
            <Spacer medium />
            <Link onClick={() => navigation.navigate('Search')}>
              <Icon name="ios-search" color="#fff" />
            </Link>
          </>
        }
      />
      <Layout style={styles.layout}>
        <View style={styles.header}>
          <View>
            <Image style={styles.coverImage} source={female4} />
          </View>
          <Row>
            <View>
              <View style={styles.logoContainer}>
                <Image style={styles.logo} source={male1} />
              </View>
            </View>

            <View style={styles.shopDetails}>
              <Spacer />
              <Text style={styles.shopTitle}>
                Tiana Rosser {'  '}
                {verified ? (
                  <Icon
                    size={18}
                    type="Octicons"
                    color={primaryColor}
                    name="verified"
                  />
                ) : (
                  <Icon
                    size={18}
                    type="Octicons"
                    color={info}
                    name="unverified"
                  />
                )}
              </Text>
              <Spacer />
              <Text style={styles.shopDescription}>
                I was part of something special. Eventually, you do.
              </Text>
            </View>
          </Row>

          <Spacer />

          <Row style={styles.contact}>
            <View style={styles.contactLeft}>
              <Icon name="ios-mail" color={primaryColor} />
              <Spacer />
              <Link>Email</Link>
            </View>

            <View style={styles.contactRight}>
              <Icon name="ios-call" color={primaryColor} />
              <Spacer />
              <Link>Phone</Link>
            </View>
          </Row>

          <Spacer />

          <Row
            style={{ justifyContent: 'space-between', paddingHorizontal: 10 }}>
            <Text style={styles.title}>Ratings and Reviews</Text>
            <Link onClick={() => navigation.navigate('VendorShopReview')}>
              See All Reviews
            </Link>
          </Row>

          <View style={styles.reviewSection}>
            <View style={styles.ratingPoint}>
              <Text size={50}>4.0</Text>
              <Rating size={15} s4={1} />
              <Text>10,000</Text>
            </View>

            <View style={styles.ratingGraph}>
              <ProgressBar label="5" percent={75} />
              <ProgressBar label="4" percent={15} />
              <ProgressBar label="3" percent={2} />
              <ProgressBar label="2" percent={3} />
              <ProgressBar label="1" percent={5} />
            </View>
          </View>

          <Spacer />

          <Divider />

          <View style={{ paddingHorizontal: 10 }}>
            <Button onClick={() => setOpenReview(true)}>
              <Icon size={20} name="md-create" color="#fff" />
              {'   '}
              <Text color="#fff">Write a review</Text>
            </Button>
            <Spacer />
          </View>
        </View>

        <Divider />

        <View style={styles.container}>
          <Row
            style={{ justifyContent: 'space-between', paddingHorizontal: 10 }}>
            <Text style={styles.title}>Recent Products</Text>
            <Link onClick={() => setShowSearchBar(!showSearchBar)}>
              <Icon name={showSearchBar ? 'md-close' : 'ios-search'} />
            </Link>
          </Row>

          {showSearchBar && (
            <View style={styles.searchBar}>
              <SearchBar placeholder="What are you looking for?" />
            </View>
          )}

          <Spacer />

          <Row style={{ justifyContent: 'space-between' }}>
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
          </Row>
        </View>
      </Layout>

      <ContactVendor
        isOpen={openChat}
        onChatOpen={() => setOpenChat(true)}
        onChatClose={() => setOpenChat(false)}
        chatImage={male1}
      />

      <Modal show={openReview}>
        <Text heading>Write a Review</Text>
        <Spacer medium />
        <Rating />
        <Spacer medium />
        <View style={{ width: '100%' }}>
          <TextInput placeholder="Comment..." autoFocus multiline />
        </View>
        <Divider />
        <Row style={{ justifyContent: 'space-between' }}>
          <Button
            onClick={() => setOpenReview(false)}
            size="small"
            type="ghost">
            Cancel
          </Button>
          <Spacer />
          <Button onClick={() => setOpenReview(false)} size="small">
            <Text color="#fff">Submit</Text>
          </Button>
        </Row>
      </Modal>
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

export default VendorShopScreen;
