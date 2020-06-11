import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import {
  Text,
  TopTab,
  Layout,
  Icon,
  Clickable,
  Spacer,
} from '../../components/common';
import VDAnalyticsScreen from './VDDashboardScreens/VDAnalyticsScreen';
import VDProductsScreen from './VDDashboardScreens/VDProductsScreen';
import VDShopSettingsScreen from './VDDashboardScreens/VDShopSettingsScreen';
import VDMessagingScreen from './VDDashboardScreens/VDMessagingScreen';
import VDAccountSettingsScreen from './VDDashboardScreens/VDAccountSettingsScreen';
import { primaryColor } from '../../components/common/variables';

const VDHome = ({ navigation }) => {
  return (
    <>
      <Header
        style={{ elevation: 0 }}
        title="Dashboard"
        headerLeft={
          <Clickable onClick={() => {}}>
            <Icon name="ios-menu" color="#fff" />
          </Clickable>
        }
        headerRight={<></>}
      />
      <TopTab
        tabBarOptions={{
          showLabel: false,
          showIcon: true,
          activeTintColor: '#fff',
          tabStyle: { backgroundColor: primaryColor },
        }}
        screens={[
          {
            name: 'Analytics',
            component: VDAnalyticsScreen,
            options: {
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  style={{ width: 80 }}
                  name="ios-pie"
                  size={focused ? 30 : size}
                  color={color}
                />
              ),
            },
          },
          {
            name: 'Products',
            component: VDProductsScreen,
            options: {
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  style={{ width: 80 }}
                  name="ios-basket"
                  size={focused ? 30 : size}
                  color={color}
                />
              ),
            },
          },
          {
            name: 'Messaging',
            component: VDMessagingScreen,
            options: {
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  name="ios-chatbubbles"
                  style={{ width: 80 }}
                  size={focused ? 30 : size}
                  color={color}
                />
              ),
            },
          },
          {
            name: 'ShopSettings',
            component: VDShopSettingsScreen,
            options: {
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  name="ios-shop"
                  style={{ width: 80 }}
                  size={focused ? 30 : size}
                  color={color}
                />
              ),
            },
          },
          {
            name: 'AccountSettings',
            component: VDAccountSettingsScreen,
            options: {
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  name="ios-person"
                  size={focused ? 30 : size}
                  color={color}
                  style={{ width: 80 }}
                />
              ),
            },
          },
          {
            name: 'AccountSet',
            component: VDAccountSettingsScreen,
            options: {
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  name="ios-settings"
                  size={focused ? 30 : size}
                  color={color}
                  style={{ width: 80 }}
                />
              ),
            },
          },
        ]}
      />
    </>
  );
};

export default VDHome;
