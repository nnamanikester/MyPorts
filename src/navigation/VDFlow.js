import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VDDrawerNavigation from './VDFlows/VendorDrawerNavigation';

const Stack = createStackNavigator();

const VDFlow = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="VDHome" component={VDDrawerNavigation} />
    </Stack.Navigator>
  );
};

export default VDFlow;
