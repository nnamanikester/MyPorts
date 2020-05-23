import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import VendorsListScreen from '../screens/vendorScreens/VendorsListScreen';
import ProductsScreen from '../screens/ProductsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {Icon, Text} from '../components/common';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Vendors">
      <Tab.Screen
        name="Vendors"
        component={VendorsListScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="ios-business" color={color} size={focused ? 34 : 28} />
          ),
          tabBarLabel: ({color}) => (
            <Text color={color} size={12}>
              Vendors
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="ios-list" color={color} size={focused ? 32 : 28} />
          ),
          tabBarLabel: ({color}) => (
            <Text size={12} color={color}>
              Categories
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="opencart"
              type="FontAwesome"
              color={color}
              size={focused ? 28 : 24}
            />
          ),
          tabBarLabel: ({color}) => (
            <Text size={12} color={color}>
              Shop
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'ios-notifications' : 'ios-notifications-outline'}
              color={color}
              size={focused ? 32 : 28}
            />
          ),
          tabBarLabel: ({color}) => (
            <Text size={12} color={color}>
              Notifications
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="ios-settings" color={color} size={focused ? 32 : 28} />
          ),
          tabBarLabel: ({color}) => (
            <Text size={12} color={color}>
              Settings
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
