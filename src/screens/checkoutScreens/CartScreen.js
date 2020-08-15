import React from 'react';
import {StyleSheet, View, ToastAndroid} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import OrderSummary from '../../components/OrderSummary';
import {connect} from 'react-redux';
import {setCartStorage} from '../../redux/actions/CartActions';
import {setAddress} from '../../redux/actions/AddressActions';
import {setWallet} from '../../redux/actions/WalletActions';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {REMOVE_CART_ITEM} from '../../apollo/mutations';
import {GET_WALLET, GET_ADDRESSES} from '../../apollo/queries';
import EmptyItem from '../../components/EmptyItem';
import {info, danger} from '../../components/common/variables';
import {formatMoney} from '../../utils';

const CartScreen = ({
  navigation,
  cart,
  setCartStorage,
  setWallet,
  setAddress,
  customer,
  wallet,
  address,
}) => {
  const [loading] = React.useState(false);
  const [optAddress, setOptAddress] = React.useState({});
  const [showFund, setShowFund] = React.useState(false);
  const [amountError, setAmountError] = React.useState(false);
  const [amount, setAmount] = React.useState('');

  const [removeItem, {loading: removeItemLoading}] = useMutation(
    REMOVE_CART_ITEM,
  );

  const {loading: walletLoading, data: walletData} = useQuery(GET_WALLET);

  const {loading: addressLoading, data: addressData} = useQuery(GET_ADDRESSES, {
    variables: {
      customerId: customer.id,
    },
  });

  // const [clearCart, {loading: clearCartLoading}] = useMutation(CLEAR_CART);

  React.useMemo(() => {
    if (walletData) {
      setWallet(walletData.getWallet);
    }
  }, [walletData]);

  React.useMemo(() => {
    if (addressData) {
      addressData.addresses.forEach((a) => {
        setOptAddress(a);
        if (a.default !== null) {
          setAddress(a);
        }
      });
    }
  }, [addressData]);

  const handleAmountInput = (value) => {
    setAmountError(false);
    if (value > 0) {
      return setAmount(value);
    }
    setAmount(value);
    return setAmountError(true);
  };

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
      <UI.Loading
        show={loading || removeItemLoading || walletLoading || addressLoading}
      />
      <Header
        title="Shopping Bag"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Spacer />
            <UI.Icon name="md-close" color="#fff" />
            <UI.Spacer />
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
                quantity={item.quantity || '0'}
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

          <UI.Divider />

          <UI.Spacer />

          <UI.Row>
            <UI.Column size="6">
              <UI.Text h3>Wallet</UI.Text>
            </UI.Column>
            <UI.Column style={{alignItems: 'flex-end'}} size="6">
              <UI.Link onClick={() => setShowFund(true)}>Fund Wallet</UI.Link>
            </UI.Column>
          </UI.Row>

          <UI.ListItem
            left={<UI.Text>MyPorts Balance</UI.Text>}
            right={
              <UI.Text bold>
                {wallet.id ? formatMoney(wallet.balance) : 0}
              </UI.Text>
            }
          />

          <UI.Spacer />

          <UI.Text h3>Ships to</UI.Text>

          <UI.ListItem
            left={<UI.Icon name="ios-pin" color={info} />}
            body={
              <>
                {address.id ? (
                  <UI.Text numberOfLines={1}>{address.address}</UI.Text>
                ) : optAddress.id ? (
                  <UI.Text numberOfLines={1}>{optAddress.address}</UI.Text>
                ) : (
                  <UI.Link
                    onClick={() => navigation.navigate('ManageAddresses')}>
                    + Add an Address
                  </UI.Link>
                )}
              </>
            }
          />

          <UI.Link onClick={() => navigation.navigate('ManageAddresses')}>
            Change Default Address
          </UI.Link>

          <UI.Spacer large />

          <UI.Button
            type={cart && cart.items && cart.items.length > 0 ? '' : 'disabled'}
            showIconDivider
            iconRight={<UI.Icon name="ios-arrow-forward" color="#fff" />}
            onClick={() => navigation.navigate('ShippingDetails')}>
            <UI.Text color="#fff">Pay Now</UI.Text>
          </UI.Button>

          <UI.Spacer large />
          <UI.Spacer large />
        </View>
      </UI.Layout>
      <UI.Modal show={showFund}>
        <View style={{alignSelf: 'flex-end'}}>
          <UI.Clickable onClick={() => setShowFund(false)}>
            <UI.Icon size={36} name="md-close" />
          </UI.Clickable>
        </View>

        <UI.Spacer large />

        {amountError && <UI.Text color={danger}>Invalid amount!</UI.Text>}

        <UI.TextInput
          value={amount}
          onChangeText={(value) => handleAmountInput(value)}
          placeholder="Enter Amount"
          keyboardType="number-pad"
        />

        <UI.Spacer />
        <UI.Button
          type={!amount > 0 || amountError ? 'disabled' : ''}
          onClick={() => {
            setShowFund(false);
            navigation.navigate('FundWallet', {amount});
          }}>
          <UI.Text color="#fff">Pay Now</UI.Text>
        </UI.Button>
      </UI.Modal>
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
    wallet: state.wallet,
    address: state.address,
    customer: state.customer.profile,
  };
};

export default connect(mapStateToProps, {
  setCartStorage,
  setAddress,
  setWallet,
})(CartScreen);
