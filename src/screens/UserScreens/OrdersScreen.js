import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Layout, Icon, Spacer, Clickable} from '../../components/common';
import Header from '../../components/Header';
import Order from '../../components/Order';

const OrdersScreen = ({navigation}) => {
  return (
    <>
      <Header
        isCart
        title="Order History"
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
      <Layout>
        <Spacer />
        <View style={styles.container}>
          <Order
            onClick={() => navigation.navigate('OrderDetails')}
            status="warning"
            date="August 29, 2020"
            orderNo="95793729"
            itemPrice="23,000"
          />

          <Order
            onClick={() => navigation.navigate('OrderDetails')}
            status="success"
            date="August 29, 2020"
            orderNo="95793729"
            itemPrice="3,000"
          />

          <Order
            onClick={() => navigation.navigate('OrderDetails')}
            status="danger"
            date="August 29, 2020"
            orderNo="95793729"
            itemPrice="23,000"
          />

          <Order
            onClick={() => navigation.navigate('OrderDetails')}
            status="waiting"
            date="August 29, 2020"
            orderNo="95793729"
            itemPrice="23,000"
          />

          <Order
            onClick={() => navigation.navigate('OrderDetails')}
            date="August 29, 2020"
            orderNo="95793729"
            itemPrice="23,000"
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
