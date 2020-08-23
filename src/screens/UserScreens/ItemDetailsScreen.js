import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import moment from 'moment';
import {primaryColor} from '../../components/common/variables';

const ItemDetailsScreen = ({navigation, route: {params}}) => {
  const {item, order} = params;

  let arrival = 'Processing in 24 hours';
  switch (item.status) {
    case 1:
      arrival = 'Processing in 24 hours';
      break;
    case 2:
      arrival = `Arriving by: ${moment(
        new Date(item.createdAt).getTime() + 1000 * 3600 * 24 * 7,
      ).format('MMMM, DD, YYYY')}`;
      break;
    case 3:
      arrival = `Arrived on: ${moment(new Date(item.updatedAt)).format(
        'MMMM, DD, YYYY',
      )}`;
      break;
    case 0:
      arrival = `Declined on: ${moment(new Date(item.updatedAt)).format(
        'MMMM, DD, YYYY',
      )}`;
      break;
    default:
      arrival = 'Processing in 24 hours';
      break;
  }

  return (
    <>
      <Header
        title="Item Details"
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

        {item && (
          <CartItem
            name={item.product.name}
            quantity={item.quantity}
            image={{uri: item.product.images[0].url}}
            shipping={item.product.shipping > 0 && item.product.shipping}
            amount={item.product.price}
            onClick={() =>
              navigation.navigate('SingleProduct', {product: item.product})
            }
            hideCloseButton
          />
        )}

        <View style={styles.container}>
          <UI.Spacer />

          <UI.Text bold>{arrival}</UI.Text>

          <UI.Spacer medium />

          <UI.Text style={styles.title}>Ships to:</UI.Text>

          <UI.Text>{item.address.name}</UI.Text>
          <UI.Text>{item.address.address}</UI.Text>
          <UI.Text>{`${item.address.city}, ${item.address.state}, ${item.address.postalCode}`}</UI.Text>
          <UI.Text>Nigeria.</UI.Text>

          <UI.ListItem
            onClick={() => navigation.navigate('OrderDetails', {order})}
            body={<UI.Text color={primaryColor}>View Order Details</UI.Text>}
            right={<UI.Icon size={18} name="ios-arrow-forward" />}
          />

          <UI.Spacer />

          <UI.ListItem
            onClick={() => navigation.navigate('ContactSupport')}
            body={<UI.Text color={primaryColor}>Contact Support</UI.Text>}
            right={<UI.Icon size={18} name="ios-arrow-forward" />}
          />
        </View>
        <UI.Spacer medium />
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
