import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from '../../screens/pages/AboutScreen';
import SettingsScreen from '../../screens/SettingsScreens/SettingsScreen';
import TabNavigation from './MainTabNavigation';
import DrawerContent from '../../components/Drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="back"
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{
        width: '80%',
      }}>
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
