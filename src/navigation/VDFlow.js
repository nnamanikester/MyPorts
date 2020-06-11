import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VDDrawerNavigation from './VDFlows/VendorDrawerNavigation';

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
