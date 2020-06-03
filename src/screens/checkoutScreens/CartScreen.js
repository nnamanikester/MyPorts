import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Text,
  Layout,
  Icon,
  ListItem,
  Spacer,
  TextInput,
  Row,
  Button,
  Divider,
  Loading,
} from '../../components/common';
import Header from '../../components/Header';
import Avater from '../../components/Avatar';
import {female4, female1, female2} from '../../assets/images';
import {info, primaryColor} from '../../components/common/variables';
import CartItem from '../../components/CartItem';
import OrderSummary from '../../components/OrderSummary';

const CartScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const goToCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('ShippingDetails');
    }, 3000);
  };

  return (
    <>
      <Loading show={loading} />
      <Header
        title="Shopping Bag"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="md-close" color="#fff" />
          </TouchableOpacity>
        }
        headerRight={
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
              activeOpacity={0.7}>
              <Icon name="ios-search" color="#fff" />
            </TouchableOpacity>
          </>
        }
      />
      <Layout>
        <Spacer medium />
        <CartItem
          name="Leather Show Bag"
          color="Red"
          size="XL"
          quantity="5"
          image={female2}
          price="2,300"
          onClick={() => navigation.navigate('SingleProduct')}
          onCloseButtonClick={() => {}}
        />

        <CartItem
          name="Leather Show Bag"
          color="Red"
          size="XL"
          quantity="5"
          image={female1}
          price="2,300"
          onClick={() => navigation.navigate('SingleProduct')}
          onCloseButtonClick={() => {}}
        />

        <CartItem
          name="Leather Show Bag"
          color="Red"
          size="XL"
          quantity="5"
          image={female4}
          price="2,300"
          onClick={() => navigation.navigate('SingleProduct')}
          onCloseButtonClick={() => {}}
        />

        <Spacer medium />

        <View style={styles.container}>
          <Text heading>Enter your coupon code here</Text>

          <Spacer />

          <TextInput placeholder="Coupon Code" />

          <Spacer medium />

          <OrderSummary
            order="63,000"
            shipping="3,000"
            discount="1,300"
            total="66,000"
          />

          <Spacer large />

          <Button onClick={() => goToCheckout()}>
            <Text color="#fff">Place Order</Text>
          </Button>

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
});

export default CartScreen;
