import React from 'react';
import {StyleSheet, View, ToastAndroid, Alert} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import OrderSummary from '../../components/OrderSummary';
import {connect} from 'react-redux';
import {setCartStorage} from '../../redux/actions/CartActions';
import {setAddress} from '../../redux/actions/AddressActions';
import {setWallet} from '../../redux/actions/WalletActions';
import {useMutation, useQuery, useLazyQuery} from '@apollo/react-hooks';
import {
  REMOVE_CART_ITEM,
  CHARGE_WALLET,
  CLEAR_CART,
  CREATE_ORDER,
} from '../../apollo/mutations';
import {
  GET_WALLET,
  GET_ADDRESSES,
  GET_SINGLE_PRODUCT,
} from '../../apollo/queries';
import EmptyItem from '../../components/EmptyItem';
import {info, danger} from '../../components/common/variables';
import {formatMoney} from '../../utils';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

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
  const [orderConfirmed, setOrderConfirmed] = React.useState(false);

  const [removeItem, {loading: removeItemLoading}] = useMutation(
    REMOVE_CART_ITEM,
  );

  const {loading: walletLoading, data: walletData} = useQuery(GET_WALLET);

  const {loading: addressLoading, data: addressData} = useQuery(GET_ADDRESSES, {
    variables: {
      customerId: customer.id,
    },
  });

  const [getProduct, {loading: productLoading}] = useLazyQuery(
    GET_SINGLE_PRODUCT,
  );

  const [chargeWallet, {loading: chargeLoading}] = useMutation(CHARGE_WALLET);

  const [clearCart, {loading: clearCartLoading}] = useMutation(CLEAR_CART);

  const [createOrder, {loading: orderLoading}] = useMutation(CREATE_ORDER);

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
    removeItem({
      variables: {
        itemId: id,
        cartId: cart.id,
      },
    })
      .then((res) => {
        setCartStorage(res.data.removeCartItem);
        setCartStorage({
          ...cart,
          items: cart.items.filter((i) => i.id !== res.data.removeCartItem.id),
        });
        ToastAndroid.show('Item removed!', ToastAndroid.SHORT);
      })
      .catch((e) => {
        ToastAndroid.show(
          'An error occured while trying to remove item.',
          ToastAndroid.SHORT,
        );
      });
  };

  const handleClearitems = () => {
    clearCart({
      variables: {
        id: cart.id,
      },
    });
  };

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

  const checkItemsInStock = () => {
    // loop through each cart and check if the quantity is greater than or equal to the quantity of product
    if (cart && cart.items) {
      let count = 0;
      cart.items.forEach((i) => {
        getProduct({
          variables: {
            id: i.product.id,
          },
        });
        // if greater, indicate the item and the quantity available, stop the loop and return false.
        if (i.quantity > i.product.quantity) {
          count++;
          const items = cart.items.map((it) => {
            if (it.id === i.id) {
              return {...it, status: 0};
            }
            return it;
          });
          setCartStorage({
            ...cart,
            items: [...items],
          });
        }
        if (count > 0) {
          return false;
        }
      });
      // if equal or less, return true.
      return true;
    }
  };

  const checkBalanceToTotal = () => {
    // check if the user balance is greater than or equal to the total amount and notify em to fund wallet.
    if (wallet.balance > calculateTotal()) {
      // return true if greater.
      return true;
    }
    // return false if less.
    return false;
  };

  const handleCreateOrder = () => {
    // Create order and notification
    createOrder({
      variables: {
        data: {
          orderNo: uuidv4().replace('-', ''),
          customer: {
            connect: {
              id: customer.id,
            },
          },
          items: {
            create: [
              ...cart.items.map((ca) => {
                return {
                  quantity: ca.quantity,
                  amount: ca.product.price,
                  address: {
                    connect: {
                      id: address.id || optAddress.id,
                    },
                  },
                  product: {
                    connect: {
                      id: ca.product.id,
                    },
                  },
                  customer: {
                    connect: {
                      id: customer.id,
                    },
                  },
                  vendor: {
                    connect: {
                      id: ca.product.vendor.id,
                    },
                  },
                };
              }),
            ],
          },
        },
        cart: cart.id,
        products: {
          info: [
            ...cart.items.map((it) => {
              return {
                id: it.product.id,
                quantity: it.quantity,
              };
            }),
          ],
        },
      },
    })
      .then((res) => {
        // if successful, clear cart items;
        handleClearitems();
        setOrderConfirmed(true);
      })
      .catch((e) => {
        // notify use if error
        Alert.alert(
          'Error',
          'Unable to process order! Please contact support.',
        );
        console.log(e);
      });
  };

  const handleChargeWallet = () => {
    // Debit the amount payable from the user wallet.
    chargeWallet({
      variables: {
        amount: parseFloat(calculateTotal()),
        reference: uuidv4(),
      },
    })
      .then((res) => {
        // if successfull, create and order
        setWallet(res.data.chargeWallet);
        handleCreateOrder();
      })
      .catch(() => {
        // if not successful, notify the user of an unknown problem and return.
        Alert.alert('Error!', 'Unable to place order! Please try again.');
      });
  };

  const handleCheckAddress = () => {
    if (!address.id && !optAddress.id) {
      return false;
    }
    return true;
  };

  const handlePayment = () => {
    // Check if the items in the cart are still in stock.
    if (checkItemsInStock()) {
      // if in stock, Check if the balance is greater that the amount payable.
      if (checkBalanceToTotal()) {
        // Check if the user has address available.
        if (handleCheckAddress()) {
          // If it is, go ahead and reduct the amount payable from the wallet.
          handleChargeWallet();
        } else {
          Alert.alert('Message', 'Please add a billing address');
        }
      } else {
        // If it's not, notify the user to fund his/her wallet.
        Alert.alert(
          'Message',
          'Your MyPorts balance is lesser than the total payable amount. Fund your wallet to continue.',
          [{text: 'Fund Wallet', onPress: () => setShowFund(true)}],
        );
      }
    } else {
      // if not instock, notify the user of the item and ask em to remove it.
      Alert.alert(
        'Message',
        'An item in your cart is no longer available! Please remove the item before you proceed',
      );
    }
    // If successfull, create an order with the items in the cart.
    // if not, notify the user of an unknown problem and tell them to try again.
  };

  return (
    <>
      <UI.Loading
        show={
          loading ||
          removeItemLoading ||
          walletLoading ||
          addressLoading ||
          productLoading ||
          chargeLoading ||
          clearCartLoading ||
          orderLoading
        }
      />
      <UI.Alert
        show={orderConfirmed}
        header="Congratulations!"
        success
        showBg
        buttonText="View Orders"
        message={'Your Order have been placed and is being processed'}
        onButtonClick={() => {
          setOrderConfirmed(false);
          navigation.navigate('Orders');
        }}
      />
      <Header
        title="Shopping Bag"
        headerLeft={
          <UI.Clickable
            style={{flexDirection: 'row'}}
            onClick={() => navigation.goBack()}>
            <UI.Icon name="md-close" color="#fff" />
            <UI.Spacer medium />
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
                stock={item.status}
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
            onClick={() => handlePayment()}>
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
