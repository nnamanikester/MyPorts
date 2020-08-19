import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import Order from '../../components/Order';
import {connect} from 'react-redux';
import {useLazyQuery} from '@apollo/react-hooks';
import {ORDER_HISTORY} from '../../apollo/queries';
import moment from 'moment';
import {info} from '../../components/common/variables';
import EmptyItem from '../../components/EmptyItem';

const OrdersScreen = ({navigation, customer}) => {
  const [getOrders, {data, loading, error}] = useLazyQuery(ORDER_HISTORY, {
    variables: {
      id: customer.id,
    },
    pollInterval: 500,
  });

  React.useEffect(() => {
    getOrders();
  }, []);

  React.useMemo(() => {
    if (error) {
      Alert.alert('Error', 'Unable to get Orders. Please try again', [
        {text: 'Try again', onPress: () => getOrders()},
      ]);
    }
  }, [error]);

  return (
    <>
      <UI.Loading show={loading} />

      <Header
        isCart
        title="Order History"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Clickable>
        }
        headerRight={
          <>
            <UI.Clickable onClick={() => navigation.navigate('Cart')}>
              <UI.Icon
                name="shopping-bag"
                size={22}
                type="Feather"
                color="#fff"
              />
            </UI.Clickable>
            <UI.Spacer medium />
            <UI.Clickable onClick={() => navigation.navigate('Search')}>
              <UI.Icon name="ios-search" color="#fff" />
            </UI.Clickable>
          </>
        }
      />
      <UI.Layout>
        <UI.Spacer />
        <View style={styles.container}>
          {data &&
            data.orderHistory &&
            data.orderHistory.length > 0 &&
            data.orderHistory.map((o, i) => {
              return (
                <View key={o.id + i}>
                  <UI.Row style={{justifyContent: 'space-between'}}>
                    <UI.Text bold>
                      Order Placed:{' '}
                      {moment(o.createdAt).format('MMMM, DD, YYYY')}
                    </UI.Text>

                    <UI.Link
                      onClick={() =>
                        navigation.navigate('OrderDetails', {order: o})
                      }>
                      Order Details
                    </UI.Link>
                  </UI.Row>

                  {o.items &&
                    o.items.map((item, index) => {
                      let status = 'warning';
                      switch (item.status) {
                        case 1:
                          status = 'warning';
                          break;
                        case 2:
                          status = 'waiting';
                          break;
                        case 3:
                          status = 'success';
                          break;
                        case 0:
                          status = 'danger';
                          break;
                        default:
                          status = 'waiting';
                          break;
                      }

                      return (
                        <Order
                          key={item + index}
                          onClick={() =>
                            navigation.navigate('ItemDetails', {item, order: o})
                          }
                          status={status}
                          name={item.product.name}
                          itemPrice={item.amount}
                          image={{uri: item.product.images[0].url}}
                          quantity={item.quantity}
                        />
                      );
                    })}
                  <UI.Spacer medium />
                </View>
              );
            })}

          {!loading &&
            !error &&
            data &&
            data.orderHistory &&
            data.orderHistory.length < 1 && (
              <>
                <UI.Spacer large />
                <EmptyItem
                  icon={<UI.Icon color={info} size={100} name="ios-basket" />}
                  show
                  title="No Orders Found!"
                  message="You have not place any order yet! All orders will appear here."
                />
              </>
            )}
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    customer: state.customer.profile,
  };
};

export default connect(mapStateToProps)(OrdersScreen);
