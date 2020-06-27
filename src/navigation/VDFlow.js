import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { setVendor, setVendorProfile } from '../redux/actions/VendorActions';
import { connect } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';
import { VENDOR, VENDOR_PROFILE } from '../apollo/queries/vendor';

import VDDrawerNavigation from './VDFlows/VendorDrawerNavigation';
import VDConversation from '../screens/VDScreens/VDConversationScreen';
import VDDeliveredOrders from '../screens/VDScreens/VDDeliveredOrders';
import VDNewOrders from '../screens/VDScreens/VDNewOrdersScreen';
import VDSales from '../screens/VDScreens/VDSalesScreen';
import VDShopPreview from '../screens/VDScreens/VDShopPreviewScreen';
import VDTransactions from '../screens/VDScreens/VDTransactionsScreen';
import VDWithdrawalRequest from '../screens/VDScreens/VDWithdrawalRequestScreen';
import VDOrderDetails from '../screens/VDScreens/VDOrderDetailsScreen';

// VD Product Screens
import VDAddProduct from '../screens/VDScreens/VDProductsScreens/VDAddProductScreen';
import VDEditProduct from '../screens/VDScreens/VDProductsScreens/VDEditProductScreen';
import VDSingleProduct from '../screens/VDScreens/VDProductsScreens/VDSingleProductScreen';

// Settings Screen
import AccountSettings from '../screens/SettingsScreens/AccountSettingsScreen';
import ShopSettingsScreen from '../screens/SettingsScreens/ShopSettingsScreen';
import LegalAndTerms from '../screens/SettingsScreens/LegalAndTermsScreen';
import ManageWallets from '../screens/SettingsScreens/ManageWalletsScreen';
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
import * as UI from '../components/common';

const Stack = createStackNavigator();

const VDFlow = ({ offline, setVendorProfile, setVendor }) => {
  const [
    getVendor,
    { loading: getVendorLoading, data: getVendorData, error: getVendorError },
  ] = useLazyQuery(VENDOR);
  const [
    vendorProfile,
    {
      loading: vendorProfileLoading,
      data: vendorProfileData,
      error: vendorProfileError,
    },
  ] = useLazyQuery(VENDOR_PROFILE);

  useEffect(() => {
    vendorProfile();
    getVendor();

    if (getVendorData) setVendor(getVendorData.getVendor);
    if (vendorProfileData) setVendorProfile(vendorProfileData.vendorProfile);
  }, [getVendorData, getVendorError, vendorProfileData, vendorProfileError]);

  return (
    <>
      <UI.Loading show={vendorProfileLoading || getVendorLoading} />
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen name="VDHome" component={VDDrawerNavigation} />
        <Stack.Screen name="VDConversation" component={VDConversation} />
        <Stack.Screen name="VDDeliveredOrders" component={VDDeliveredOrders} />
        <Stack.Screen name="VDSales" component={VDSales} />
        <Stack.Screen name="VDShopPreview" component={VDShopPreview} />
        <Stack.Screen
          name="VDWithdrawalRequest"
          component={VDWithdrawalRequest}
        />
        <Stack.Screen name="VDNewOrders" component={VDNewOrders} />
        <Stack.Screen name="VDTransactions" component={VDTransactions} />
        <Stack.Screen name="VDOrderDetails" component={VDOrderDetails} />

        {/* VD Product Screens */}
        <Stack.Screen name="VDAddProduct" component={VDAddProduct} />
        <Stack.Screen name="VDEditProduct" component={VDEditProduct} />
        <Stack.Screen name="VDSingleProduct" component={VDSingleProduct} />

        {/* Settings Screens */}
        <Stack.Screen name="AccountSettings" component={AccountSettings} />
        <Stack.Screen name="ShopSettings" component={ShopSettingsScreen} />
        <Stack.Screen name="LegalAndTerms" component={LegalAndTerms} />
        <Stack.Screen name="ManageWallets" component={ManageWallets} />
        <Stack.Screen
          name="ChangeEmailAddress"
          component={ChangeEmailAddress}
        />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />

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
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps, { setVendor, setVendorProfile })(
  VDFlow,
);
