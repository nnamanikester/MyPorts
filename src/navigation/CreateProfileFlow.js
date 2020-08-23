import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreateProfileScreen from '../screens/CreateProfileScreens/CreateProfileScreen';

const Stack = createStackNavigator();

const CreateProfileFLow = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
    </Stack.Navigator>
  );
};

export default CreateProfileFLow;
