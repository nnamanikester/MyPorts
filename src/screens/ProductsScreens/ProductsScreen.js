import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Layout,
  Spacer,
  Text,
  Icon,
  ListItem,
  Avatar,
  Row,
  Column,
  Clickable,
} from '../../components/common';
import Header from '../../components/Header';
import Product from '../../components/Product';
import FeaturedProduct from '../../components/FeaturedProduct';
import { ScrollView, StyleSheet, View } from 'react-native';
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
  const [hideHeader, setHideHeader] = useState(false);

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
      <Layout
        onScrollDown={() => setHideHeader(false)}
        onScrollUp={() => setHideHeader(true)}>
        <View style={styles.container}>
          <Text style={styles.title}>Featured Products</Text>
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
          <Text style={styles.title}>Latest Products</Text>
          <Spacer />
          <Row>
            <Column size="6" style={{ alignItems: 'center' }}>
              <Product
                quantity="89"
                image={female1}
                name="Water Proof Bag"
                vendor="Chiomy Styles"
                onClick={() => navigation.navigate('SingleProduct')}
              />
            </Column>
            <Column style={{ alignItems: 'center' }} size="6">
              <Product
                quantity="14"
                image={male1}
                name="Table Spoon"
                vendor="Benson Utilities"
                onClick={() => navigation.navigate('SingleProduct')}
              />
            </Column>
            <Column size="6" style={{ alignItems: 'center' }}>
              <Product
                image={female2}
                name="Female belt holder"
                vendor="Genny Collections"
                quantity="31"
                onClick={() => navigation.navigate('SingleProduct')}
              />
            </Column>
            <Column size="6" style={{ alignItems: 'center' }}>
              <Product
                quantity="45"
                image={female3}
                name="Balenciaga Shoe"
                vendor="Chucks Ventiany"
                onClick={() => navigation.navigate('SingleProduct')}
              />
            </Column>
            <Column size="6" style={{ alignItems: 'center' }}>
              <Product
                quantity="15"
                image={shoe1}
                name="Adidas Shoe"
                vendor="Adidas"
                onClick={() => navigation.navigate('SingleProduct')}
              />
            </Column>
            <Column size="6" style={{ alignItems: 'center' }}>
              <Product
                quantity="20"
                image={female3}
                name="Nike Shoe"
                vendor="Nike"
                onClick={() => navigation.navigate('SingleProduct')}
              />
            </Column>
            <Column size="6" style={{ alignItems: 'center' }}>
              <Product
                quantity="8"
                image={female3}
                name="Gucci Bag"
                vendor="Cossy Viantae"
                onClick={() => navigation.navigate('SingleProduct')}
              />
            </Column>
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
});

export default ProductsScreen;
