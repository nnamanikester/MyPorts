import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './MainFlows/MainTabNavigation';
import DraweNavigation from './MainFlows/MainDrawerNavigation';
import Orders from '../screens/OrdersScreen';
import Search from '../screens/SearchScreen';
import ProductsByCategory from '../screens/ProductsByCategoryScreen';
import SingleProduct from '../screens/SingleProductScreen';
import Profile from '../screens/ProfileScreen';

// Vendor Screens
import VendorShopSearch from '../screens/vendorScreens/VendorShopSearchScreen';
import VendorShopReview from '../screens/vendorScreens/VendorShopReviewScreen';
import VendorShop from '../screens/vendorScreens/VendorShopScreen';

// Checkout Screens
import Payment from '../screens/checkoutScreens/PaymentScreen';
import Cart from '../screens/checkoutScreens/CartScreen';
import AddAddress from '../screens/checkoutScreens/AddAddressScreen';
import EditAddress from '../screens/checkoutScreens/EditAddressScreen';
import Checkout from '../screens/checkoutScreens/CheckoutScreen';

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

// Pages Screen
import PickupPolicy from '../screens/pages/PickupPolicyScreen';
import About from '../screens/pages/AboutScreen';
import AccessibiliityStatement from '../screens/pages/AccessibilityStatementScreen';
import CommunityGuidelines from '../screens/pages/CommuinityGuidelinesScreen';
import CookiePolicy from '../screens/pages/CookiePolicyScreen';
import CustomerTaxPolicy from '../screens/pages/CustomerTaxPolicyScreen';
import FAQ from '../screens/pages/FAQScreen';
import Help from '../screens/pages/HelpScreen';
import LawEnforcementPolicy from '../screens/pages/LawEnforcementPolicyScreen';
import PrivacyPolicy from '../screens/pages/PrivacyPolicyScreen';
import ReturnPolicy from '../screens/pages/ReturnPolicyScreen';
import TermsOfUse from '../screens/pages/TermsOfUseScreen';

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
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
      <Stack.Screen name="SingleProduct" component={SingleProduct} />
      <Stack.Screen name="Profile" component={Profile} />

      {/* Vendor Screens */}
      <Stack.Screen name="VendorShopSearch" component={VendorShopSearch} />
      <Stack.Screen name="VendorShopReview" component={VendorShopReview} />
      <Stack.Screen name="VendorShop" component={VendorShop} />

      {/* Checkout Screens */}
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="EditAddress" component={EditAddress} />

      {/* Settings Screens */}
      <Stack.Screen name="AccountSettings" component={AccountSettings} />
      <Stack.Screen name="EmailSettings" component={EmailSettings} />
      <Stack.Screen name="LegalAndTerms" component={LegalAndTerms} />
      <Stack.Screen name="ManageAddresses" component={ManageAddresses} />
      <Stack.Screen name="ManageWallets" component={ManageWallets} />
      <Stack.Screen name="ChangeEmailAddress" component={ChangeEmailAddress} />
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
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen
        name="LawEnforcementPolicy"
        component={LawEnforcementPolicy}
      />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="ReturnPolicy" component={ReturnPolicy} />
      <Stack.Screen name="TermsOfUse" component={TermsOfUse} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
