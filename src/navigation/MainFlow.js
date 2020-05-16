import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import DraweNavigation from './DrawerNavigation';
import VendorShopSearchScreen from '../screens/VendorShopSearchScreen';
import PaymentScreen from '../screens/PaymentScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import CartScreen from '../screens/CartScreen';

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
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
