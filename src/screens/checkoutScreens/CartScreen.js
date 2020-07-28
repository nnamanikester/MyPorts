import React from 'react';
import {StyleSheet, View, ToastAndroid} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import OrderSummary from '../../components/OrderSummary';
import {connect} from 'react-redux';
import {setCartStorage} from '../../redux/actions/CartActions';
import {useMutation} from '@apollo/react-hooks';
import {REMOVE_CART_ITEM, CLEAR_CART} from '../../apollo/mutations';
import EmptyItem from '../../components/EmptyItem';
import {info} from '../../components/common/variables';

const CartScreen = ({navigation, cart, setCartStorage}) => {
  const [loading] = React.useState(false);

  const [removeItem, {loading: removeItemLoading}] = useMutation(
    REMOVE_CART_ITEM,
  );
  // const [clearCart, {loading: clearCartLoading}] = useMutation(CLEAR_CART);

  const handleRemoveItem = (id) => {
    const tempCart = cart;
    setCartStorage({...cart, items: cart.items.filter((i) => i.id !== id)});
    removeItem({
      variables: {
        itemId: id,
        cartId: cart.id,
      },
    })
      .then((res) => {
        setCartStorage(res.data.removeCartItem);
        ToastAndroid.show('Item removed!', ToastAndroid.SHORT);
      })
      .catch((e) => {
        setCartStorage(tempCart);
        ToastAndroid.show(
          'An error occured while trying to remove item.',
          ToastAndroid.SHORT,
        );
      });
  };

  // const handleClearitems = () => {
  //   clearCart({
  //     variables: {
  //       id: cart.id,
  //     },
  //   });
  // };

  const calculateOrders = () => {
    let total = 0;
    cart.items.forEach((i) => {
      total += i.product.price * i.quantity;
    });
    return total.toString();
  };

  const calculateShipping = () => {
    let total = 0;
    cart.items.forEach((i) => {
      total += i.product.shipping;
    });
    return total.toString();
  };

  const calculatePercentageDiscount = (price, percent) => {
    return (price / 100) * percent;
  };

  const calculateDiscount = () => {
    let total = 0;
    cart.items.forEach((i) => {
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

  return (
    <>
      <UI.Loading show={loading} />
      <Header
        title="Shopping Bag"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="md-close" color="#fff" />
          </UI.Clickable>
        }
        headerRight={
          <>
            <UI.Clickable onClick={() => navigation.navigate('Search')}>
              <UI.Icon name="ios-search" color="#fff" />
            </UI.Clickable>
          </>
        }
      />
      <UI.Layout>
        <UI.Spacer medium />

        {cart && cart.items && cart.items.length > 0 ? (
          cart.items.map((item, i) => {
            return (
              <CartItem
                key={item.id + i}
                name={item.product.name}
                shipping={`${item.product.shipping}`}
                quantity={item.quantity}
                image={{uri: item.product.images[0].url}}
                price={`${item.product.price * item.quantity}`}
                discount={`${
                  (item.product.fixedDiscount ||
                    calculatePercentageDiscount(
                      item.product.price,
                      item.product.percentageDiscount,
                    )) * item.quantity
                }`}
                onClick={() =>
                  navigation.navigate('SingleProduct', {
                    product: item.product,
                  })
                }
                onCloseButtonClick={() => handleRemoveItem(item.id)}
              />
            );
          })
        ) : (
          <View>
            <UI.Spacer large />
            <EmptyItem
              icon={<UI.Icon color={info} size={100} name="md-cart" />}
              show
              title="You Cart is Empty!"
              message="Items you added to the cart will appear here."
            />
            <UI.Spacer large />
          </View>
        )}

        <UI.Spacer medium />

        <View style={styles.container}>
          {/* <UI.Text heading>Enter your coupon code here</UI.Text>

          <UI.Spacer />

          <UI.TextInput placeholder="Coupon Code" />

          <UI.Spacer medium /> */}

          <OrderSummary
            order={calculateOrders() || '0'}
            shipping={calculateShipping() || '0'}
            discount={calculateDiscount() || '0'}
            total={calculateTotal() || '0'}
          />

          <UI.Spacer large />

          <UI.Button
            type={cart && cart.items && cart.items.length > 0 ? '' : 'disabled'}
            showIconDivider
            iconRight={<UI.Icon name="ios-arrow-forward" color="#fff" />}
            onClick={() => {}}>
            <UI.Text color="#fff">Place Order</UI.Text>
          </UI.Button>

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
});

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, {setCartStorage})(CartScreen);
