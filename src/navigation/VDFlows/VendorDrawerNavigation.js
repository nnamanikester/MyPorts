import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../../screens/VDScreens/VDHomeScreen';
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
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
