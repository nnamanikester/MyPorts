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
        <ListItem
          onClick={() => navigation.navigate('SingleProduct')}
          left={<Avater src={female4} size={100} />}
          body={
            <>
              <Text heading>Leather Show Bag</Text>
              <Spacer />
              <Text>
                Size: <Text color={info}>XL</Text>
              </Text>
              <Text>
                Color: <Text color={info}>Red</Text>
              </Text>
              <Text>
                Quantity: <Text color={info}>24</Text>
              </Text>
            </>
          }
          right={
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity activeOpacity={0.7}>
                <Icon name="md-close" />
              </TouchableOpacity>
              <Spacer />
              <Text>NGN 15,400</Text>
            </View>
          }
        />
        <ListItem
          onClick={() => navigation.navigate('SingleProduct')}
          left={<Avater src={female2} size={100} />}
          body={
            <>
              <Text heading>Leather Show Bag</Text>
              <Spacer />
              <Text>
                Size: <Text color={info}>XL</Text>
              </Text>
              <Text>
                Color: <Text color={info}>Red</Text>
              </Text>
              <Text>
                Quantity: <Text color={info}>24</Text>
              </Text>
            </>
          }
          right={
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity activeOpacity={0.7}>
                <Icon name="md-close" />
              </TouchableOpacity>
              <Spacer />
              <Text>NGN 2,300</Text>
            </View>
          }
        />
        <ListItem
          onClick={() => navigation.navigate('SingleProduct')}
          left={<Avater src={female1} size={100} />}
          body={
            <>
              <Text heading>Leather Show Bag</Text>
              <Spacer />
              <Text>
                Size: <Text color={info}>XL</Text>
              </Text>
              <Text>
                Color: <Text color={info}>Red</Text>
              </Text>
              <Text>
                Quantity: <Text color={info}>24</Text>
              </Text>
            </>
          }
          right={
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity activeOpacity={0.7}>
                <Icon name="md-close" />
              </TouchableOpacity>
              <Spacer />
              <Text>NGN 23,500</Text>
            </View>
          }
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

export default CartScreen;
