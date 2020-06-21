import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Layout,
  Spacer,
  Text,
  Icon,
  Row,
  Clickable,
} from '../../components/common';
import Swiper from 'react-native-swiper';
import Header from '../../components/Header';
import Product from '../../components/Product';
import FeaturedProduct from '../../components/FeaturedProduct';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import {
  female1,
  female2,
  female3,
  male1,
  bag1,
  shoe1,
  shoe2,
} from '../../assets/images';

const ProductsScreen = ({ navigation }) => {
  return (
    <>
      <Header
        isCart
        title="Shop"
        headerLeft={
          <Clickable onClick={() => navigation.openDrawer()}>
            <Icon name="ios-menu" color="#fff" />
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
      <Layout>
        <View style={styles.container}>
          <Swiper
            paginationStyle={{ bottom: 5 }}
            animated
            autoplayTimeout={5}
            height={100}
            loop
            autoplay>
            <Clickable>
              <Image style={styles.advert} source={shoe1} />
            </Clickable>
            <Clickable>
              <Image style={styles.advert} source={shoe2} />
            </Clickable>
            <Clickable>
              <Image style={styles.advert} source={bag1} />
            </Clickable>
            <Clickable>
              <Image style={styles.advert} source={female3} />
            </Clickable>
          </Swiper>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Top Selling Products</Text>
          <Spacer />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FeaturedProduct
            quantity="8"
            image={bag1}
            name="Gucci Bag"
            vendor="Shop And Smile"
            onClick={() => navigation.navigate('SingleProduct')}
          />
          <FeaturedProduct
            quantity="89"
            image={shoe1}
            name="Water Proof Bag"
            vendor="Ugoski Wears"
            onClick={() => navigation.navigate('SingleProduct')}
          />
          <FeaturedProduct
            quantity="14"
            image={shoe2}
            name="Table Spoon"
            vendor="Benard Shoes"
            onClick={() => navigation.navigate('SingleProduct')}
          />
          <FeaturedProduct
            image={female2}
            name="Female belt holder"
            vendor="Viky Coperate wears"
            quantity="31"
            onClick={() => navigation.navigate('SingleProduct')}
          />
          <FeaturedProduct
            quantity="45"
            image={female3}
            name="Balenciaga Shoe"
            vendor="Kriative Collections"
            onClick={() => navigation.navigate('SingleProduct')}
          />
        </ScrollView>

        <View style={styles.container}>
          <Text style={styles.title}>Shop Our Collections</Text>
          <Spacer />
        </View>

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
            image={female3}
            onClick={() => navigation.navigate('SingleProduct')}
          />
        </ScrollView>

        <View style={styles.container}>
          <Text style={styles.title}>Latest Products</Text>
          <Spacer />
          <Row style={{ justifyContent: 'space-between' }}>
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
          </Row>
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
  advert: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});

export default ProductsScreen;
