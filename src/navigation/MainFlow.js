import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import DraweNavigation from './DrawerNavigation';
import VendorShopSearchScreen from '../screens/vendorScreens/VendorShopSearchScreen';
import PaymentScreen from '../screens/checkout/PaymentScreen';
import ShippingScreen from '../screens/checkout/ShippingScreen';
import CartScreen from '../screens/checkout/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import VendorShopReviewScreen from '../screens/vendorScreens/VendorShopReview';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={DraweNavigation}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Tab"
        component={TabNavigation}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="VendorShopSearch"
        component={VendorShopSearchScreen}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Shipping" component={ShippingScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Orders" component={OrdersScreen} />
      <Stack.Screen
        name="VendorShopReview"
        component={VendorShopReviewScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
