import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import OrderSummary from '../../components/OrderSummary';
import {female2} from '../../assets/images';

const ItemDetailsScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Order Details"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Clickable>
        }
        headerRight={
          <>
            <UI.Clickable
              onClick={() => navigation.navigate('Search')}
              activeOpacity={0.7}>
              <UI.Icon name="ios-search" color="#fff" />
            </UI.Clickable>
          </>
        }
      />
      <UI.Layout>
        <UI.Spacer medium />

        <View style={styles.container}>
          <UI.Text style={styles.title}>Order placed: August 25, 2020</UI.Text>
          <UI.Text>Order No: 2379758</UI.Text>

          <UI.Spacer medium />

          <UI.Text style={styles.title}>Ship to:</UI.Text>

          <UI.Text>Tiana Rosser</UI.Text>
          <UI.Text>Suit 13 Romchi Plaza, Oneday Road.</UI.Text>
          <UI.Text>Enugu, Enugu State 400252.</UI.Text>
          <UI.Text>Nigeria.</UI.Text>

          <UI.Spacer medium />

          <UI.Text style={styles.title}>Payment Method:</UI.Text>

          <UI.Text>Credit Card</UI.Text>
          <UI.Text>Master Card xxxx6435</UI.Text>

          <UI.Spacer medium />

          <UI.Text style={styles.title}>Items in Order:</UI.Text>
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

        <UI.Spacer medium />

        <View style={styles.container}>
          <UI.Text style={styles.title}>Order Summary:</UI.Text>

          <UI.Spacer />

          <OrderSummary
            order="63,000"
            shipping="3,000"
            discount="1,300"
            total="66,000"
          />

          <UI.Spacer large />
        </View>
      </UI.Layout>
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

export default ItemDetailsScreen;
