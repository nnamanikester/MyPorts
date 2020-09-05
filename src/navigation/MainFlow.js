import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {setCustomerProfile} from '../redux/actions/CustomerActions';
import {setCartStorage} from '../redux/actions/CartActions';
import {setNotificationsStorage} from '../redux/actions/NotificationsAction';
import {setAdverts} from '../redux/actions/AdvertActions';
import {checkNetworkStatus} from '../redux/actions/NetworkActions';
import {CUSTOMER_PROFILE, NOTIFICATIONS} from '../apollo/queries';
import {useLazyQuery} from '@apollo/react-hooks';
import * as UI from '../components/common';
import {Alert} from 'react-native';
import {CART, ADVERTS} from '../apollo/queries';
import AsyncStorage from '@react-native-community/async-storage';
import {CART_STORAGE} from '../constants';

import TabNavigation from './MainFlows/MainTabNavigation';
import DraweNavigation from './MainFlows/MainDrawerNavigation';
import Search from '../screens/SearchScreen';
import ContactSupport from '../screens/ContactSupportScreen';
import Coupons from '../screens/CouponsScreen';

// Product Screens
import ProductsByCategory from '../screens/ProductsScreens/ProductsByCategoryScreen';
import SingleProduct from '../screens/ProductsScreens/SingleProductScreen';
import ProductComments from '../screens/ProductsScreens/ProductCommentsScreen';

// User Screens
import Profile from '../screens/UserScreens/ProfileScreen';
import SavedItems from '../screens/UserScreens/SavedItemsScreen';
import Orders from '../screens/UserScreens/OrdersScreen';
import ItemDetails from '../screens/UserScreens/ItemDetailsScreen';
import OrderDetails from '../screens/UserScreens/OrderDetailsScreen';
import ReferAndEarn from '../screens/UserScreens/ReferAndEarnScreen';

// Vendor Screens
import VendorShopReview from '../screens/vendorScreens/VendorShopReviewScreen';
import VendorShop from '../screens/vendorScreens/VendorShopScreen';
import VDConversation from '../screens/VDScreens/VDConversationScreen';

// Checkout Screens
import Cart from '../screens/checkoutScreens/CartScreen';
import AddAddress from '../screens/checkoutScreens/AddAddressScreen';
import EditAddress from '../screens/checkoutScreens/EditAddressScreen';

// Settings Screens
import AccountSettings from '../screens/SettingsScreens/AccountSettingsScreen';
import NotificationSettings from '../screens/SettingsScreens/NotificationSettingsScreen';
import EmailSettings from '../screens/SettingsScreens/EmailSettingsScreen';
import LegalAndTerms from '../screens/SettingsScreens/LegalAndTermsScreen';
import ManageAddresses from '../screens/SettingsScreens/ManageAdressesScreen';
import ManageWallets from '../screens/SettingsScreens/ManageWalletsScreen';
import UpdateProfile from '../screens/SettingsScreens/UpdateProfileScreen';
import ChangeEmailAddress from '../screens/SettingsScreens/ChangeEmailAddressScreen';
import ChangePassword from '../screens/SettingsScreens/ChangePasswordScreen';
import FundWallet from '../screens/SettingsScreens/FundWalletScreen';

// Pages Screen
import PickupPolicy from '../screens/pages/PickupPolicyScreen';
import About from '../screens/pages/AboutScreen';
import AccessibiliityStatement from '../screens/pages/AccessibilityStatementScreen';
import CommunityGuidelines from '../screens/pages/CommuinityGuidelinesScreen';
import CookiePolicy from '../screens/pages/CookiePolicyScreen';
import CustomerTaxPolicy from '../screens/pages/CustomerTaxPolicyScreen';
import FAQ from '../screens/pages/FAQScreen';
import LawEnforcementPolicy from '../screens/pages/LawEnforcementPolicyScreen';
import PrivacyPolicy from '../screens/pages/PrivacyPolicyScreen';
import ReturnPolicy from '../screens/pages/ReturnPolicyScreen';
import TermsOfUse from '../screens/pages/TermsOfUseScreen';

const Stack = createStackNavigator();

const StackNavigation = ({
  setCustomerProfile,
  cart,
  offline,
  setCartStorage,
  setAdverts,
  notifications,
  setNotificationsStorage,
  user,
}) => {
  const [customerProfile, {loading, data, error}] = useLazyQuery(
    CUSTOMER_PROFILE,
  );

  const [
    getCartItems,
    {loading: itemsLoading, data: items, error: itemsError},
  ] = useLazyQuery(CART);

  const [getAdverts, {data: advertsData, error: advertsError}] = useLazyQuery(
    ADVERTS,
    {
      variables: {
        where: {
          status: 1,
        },
      },
    },
  );

  const [
    getNotifications,
    {loading: notLoading, data: notData, error: notError},
  ] = useLazyQuery(NOTIFICATIONS, {
    variables: {
      first: 60,
      where: {
        user: {
          id: user.id,
        },
      },
      orderBy: 'createdAt_DESC',
    },
    pollInterval: 500,
  });

  React.useMemo(() => {
    getNotifications();
  }, [notError]);

  React.useMemo(() => {
    if (notData) {
      setNotificationsStorage(notData.notifications.edges.map((n) => n.node));
    }
  }, [notData, notifications]);

  React.useMemo(() => {
    getCartItems();
    getAdverts();
  }, [itemsError, advertsError]);

  React.useMemo(() => {
    checkNetworkStatus();
    if (!offline) {
      customerProfile();
    }
  }, [error]);

  React.useMemo(() => {
    if (error) {
      Alert.alert(
        'Network Error!',
        'Unablle to load profile. please check your internet connection and try again.',
        [{text: 'Try again', onPress: () => customerProfile()}],
      );
    }
  }, [error]);

  React.useMemo(() => {
    if (data) {
      setCustomerProfile(data.customerProfile);
    }
  }, [data]);

  React.useMemo(() => {
    if (!items) {
      async function getCart() {
        const cartItems = await AsyncStorage.getItem(CART_STORAGE);
        setCartStorage(JSON.parse(cartItems));
      }
      getCart();
    }
  }, [cart]);

  React.useMemo(() => {
    if (advertsData) {
      setAdverts(advertsData.adverts.edges.map((a) => a.node));
    }
  }, [advertsData]);

  React.useMemo(() => {
    if (items) {
      const setCart = async () => {
        await AsyncStorage.setItem(CART_STORAGE, JSON.stringify(items.cart));
        const cartItems = await AsyncStorage.getItem(CART_STORAGE);
        setCartStorage(JSON.parse(cartItems));
      };
      setCart();
    }
  }, [items]);

  return (
    <>
      <UI.Loading show={loading || itemsLoading || notLoading} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen name="Home" component={DraweNavigation} />
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ContactSupport" component={ContactSupport} />
        <Stack.Screen name="Coupons" component={Coupons} />

        {/* Product Screens */}
        <Stack.Screen
          name="ProductsByCategory"
          component={ProductsByCategory}
        />
        <Stack.Screen name="SingleProduct" component={SingleProduct} />
        <Stack.Screen name="ProductComments" component={ProductComments} />

        {/* User Screens */}
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ReferAndEarn" component={ReferAndEarn} />
        <Stack.Screen name="SavedItems" component={SavedItems} />

        {/* Vendor Screens */}
        <Stack.Screen name="VendorShopReview" component={VendorShopReview} />
        <Stack.Screen name="VendorShop" component={VendorShop} />
        <Stack.Screen name="VDConversation" component={VDConversation} />

        {/* Checkout Screens */}
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="AddAddress" component={AddAddress} />
        <Stack.Screen name="EditAddress" component={EditAddress} />

        {/* Settings Screens */}
        <Stack.Screen name="AccountSettings" component={AccountSettings} />
        <Stack.Screen name="EmailSettings" component={EmailSettings} />
        <Stack.Screen name="LegalAndTerms" component={LegalAndTerms} />
        <Stack.Screen name="ManageAddresses" component={ManageAddresses} />
        <Stack.Screen name="ManageWallets" component={ManageWallets} />
        <Stack.Screen name="FundWallet" component={FundWallet} />
        <Stack.Screen
          name="ChangeEmailAddress"
          component={ChangeEmailAddress}
        />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen
          name="NotificationSettings"
          component={NotificationSettings}
        />

        {/* Pages screens */}
        <Stack.Screen name="PickupPolicy" component={PickupPolicy} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen
          name="AccessibilityStatement"
          component={AccessibiliityStatement}
        />
        <Stack.Screen
          name="CommunityGuidelines"
          component={CommunityGuidelines}
        />
        <Stack.Screen name="CookiePolicy" component={CookiePolicy} />
        <Stack.Screen name="CustomerTaxPolicy" component={CustomerTaxPolicy} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen
          name="LawEnforcementPolicy"
          component={LawEnforcementPolicy}
        />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="ReturnPolicy" component={ReturnPolicy} />
        <Stack.Screen name="TermsOfUse" component={TermsOfUse} />
      </Stack.Navigator>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
    cart: state.cart,
    adverts: state.adverts,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, {
  setCustomerProfile,
  setCartStorage,
  setAdverts,
  setNotificationsStorage,
})(StackNavigation);
