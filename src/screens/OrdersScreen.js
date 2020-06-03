import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  Text,
  Layout,
  Icon,
  Spacer,
  Card,
  ListItem,
  Divider,
  Row,
} from '../components/common';
import Header from '../components/Header';
import {
  success,
  info,
  primaryColor,
  grayColor,
  warning,
} from '../components/common/variables';
import Order from '../components/Order';

const OrdersScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Order History"
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
      <Layout>
        <Spacer />
        <View style={styles.container}>
          <Order
            status="warning"
            dateTime="August 29, 2020  3:59 PM"
            orderNo="95793729"
            trackingNo="IW74DH7HF83HD"
            itemPrice="23,000"
            quantity={34}
          />
          <Spacer />
          <Order
            status="success"
            dateTime="August 29, 2020  3:59 PM"
            orderNo="95793729"
            trackingNo="IW74DH7HF83HD"
            itemPrice="3,000"
            quantity={3}
          />
          <Spacer />
          <Order
            status="danger"
            dateTime="August 29, 2020  3:59 PM"
            orderNo="95793729"
            trackingNo="IW74DH7HF83HD"
            itemPrice="23,000"
            quantity={34}
          />
          <Spacer />
          <Order
            status="waiting"
            dateTime="August 29, 2020  3:59 PM"
            orderNo="95793729"
            trackingNo="IW74DH7HF83HD"
            itemPrice="23,000"
            quantity={34}
          />
          <Spacer />
          <Order
            dateTime="August 29, 2020  3:59 PM"
            orderNo="95793729"
            trackingNo="IW74DH7HF83HD"
            itemPrice="23,000"
            quantity={34}
          />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default OrdersScreen;
