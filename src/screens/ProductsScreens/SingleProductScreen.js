import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, View, Image } from 'react-native';
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
  TextInput,
  Row,
  Divider,
  Clickable,
} from '../../components/common';
import Header from '../../components/Header';
import Comment from '../../components/Comment';
import {
  shoe1,
  female4,
  shoe7,
  shoe6,
  shoe5,
  shoe3,
  shoe2,
  shoe4,
} from '../../assets/images';
import {
  grayColor,
  info,
  danger,
  primaryColor,
} from '../../components/common/variables';

const colors = [
  { label: '', value: '' },
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Orange', value: 'orange' },
  { label: 'Green', value: 'green' },
];
const sizes = [
  { label: '', value: '' },
  { label: 'S', value: 's' },
  { label: 'M', value: 'm' },
  { label: 'L', value: 'l' },
  { label: 'XL', value: 'xl' },
  { label: 'XXL', value: 'xxl' },
];
const SingleProductScreen = ({ navigation }) => {
  const [likeCount, setLikeCount] = useState(123);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [showCommentBox, setShowCommentBox] = useState(false);

  return (
    <>
      <Header
        isCart
        title="Water Proof Watch"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Clickable>
        }
        headerRight={
          <>
            <Clickable onClick={() => navigation.navigate('Cart')}>
              <Icon name="shopping-bag" size={22} type="Feather" color="#fff" />
            </Clickable>
            <Spacer medium />
            <Clickable onClick={() => navigation.navigate('Search')}>
              <Icon name="ios-search" color="#fff" />
            </Clickable>
          </>
        }
      />
      <Layout style={styles.layout}>
        <Swiper animated autoplayTimeout={5} height={300} loop autoplay>
          <View>
            <Image style={styles.featured} source={shoe1} />
          </View>
          <View>
            <Image style={styles.featured} source={shoe2} />
          </View>
          <View>
            <Image style={styles.featured} source={shoe3} />
          </View>
          <View>
            <Image style={styles.featured} source={shoe4} />
          </View>
          <View>
            <Image style={styles.featured} source={shoe5} />
          </View>
          <View>
            <Image style={styles.featured} source={shoe6} />
          </View>
          <View>
            <Image style={styles.featured} source={shoe7} />
          </View>
        </Swiper>
        <View style={styles.titleContainer}>
          <Text style={styles.category} heading>
            Men
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.activities}>
            <ActivityButton
              // inActiveIcon={
              //   <Icon
              //     type="FontAwesome"
              //     size={20}
              //     name="heart-o"
              //     color={info}
              //   />
              // }
              activeIcon={
                <Icon
                  type="FontAwesome"
                  size={20}
                  name="heart"
                  color={danger}
                />
              }
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
              // inActiveIcon={
              //   <Icon
              //     type="FontAwesome"
              //     size={20}
              //     name="bookmark-o"
              //     color={info}
              //   />
              // }
              activeIcon={
                <Icon
                  type="FontAwesome"
                  size={20}
                  name="bookmark"
                  color={primaryColor}
                />
              }
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

          <View style={styles.container}>
            <Text style={styles.title} size={22}>
              China Sneakers
            </Text>
          </View>

          <View>
            <Accordion initialIndex={0}>
              <AccordionItem headerText="Description">
                <Text>
                  Enjoy the beauty of italian cotton all over your body. This
                  item will fit your body and warm you up all over and during
                  spring. This item will fit your body and warm you up all over
                  and during spring.
                  {'\n\n'}
                  And over and over again, this is the text.
                </Text>
              </AccordionItem>
              <AccordionItem headerText="Item Specifications">
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
                <Spacer />
                <Link onClick={() => navigation.navigate('VendorShop')}>
                  Vendor Details
                </Link>
              </AccordionItem>
              <AccordionItem headerText="Shipping Information"></AccordionItem>
              <AccordionItem headerText="Buyer Guarantee"></AccordionItem>
            </Accordion>
          </View>

          <Spacer />

          <View style={styles.container}>
            <Spacer medium />

            <View>
              <Text heading>Color</Text>
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
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  paddingRight: 10,
                }}>
                <Column size="6">
                  <Text heading>Size</Text>
                  <Select
                    type="dropdown"
                    selected={selectedSize}
                    onChange={(item) => {
                      setSelectedSize(item);
                    }}
                    data={sizes}
                  />
                </Column>
                <Spacer />
                <Column size="6">
                  <Text heading>Quantity</Text>
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="Enter quantity"
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

          <Divider />

          <Spacer medium />

          <View style={styles.container}>
            <Row
              style={{
                justifyContent: 'space-between',
              }}>
              <Text style={styles.title} size={20}>
                Comments
              </Text>
              <Link onClick={() => navigation.navigate('ProductComments')}>
                {/* <Icon name={'md-arrow-forward'} /> */}
                See All Comments
              </Link>
            </Row>
            <View>
              <Spacer medium />
              {showCommentBox && (
                <TextInput rows={8} placeholder="Write your comment..." />
              )}

              <Spacer />
              {!showCommentBox && (
                <Button onClick={() => setShowCommentBox(true)}>
                  <Text color="#fff">Write a comment</Text>
                </Button>
              )}
              {showCommentBox && (
                <Button onClick={() => setShowCommentBox(false)}>
                  <Text color="#fff">Submit</Text>
                </Button>
              )}
              <Spacer medium />
            </View>
            <Comment
              date="20/02/2020"
              image={female4}
              name="Mark Zukerberg"
              comment="This poduct is extremely good. i love it. And it shipped within 3 ays like promised."
            />
            <Comment
              date="20/02/2020"
              image={female4}
              name="Mark Zukerberg"
              comment="This poduct is extremely good. i love it. And it shipped within 3 ays like promised."
            />
            <Comment
              date="20/02/2020"
              image={female4}
              name="Mark Zukerberg"
              comment="This poduct is extremely good. i love it. And it shipped within 3 ays like promised."
            />
          </View>
        </View>
        <Spacer large />
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
    paddingBottom: 10,
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
