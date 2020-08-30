import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import {connect} from 'react-redux';
import moment from 'moment';
import {formatMoney} from '../../utils';
import {info} from '../../components/common/variables';

const VDOrderDetailsScreen = ({navigation, route: {params}}) => {
  const {order} = params;
  return (
    <>
      <Header
        title="Order Details"
        headerLeft={
          <UI.Clickable
            style={{flexDirection: 'row'}}
            onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
            <UI.Spacer medium />
          </UI.Clickable>
        }
        headerRight={
          <UI.Option
            icon={
              <View style={{flexDirection: 'row'}}>
                <UI.Spacer medium />
                <UI.Icon name="md-more" color="#fff" />
              </View>
            }
            options={[{label: 'Mark as Delivered', action: () => {}}]}
          />
        }
      />
      <UI.Layout>
        <UI.Spacer medium />

        <View style={styles.container}>
          <UI.Text heading>ORDER PLACED ON: </UI.Text>
          <UI.Text>{moment(order.createdAt).format('MMMM DD, YYYY')}</UI.Text>

          <UI.Spacer medium />

          <UI.Text heading>AMOUNT PAID: </UI.Text>
          <UI.Text>PRICE: {formatMoney(order.amount)}</UI.Text>
          <UI.Text>
            SHIPPING:{' '}
            {order.product.shipping > 0
              ? formatMoney(order.product.shipping)
              : 'Free'}
          </UI.Text>
          <UI.Text bold>
            TOTAL: {formatMoney(order.product.shipping + order.amount)}
          </UI.Text>

          <UI.Spacer medium />

          <UI.Text heading>LOCATION: </UI.Text>
          <UI.Text>{order.address.address}</UI.Text>
          <UI.Text>
            {order.address.state}, {order.address.postalCode}
          </UI.Text>

          <UI.Spacer medium />

          <UI.Text heading>ITEM TO SHIP: </UI.Text>

          <CartItem
            name={order.product.name}
            quantity={order.quantity}
            image={{uri: order.product.images[0].url}}
            onClick={() =>
              navigation.navigate('VDSingleProduct', {product: order.product})
            }
            hideCloseButton
          />
        </View>

        <UI.Spacer large />

        <View style={styles.container}>
          {order.status === 1 ? (
            <UI.Button>
              <UI.Text color="#fff">Accept</UI.Text>
            </UI.Button>
          ) : null}

          <UI.Spacer />

          {order.status === 1 ? (
            <UI.Button type="ghost">Decline</UI.Button>
          ) : null}

          {order.status === 2 ? (
            <UI.Button>
              <UI.Text color="#fff">Mark a delivered</UI.Text>
            </UI.Button>
          ) : null}

          {order.status === 3 ? (
            <UI.Button type="disabled">
              <UI.Text color={info}>Delivered</UI.Text>
            </UI.Button>
          ) : null}

          <UI.Spacer large />
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps)(VDOrderDetailsScreen);
