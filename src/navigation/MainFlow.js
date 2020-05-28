import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import DraweNavigation from './DrawerNavigation';
import VendorShopSearch from '../screens/vendorScreens/VendorShopSearchScreen';
import VendorShopReview from '../screens/vendorScreens/VendorShopReviewScreen';
import VendorShop from '../screens/vendorScreens/VendorShopScreen';
import Payment from '../screens/checkoutScreens/PaymentScreen';
import Cart from '../screens/checkoutScreens/CartScreen';
import Orders from '../screens/OrdersScreen';
import Search from '../screens/SearchScreen';
import ProductsByCategory from '../screens/ProductsByCategoryScreen';
import SingleProduct from '../screens/SingleProductScreen';

// Settings Screens
import AccountSettings from '../screens/SettingsScreens/AccountSettingsScreen';
import NotificationSettings from '../screens/SettingsScreens/NotificationSettingsScreen';
import EmailSettings from '../screens/SettingsScreens/EmailSettingsScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="Home" component={DraweNavigation} />
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="VendorShopSearch" component={VendorShopSearch} />
      <Stack.Screen name="VendorShopReview" component={VendorShopReview} />
      <Stack.Screen name="VendorShop" component={VendorShop} />
      <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
      <Stack.Screen name="SingleProduct" component={SingleProduct} />

      {/* Settings Screens */}
      <Stack.Screen name="AccountSettings" component={AccountSettings} />
      <Stack.Screen name="EmailSettings" component={EmailSettings} />
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettings}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
