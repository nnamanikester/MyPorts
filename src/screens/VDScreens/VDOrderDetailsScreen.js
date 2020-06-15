import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  Layout,
  Icon,
  Spacer,
  Loading,
  Clickable,
  Button,
} from '../../components/common';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import OrderSummary from '../../components/OrderSummary';
import { female2 } from '../../assets/images';

const VDOrderDetailsScreen = ({ navigation }) => {
  return (
    <>
      <Header
        title="Order Details"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Clickable>
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

          <Text style={styles.title}>Items in Order:</Text>
        </View>

        <CartItem
          name="Leather Show Bag"
          color="Red"
          size="XL"
          quantity="5"
          image={female2}
          price="2,300"
          onClick={() => navigation.navigate('')}
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

          <Spacer medium />

          <Button>
            <Text color="#fff">Accept</Text>
          </Button>
          <Spacer />
          <Button type="ghost">Cancel</Button>

          <Spacer large />
          <Spacer large />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default VDOrderDetailsScreen;
