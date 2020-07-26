import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import OrderSummary from '../../components/OrderSummary';
import {connect} from 'react-redux';
import {setCartStorage} from '../../redux/actions/CartActions';

const CartScreen = ({navigation, cart, setCartStorage}) => {
  const [loading] = React.useState(false);

  const handleRemoveItem = (id) => {};

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

        {cart.items && cart.items.length > 1
          ? cart.items.map((item, i) => {
              return (
                <CartItem
                  key={item.id + i}
                  name={item.product.name}
                  shipping={
                    item.product.shipping === 0
                      ? 'Free'
                      : `${item.product.shipping}`
                  }
                  quantity={item.quantity}
                  image={{uri: item.product.images[0].url}}
                  price={`${item.product.price * item.quantity}`}
                  onClick={() =>
                    navigation.navigate('SingleProduct', {
                      product: item.product,
                    })
                  }
                  onCloseButtonClick={() => handleRemoveItem(item.product.id)}
                />
              );
            })
          : null}

        <UI.Spacer medium />

        <View style={styles.container}>
          <UI.Text heading>Enter your coupon code here</UI.Text>

          <UI.Spacer />

          <UI.TextInput placeholder="Coupon Code" />

          <UI.Spacer medium />

          <OrderSummary
            order="63,000"
            shipping="3,000"
            discount="1,300"
            total="66,000"
          />

          <UI.Spacer large />

          <UI.Button
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
