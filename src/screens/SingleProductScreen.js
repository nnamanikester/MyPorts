import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {
  Layout,
  Text,
  Spacer,
  Icon,
  ActivityButton,
  Button,
  Column,
  Link,
  ListItem,
  Select,
  Accordion,
  AccordionItem,
} from '../components/common';
import Header from '../components/Header';
import {bag1, shoe1, female4} from '../assets/images';
import Swiper from 'react-native-swiper';
import {grayColor, info, primaryColor} from '../components/common/variables';

const colors = [
  {label: 'Color', value: ''},
  {label: 'Red', value: 'red'},
  {label: 'Blue', value: 'blue'},
  {label: 'Orange', value: 'orange'},
  {label: 'Green', value: 'green'},
];

const SingleProductScreen = ({navigation}) => {
  const [likeCount, setLikeCount] = useState(123);
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <>
      <Header
        isCart
        title="Water Proof Watch"
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
        <Swiper animated autoplayTimeout={5} height={300} loop autoplay>
          <View>
            <Image style={styles.featured} source={shoe1} />
          </View>
          <View>
            <Image style={styles.featured} source={female4} />
          </View>
          <View>
            <Image style={styles.featured} source={bag1} />
          </View>
        </Swiper>
        <View style={styles.titleContainer}>
          <Text style={styles.title} size={25}>
            Water Proof Watch With Leather Belt
          </Text>
          <Text style={styles.category} heading>
            Women
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.activities}>
            <ActivityButton
              inActiveIcon={
                <Icon
                  type="FontAwesome"
                  size={20}
                  name="heart-o"
                  color={info}
                />
              }
              // activeIcon={
              //   <Icon
              //     type="FontAwesome"
              //     size={20}
              //     name="heart"
              //     color={danger}
              //   />
              // }
              count={likeCount}
              onClick={() => setLikeCount(likeCount + 1)}
            />
            <Spacer medium />
            <ActivityButton
              inActiveIcon={
                <Icon
                  type="Feather"
                  size={22}
                  name="message-circle"
                  color={info}
                />
              }
              count={likeCount}
              onClick={() => setLikeCount(likeCount + 1)}
            />
            <Spacer medium />
            <ActivityButton
              inActiveIcon={
                <Icon
                  type="FontAwesome"
                  size={20}
                  name="bookmark-o"
                  color={info}
                />
              }
              // activeIcon={
              //   <Icon
              //     type="FontAwesome"
              //     size={20}
              //     name="bookmark"
              //     color={primaryColor}
              //   />
              // }
              count={likeCount}
              onClick={() => setLikeCount(likeCount + 1)}
            />
            <Spacer />
            <View style={styles.share}>
              <ActivityButton
                inActiveIcon={<Icon size={22} name="md-share" color={info} />}
                onClick={() => setLikeCount(likeCount - 1)}
              />
            </View>
          </View>

          <Spacer />

          <View>
            <Accordion initialIndex={0}>
              <AccordionItem headerText="Product Description">
                <Text>
                  Enjoy the beauty of italian cotton all over your body. This
                  item will fit your body and warm you up all over and during
                  spring. This item will fit your body and warm you up all over
                  and during spring. {'\n\n'}
                  And over and over again, this is the text.
                </Text>
              </AccordionItem>
              <AccordionItem headerText="Product Details">
                <ListItem
                  left={<Text heading>Quantity</Text>}
                  right={<Text>29</Text>}
                />
                <ListItem
                  left={<Text heading>Sizes</Text>}
                  right={<Text>S/M/L/XL/XXL</Text>}
                />
                <ListItem
                  left={<Text heading>Price for 1</Text>}
                  right={<Text>N 2,500</Text>}
                />
                <ListItem
                  left={<Text heading>Shipping Cost</Text>}
                  right={<Text>Free</Text>}
                />
                <ListItem
                  left={<Text heading>Discount</Text>}
                  right={<Text>10% / 20 Pieces</Text>}
                />
                <ListItem
                  left={<Text heading>Location</Text>}
                  right={<Text>Victoria Island, Lagos.</Text>}
                />
                <ListItem
                  left={<Text heading>Delivery Period</Text>}
                  right={<Text>3 Days Max.</Text>}
                />
              </AccordionItem>
            </Accordion>
            <Spacer />
          </View>

          <Spacer medium />

          <Link onClick={() => navigation.navigate('VendorShop')}>
            Vendor Details
          </Link>

          <Spacer medium />

          <View>
            <Select
              type="dropdown"
              selected={selectedColor}
              onChange={(item) => {
                setSelectedColor(item);
              }}
              data={colors}
            />
            <Spacer />
            <View
              style={{flexDirection: 'row', width: '100%', paddingRight: 10}}>
              <Column size="6">
                <Select
                  type="dropdown"
                  selected={selectedColor}
                  onChange={(item) => {
                    setSelectedColor(item);
                  }}
                  data={colors}
                />
              </Column>
              <Spacer />
              <Column size="6">
                <Select
                  type="dropdown"
                  selected={selectedColor}
                  onChange={(item) => {
                    setSelectedColor(item);
                  }}
                  data={colors}
                />
              </Column>
            </View>
          </View>

          <Spacer />

          <Button>
            <Text color="#fff">Add to cart</Text>
          </Button>
          <Spacer />
          <Button type="outline">
            <Text>Add to favorites</Text>
          </Button>
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  featured: {
    width: '100%',
    height: 300,
  },
  layout: {
    paddingHorizontal: 0,
  },
  container: {
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
  titleContainer: {
    position: 'absolute',
    height: 250,
    width: '100%',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingRight: 70,
  },
  title: {
    fontFamily: 'SFPD-regular',
    color: '#fff',
  },
  activities: {
    height: 60,
    width: '100%',
    borderBottomColor: grayColor,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  share: {
    alignItems: 'flex-end',
    flex: 1,
  },
  category: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#0009',
    paddingHorizontal: 5,
    top: 10,
    color: '#fff',
    textTransform: 'uppercase',
  },
  bottomCart: {
    position: 'absolute',
    height: 60,
    width: '100%',
    elevation: 5,
    bottom: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default SingleProductScreen;
