import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
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
  Column,
} from '../../components/common';
import Header from '../../components/Header';
import Product from '../../components/Product';
import ContactVendor from '../../components/ContactVendor';
import SearchBar from '../../components/SearchBar';
import {
  bag1,
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
  success,
} from '../../components/common/variables';

const VendorShopScreen = ({navigation}) => {
  const [openChat, setOpenChat] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <>
      <Header
        title="Tiana Rosser"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </TouchableOpacity>
        }
        headerRight={
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              activeOpacity={0.7}>
              <Icon name="shopping-bag" size={22} type="Feather" color="#fff" />
            </TouchableOpacity>
            <Spacer medium />
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
              activeOpacity={0.7}>
              <Icon name="ios-search" color="#fff" />
            </TouchableOpacity>
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
              <Text style={styles.shopTitle}> Tiana Rosser</Text>
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
          <View style={styles.reviewSection}>
            <View style={styles.ratingPoint}>
              <Text size={60}>4.0</Text>
              <Rating s3={1} />
              <Text>
                <Icon size={20} name="ios-person" /> 10,000 total
              </Text>
            </View>
            <View style={styles.ratingGraph}>
              <ProgressBar label="5" color="#79c9a1" percent={92} />
              <Spacer size={2} />
              <ProgressBar label="4" color="#aed888" percent={73} />
              <Spacer size={2} />
              <ProgressBar label="3" color="#ffd935" percent={43} />
              <Spacer size={2} />
              <ProgressBar label="2" color="#ffb235" percent={55} />
              <Spacer size={2} />
              <ProgressBar label="1" color="#ff8c5a" percent={20} />
            </View>
          </View>
          <Spacer />
          <Divider />
          <View style={{paddingHorizontal: 10}}>
            <Button onClick={() => setOpenReview(true)}>
              <Icon size={20} name="md-create" color="#fff" />
              {'   '}
              <Text color="#fff">Write a review</Text>
            </Button>
          </View>
        </View>
        <Divider />
        <View style={styles.container}>
          <Row>
            <Column size="10">
              <Text style={styles.title}>Recent Products</Text>
            </Column>
            <Column size="2" style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowSearchBar(!showSearchBar)}>
                <Icon name={showSearchBar ? 'md-close' : 'ios-search'} />
              </TouchableOpacity>
            </Column>
          </Row>

          {showSearchBar && (
            <View style={styles.searchBar}>
              <SearchBar placeholder="What are you looking for?" />
            </View>
          )}
          <Spacer />
          <Row>
            <Column size="6" style={{alignItems: 'center'}}>
              <Product
                quantity="89"
                image={female1}
                name="Water Proof Bag"
                onClick={() => navigation.navigate('SingleProduct')}
              />
            </Column>
            <Column style={{alignItems: 'center'}} size="6">
              <Product
                quantity="14"
                image={male1}
                name="Table Spoon"
                onClick={() => navigation.navigate('SingleProduct')}
              />
            </Column>
            <Column size="6" style={{alignItems: 'center'}}>
              <Product
                image={female2}
                name="Female belt holder"
                quantity="31"
                onClick={() => navigation.navigate('SingleProduct')}
              />
            </Column>
            <Column size="6" style={{alignItems: 'center'}}>
              <Product
                quantity="45"
                image={female3}
                name="Balenciaga Shoe"
                onClick={() => navigation.navigate('SingleProduct')}
              />
            </Column>
            <Column size="6" style={{alignItems: 'center'}}>
              <Product
                quantity="15"
                image={shoe1}
                name="Adidas Shoe"
                onClick={() => navigation.navigate('SingleProduct')}
              />
            </Column>
            <Column size="6" style={{alignItems: 'center'}}>
              <Product
                quantity="20"
                image={female3}
                name="Nike Shoe"
                onClick={() => navigation.navigate('SingleProduct')}
              />
            </Column>
            <Column size="6" style={{alignItems: 'center'}}>
              <Product
                quantity="8"
                image={female3}
                name="Gucci Bag"
                onClick={() => navigation.navigate('SingleProduct')}
              />
            </Column>
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
        <View style={{width: '100%'}}>
          <TextInput placeholder="Comment..." autoFocus multiline />
        </View>
        <Divider />
        <Row style={{justifyContent: 'space-between'}}>
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
  },
  ratingPoint: {
    marginRight: 20,
    alignItems: 'center',
  },
  ratingGraph: {
    width: '65%',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
});

export default VendorShopScreen;
