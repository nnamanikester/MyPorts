import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
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

const VDFlow = () => {
  return (
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

export default VDFlow;
