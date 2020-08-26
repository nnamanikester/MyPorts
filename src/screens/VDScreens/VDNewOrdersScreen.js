import React from 'react';
import * as UI from '../../components/common';
import {View, StyleSheet} from 'react-native';
import {
  primaryColor,
  success,
  danger,
  info,
} from '../../components/common/variables';
import Header from '../../components/Header';
import {useLazyQuery} from '@apollo/react-hooks';
import {VENDOR_ORDERS} from '../../apollo/queries';
import {connect} from 'react-redux';
import {Alert} from '../../components/common';
import {formatMoney} from '../../utils';
import EmptyItem from '../../components/EmptyItem';

const VDNewOrdersScreen = ({navigation, vendor}) => {
  const [orders, setOrders] = React.useState([]);
  const [getOrders, {data, loading, error}] = useLazyQuery(VENDOR_ORDERS, {
    variables: {
      id: vendor.id,
    },
  });

  React.useEffect(() => {
    getOrders();
  }, []);

  React.useMemo(() => {
    if (data) {
      let ords = [];
      data.vendorOrders.forEach((o) => {
        if (o.status === 1) {
          ords.push(o);
        }
      });
      setOrders(ords);
    }
  }, [data]);

  React.useMemo(() => {
    if (error) {
      Alert.alert(
        'Error!',
        'Unable to get orders. Please check your internet connection and try again!',
        [{text: 'Try again', onPress: () => getOrders()}],
      );
    }
  }, [error]);

  return (
    <>
      <UI.Loading show={loading} />
      <Header
        title="New Orders"
        headerLeft={
          <UI.Clickable
            style={{flexDirection: 'row'}}
            onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
            <UI.Spacer medium />
          </UI.Clickable>
        }
      />
      <UI.Layout>
        <UI.Spacer />

        {orders.length > 0 &&
          orders.map((o, i) => {
            let stat = (
              <UI.Text color={success} note style={styles.status}>
                New
              </UI.Text>
            );

            switch (o.status) {
              case 0:
                stat = (
                  <UI.Text color={danger} note style={styles.status}>
                    Cancelled
                  </UI.Text>
                );
                break;
              case 1:
                stat = (
                  <UI.Text color={success} note style={styles.status}>
                    New
                  </UI.Text>
                );
                break;
              case 2:
                stat = (
                  <UI.Text color={primaryColor} note style={styles.status}>
                    processed
                  </UI.Text>
                );
                break;
              case 3:
                stat = (
                  <UI.Text color="" note style={styles.status}>
                    Delivered
                  </UI.Text>
                );
                break;
              default:
                stat = (
                  <UI.Text color={success} note style={styles.status}>
                    New
                  </UI.Text>
                );
                break;
            }
            return (
              <UI.ListItem
                key={o.id + i}
                marked={o.status === 1}
                onClick={() =>
                  navigation.navigate('VDOrderDetails', {order: o})
                }
                left={
                  <UI.Avatar
                    medium
                    rounded
                    src={{uri: o.product.images[0].url}}
                  />
                }
                body={
                  <>
                    <UI.Text heading>{o.product.name}</UI.Text>
                    <UI.Text numberOfLines={1} color="" note>
                      {o.address.state}, {o.address.name}.
                    </UI.Text>
                    <UI.Text numberOfLines={1} color="" note>
                      Quantity: {o.quantity}
                    </UI.Text>
                    <UI.Text numberOfLines={1} color="" note>
                      Value: {formatMoney(o.amount)}
                    </UI.Text>
                  </>
                }
                right={
                  <View style={{justifyContent: 'center', flex: 1}}>
                    {stat}
                  </View>
                }
              />
            );
          })}

        {!loading && !error && !orders.length > 0 && (
          <>
            <UI.Spacer large />
            <EmptyItem
              icon={<UI.Icon color={info} size={100} name="ios-basket" />}
              show
              title="No New Orders Yet"
              message="All New orders will appear here."
            />
          </>
        )}

        <UI.Spacer large />
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  listIcon: {
    backgroundColor: primaryColor,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  status: {
    textAlign: 'center',
    lineHeight: 15,
    fontWeight: '700',
  },
});

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor,
  };
};

export default connect(mapStateToProps)(VDNewOrdersScreen);
