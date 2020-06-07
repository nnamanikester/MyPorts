import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Layout, Icon, Spacer } from '../../components/common';
import Header from '../../components/Header';
import Order from '../../components/Order';

const OrdersScreen = ({ navigation }) => {
  return (
    <>
      <Header
        isCart
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
            date="August 29, 2020"
            orderNo="95793729"
            vendor="Shop and Smile"
            itemPrice="23,000"
            quantity={34}
          />

          <Order
            onClick={() => navigation.navigate('OrderDetails')}
            status="success"
            date="August 29, 2020"
            orderNo="95793729"
            vendor="Shop and Smile"
            itemPrice="3,000"
            quantity={3}
          />

          <Order
            onClick={() => navigation.navigate('OrderDetails')}
            status="danger"
            date="August 29, 2020"
            orderNo="95793729"
            vendor="Shop and Smile"
            itemPrice="23,000"
            quantity={34}
          />

          <Order
            onClick={() => navigation.navigate('OrderDetails')}
            status="waiting"
            date="August 29, 2020"
            orderNo="95793729"
            vendor="Shop and Smile"
            itemPrice="23,000"
            quantity={34}
          />

          <Order
            onClick={() => navigation.navigate('OrderDetails')}
            date="August 29, 2020"
            orderNo="95793729"
            vendor="Shop and Smile"
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
