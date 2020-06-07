import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  Text,
  Layout,
  Icon,
  ListItem,
  Spacer,
  TextInput,
  Row,
  Button,
  Divider,
  Loading,
} from '../../components/common';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import OrderSummary from '../../components/OrderSummary';
import { female2 } from '../../assets/images';

const OrderDetailsScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const goToCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('ShippingDetails');
    }, 3000);
  };

  return (
    <>
      <Loading show={loading} />
      <Header
        title="Order Details"
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
              onPress={() => navigation.navigate('Search')}
              activeOpacity={0.7}>
              <Icon name="ios-search" color="#fff" />
            </TouchableOpacity>
          </>
        }
      />
      <Layout>
        <Spacer medium />

        <View style={styles.container}>
          <Text style={styles.title}>Order placed: August 25, 2020</Text>
          <Text>Order No: 2379758</Text>

          <Spacer medium />

          <Text style={styles.title}>Ship to:</Text>

          <Text>Tiana Rosser</Text>
          <Text>Suit 13 Romchi Plaza, Oneday Road.</Text>
          <Text>Enugu, Enugu State 400252.</Text>
          <Text>Nigeria.</Text>

          <Spacer medium />

          <Text style={styles.title}>Payment Method:</Text>

          <Text>Credit Card</Text>
          <Text>Master Card xxxx6435</Text>

          <Spacer medium />

          <Text style={styles.title}>Items in Order:</Text>
        </View>

        <CartItem
          name="Leather Show Bag"
          color="Red"
          size="XL"
          quantity="5"
          image={female2}
          price="2,300"
          onClick={() => navigation.navigate('SingleProduct')}
          onCloseButtonClick={() => {}}
          hideCloseButton
        />
        <CartItem
          name="Leather Show Bag"
          color="Red"
          size="XL"
          quantity="5"
          image={female2}
          price="2,300"
          onClick={() => navigation.navigate('SingleProduct')}
          onCloseButtonClick={() => {}}
          hideCloseButton
        />
        <CartItem
          name="Leather Show Bag"
          color="Red"
          size="XL"
          quantity="5"
          image={female2}
          price="2,300"
          onClick={() => navigation.navigate('SingleProduct')}
          onCloseButtonClick={() => {}}
          hideCloseButton
        />

        <Spacer medium />

        <View style={styles.container}>
          <Text style={styles.title}>Order Summary:</Text>

          <Spacer />

          <OrderSummary
            order="63,000"
            shipping="3,000"
            discount="1,300"
            total="66,000"
          />

          <Spacer large />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: 'SFPD-regular',
    fontSize: 20,
  },
});

export default OrderDetailsScreen;
