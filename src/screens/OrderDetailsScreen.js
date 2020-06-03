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
} from '../components/common';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import Avater from '../components/Avatar';
import {female4, female1, female2} from '../assets/images';
import {info, primaryColor} from '../components/common/variables';

const OrderDetailsScreen = ({navigation}) => {
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

        <Spacer medium />

        <View style={styles.container}>
          <Text heading>Enter your coupon code here</Text>

          <Spacer />

          <TextInput placeholder="Coupon Code" />

          <Spacer medium />

          <Row style={{justifyContent: 'space-between'}}>
            <Text heading>Order: </Text>
            <Text>NGN 63,000</Text>
          </Row>

          <Spacer />

          <Row style={{justifyContent: 'space-between'}}>
            <Text heading>Shipping: </Text>
            <Text>NGN 3,000</Text>
          </Row>

          <Spacer />

          <Row style={{justifyContent: 'space-between'}}>
            <Text heading>Discount: </Text>
            <Text color={primaryColor}>- NGN 1,300</Text>
          </Row>

          <Spacer />
          <Divider />

          <Row style={{justifyContent: 'space-between'}}>
            <Text bold>Total: </Text>
            <Text bold>NGN 66,000</Text>
          </Row>

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

export default OrderDetailsScreen;
