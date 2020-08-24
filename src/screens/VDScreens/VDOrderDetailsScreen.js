import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Text,
  Layout,
  Icon,
  Spacer,
  Accordion,
  AccordionItem,
  Clickable,
  Button,
  Column,
  Option,
} from '../../components/common';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import OrderSummary from '../../components/OrderSummary';
import {female2} from '../../assets/images';

const VDOrderDetailsScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Order Details"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Clickable>
        }
        headerRight={
          <Option
            icon={<Icon name="md-more" color="#fff" />}
            options={[
              {label: 'Mark as Delivered', action: () => {}},
              {label: 'Report a problem', action: () => {}},
            ]}
          />
        }
      />
      <Layout>
        <Spacer medium />

        <View style={styles.container}>
          <Text heading>Order placed: August 25, 2020</Text>
          <Text style={styles.title}>Order No 2954379758</Text>
        </View>
        <Accordion>
          <AccordionItem headerText="Shipping Details">
            <Text>Tiana Rosser</Text>
            <Text>Suit 13 Romchi Plaza, Oneday Road.</Text>
            <Text>Enugu, Enugu State 400252.</Text>
            <Text>09044758394.</Text>
          </AccordionItem>

          <AccordionItem headerText="Items">
            <CartItem
              name="Leather Show Bag"
              color="Red"
              size="XL"
              quantity="5"
              image={female2}
              price="2,300"
              onClick={() => navigation.navigate('VDSingleProduct')}
              onCloseButtonClick={() => {}}
              hideCloseButton
            />
          </AccordionItem>

          <AccordionItem headerText="Order Summary">
            <OrderSummary
              order="63,000"
              shipping="3,000"
              discount="1,300"
              total="66,000"
            />
          </AccordionItem>

          <AccordionItem headerText="Shipping Terms">
            <Text>Helloe</Text>
          </AccordionItem>
        </Accordion>
        <Spacer medium />

        <View style={styles.container}>
          <View style={styles.buttons}>
            <Column size="6">
              <Button type="ghost">Cancel</Button>
            </Column>
            <Spacer />
            <Column size="6">
              <Button>
                <Text color="#fff">Accept</Text>
              </Button>
            </Column>
          </View>

          <Spacer large />
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
  title: {
    fontFamily: 'SFPD-regular',
    fontSize: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default VDOrderDetailsScreen;
