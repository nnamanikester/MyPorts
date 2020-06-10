import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VDHome from '../screens/VDScreens/VDHomeScreen';

const Stack = createStackNavigator();

const VDFlow = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="VDHome" component={VDHome} />
    </Stack.Navigator>
  );
};

export default VDFlow;
