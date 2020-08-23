import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Layout, Icon, Spacer, Clickable} from '../../components/common';
import Header from '../../components/Header';
import OrderSummary from '../../components/OrderSummary';
import moment from 'moment';
import Order from '../../components/Order';

const OrderDetailsScreen = ({navigation, route: {params}}) => {
  const {order} = params;

  const calculateOrders = () => {
    let total = 0;
    order.items.forEach((i) => {
      total += i.product.price * i.quantity;
    });
    return total.toString();
  };

  const calculateShipping = () => {
    let total = 0;
    order.items.forEach((i) => {
      total += i.product.shipping;
    });
    return total.toString();
  };

  const calculatePercentageDiscount = (price, percent) => {
    return (price / 100) * percent;
  };

  const calculateDiscount = () => {
    let total = 0;
    order.items.forEach((i) => {
      total +=
        (i.product.fixedDiscount ||
          calculatePercentageDiscount(
            i.product.price,
            i.product.percentageDiscount,
          )) * i.quantity;
    });
    return total.toString();
  };

  const calculateTotal = () => {
    return (
      parseInt(calculateOrders()) +
      parseInt(calculateShipping()) -
      parseInt(calculateDiscount())
    );
  };

  console.log(calculateDiscount());

  return (
    <>
      <Header
        title="Order Details"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Clickable>
        }
        headerRight={
          <>
            <Clickable
              onClick={() => navigation.navigate('Search')}
              activeOpacity={0.7}>
              <Icon name="ios-search" color="#fff" />
            </Clickable>
          </>
        }
      />
      <Layout>
        <Spacer medium />

        <View style={styles.container}>
          <Text h3>
            Order placed:{' '}
            {moment(new Date(order.createdAt)).format('MMMM, DD, YYYY')}
          </Text>
          <Spacer />
          <Text>
            Order No: <Text bold>#{order.orderNo}</Text>
          </Text>

          <Spacer medium />

          <Text style={styles.title}>Items in Order:</Text>
        </View>

        {order.items &&
          order.items.length > 0 &&
          order.items.map((item, i) => {
            let status = 'warning';
            let text = 'Processing in 24 hours';
            switch (item.status) {
              case 1:
                status = 'warning';
                text = 'Processing in 24 hours';
                break;
              case 2:
                status = 'waiting';
                text = `Arriving by: ${moment(
                  new Date(item.createdAt).getTime() + 1000 * 3600 * 24 * 7,
                ).format('MMMM, DD, YYYY')}`;
                break;
              case 3:
                status = 'success';
                text = `Arrived on: ${moment(new Date(item.updatedAt)).format(
                  'MMMM, DD, YYYY',
                )}`;
                break;
              case 0:
                status = 'danger';
                text = `Declined on: ${moment(new Date(item.updatedAt)).format(
                  'MMMM, DD, YYYY',
                )}`;
                break;
              default:
                status = 'warning';
                text = 'Processing in 24 hours';
                break;
            }

            return (
              <Order
                key={item + i}
                onClick={() =>
                  navigation.navigate('ItemDetails', {item, order})
                }
                status={status}
                name={text}
                itemPrice={item.amount}
                image={{uri: item.product.images[0].url}}
                quantity={item.quantity}
              />
            );
          })}

        <Spacer medium />

        <View style={styles.container}>
          <Text style={styles.title}>Order Summary:</Text>

          <Spacer />

          <OrderSummary
            order={calculateOrders()}
            shipping={calculateShipping()}
            discount={calculateDiscount() === '0' ? null : calculateDiscount()}
            total={calculateTotal()}
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
