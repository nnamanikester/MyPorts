import React from 'react';
import {StyleSheet, View, Alert, ToastAndroid} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import {connect} from 'react-redux';
import moment from 'moment';
import {formatMoney} from '../../utils';
import {info} from '../../components/common/variables';
import {UPDATE_ORDER} from '../../apollo/mutations';
import {useMutation} from '@apollo/react-hooks';
import {setVendorOrders} from '../../redux/actions/OrderActions';
const VDOrderDetailsScreen = ({
  navigation,
  route: {params},
  orders,
  setVendorOrders,
}) => {
  const [order, setOrder] = React.useState(params.order);
  const [confirmAccept, setConfirmAccept] = React.useState(false);
  const [confirmDecline, setConfirmDecline] = React.useState(false);
  const [confirmDelivery, setConfirmDelivery] = React.useState(false);

  const [updateOrder, {loading}] = useMutation(UPDATE_ORDER);

  const handleAcceptOrder = () => {
    setConfirmAccept(false);
    updateOrder({
      variables: {
        id: order.id,
        data: {
          status: 2,
        },
      },
    })
      .then((res) => {
        setVendorOrders(
          orders.map((o) => {
            if (o.id === order.id) {
              return res.data.updateOrder;
            }
            return o;
          }),
        );
        setOrder(res.data.updateOrder);
        ToastAndroid.show(
          'Order status have been updated successfully!',
          ToastAndroid.LONG,
        );
      })
      .catch(() => {
        Alert.alert(
          'Error!',
          'Unable to Accept Order. Please check your internet connection and try again!',
        );
      });
  };

  const handleDeclineOrder = () => {
    setConfirmDecline(false);
    updateOrder({
      variables: {
        id: order.id,
        data: {
          status: 0,
        },
      },
    })
      .then((res) => {
        setVendorOrders(
          orders.map((o) => {
            if (o.id === order.id) {
              return res.data.updateOrder;
            }
            return o;
          }),
        );
        setOrder(res.data.updateOrder);
        ToastAndroid.show(
          'Order status have been updated successfully!',
          ToastAndroid.LONG,
        );
      })
      .catch(() => {
        Alert.alert(
          'Error!',
          'Unable to Decline Order. Please check your internet connection and try again!',
        );
      });
  };

  const handleOrderDelivery = () => {
    setConfirmDelivery(false);
    updateOrder({
      variables: {
        id: order.id,
        data: {
          status: 3,
        },
      },
    })
      .then((res) => {
        setVendorOrders(
          orders.map((o) => {
            if (o.id === order.id) {
              return res.data.updateOrder;
            }
            return o;
          }),
        );
        setOrder(res.data.updateOrder);
        ToastAndroid.show(
          'Order status have been updated successfully!',
          ToastAndroid.LONG,
        );
      })
      .catch(() => {
        Alert.alert(
          'Error!',
          'Unable to mark  order as delivered. Please check your internet connection and try again!',
        );
      });
  };

  return (
    <>
      <UI.Loading show={loading} />
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
            <UI.Button onClick={() => setConfirmAccept(true)}>
              <UI.Text color="#fff">Accept</UI.Text>
            </UI.Button>
          ) : null}

          <UI.Spacer />

          {order.status === 1 ? (
            <UI.Button onClick={() => setConfirmDecline(true)} type="ghost">
              Decline
            </UI.Button>
          ) : null}

          {order.status === 2 ? (
            <UI.Button onClick={() => setConfirmDelivery(true)}>
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
      <UI.Modal show={confirmAccept}>
        <UI.Spacer medium />

        <UI.Text size={18}>Are you sure you want to accept this order?</UI.Text>

        <UI.Spacer medium />

        <UI.Row
          style={{justifyContent: 'space-between', paddingHorizontal: 30}}>
          <UI.Button
            size="small"
            onClick={() => setConfirmAccept(false)}
            type="ghost">
            Cancel
          </UI.Button>
          <UI.Button size="small" onClick={handleAcceptOrder}>
            <UI.Text color="#fff">Accept</UI.Text>
          </UI.Button>
        </UI.Row>
      </UI.Modal>

      <UI.Modal show={confirmDecline}>
        <UI.Spacer medium />

        <UI.Text size={18}>
          Are you sure you want to Decline this order?
        </UI.Text>

        <UI.Spacer medium />

        <UI.Row
          style={{justifyContent: 'space-between', paddingHorizontal: 30}}>
          <UI.Button
            size="small"
            onClick={() => setConfirmDecline(false)}
            type="ghost">
            Cancel
          </UI.Button>
          <UI.Button size="small" onClick={handleDeclineOrder}>
            <UI.Text color="#fff">Decline</UI.Text>
          </UI.Button>
        </UI.Row>
      </UI.Modal>

      <UI.Modal show={confirmDelivery}>
        <UI.Spacer medium />

        <UI.Text style={{textAlign: 'center'}}>
          Are you sure this order have been delivered to the buyer? {'\n'}
          NB: We will have to confirm your delivery before you receive your
          payment.
        </UI.Text>

        <UI.Spacer medium />

        <UI.Row style={{justifyContent: 'space-between'}}>
          <UI.Button
            size="small"
            onClick={() => setConfirmDelivery(false)}
            type="ghost">
            Cancel
          </UI.Button>
          <UI.Button style={{width: 200}} onClick={handleOrderDelivery}>
            <UI.Text color="#fff">Mark as delivered</UI.Text>
          </UI.Button>
        </UI.Row>
      </UI.Modal>
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
    orders: state.orders.vendorOrders,
  };
};

export default connect(mapStateToProps, {setVendorOrders})(
  VDOrderDetailsScreen,
);
