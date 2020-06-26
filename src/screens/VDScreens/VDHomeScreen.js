import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import {
  TopTab,
  Icon,
  Clickable,
  Badge,
  Option,
} from '../../components/common';
import VDAnalyticsScreen from './VDDashboardScreens/VDAnalyticsScreen';
import VDProductsScreen from './VDDashboardScreens/VDProductsScreen';
import VDSettingsScreen from './VDDashboardScreens/VDSettingsScreen';
import VDMessagingScreen from './VDDashboardScreens/VDMessagingScreen';
import VDOrdersScreen from './VDDashboardScreens/VDOrdersScreen';
import { primaryColor, danger } from '../../components/common/variables';

const VDHome = ({ navigation }) => {
  return (
    <>
      <Header
        style={{ elevation: 0 }}
        title="Dashboard"
        headerLeft={
          <Clickable onClick={() => navigation.openDrawer()}>
            <Icon name="ios-menu" color="#fff" />
          </Clickable>
        }
        headerRight={
          <Option
            icon={<Icon name="md-more" color="#fff" />}
            options={[{ label: 'Report a problem', action: () => {} }]}
          />
        }
      />
      <TopTab
        tabBarOptions={{
          showLabel: false,
          showIcon: true,
          activeTintColor: '#fff',
          tabStyle: {
            backgroundColor: primaryColor,
            height: 60,
          },
        }}
        screens={[
          {
            name: 'VDAnalyticsTab',
            component: VDAnalyticsScreen,
            options: {
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  style={{ width: 80 }}
                  name="ios-stats"
                  size={focused ? 30 : size}
                  color={color}
                />
              ),
            },
          },
          {
            name: 'VDProductsTab',
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
            name: 'VDMessagingTab',
            component: VDMessagingScreen,
            options: {
              tabBarIcon: ({ focused, color, size }) => (
                <>
                  <Icon
                    name="ios-chatbubbles"
                    style={{ width: 80 }}
                    size={focused ? 30 : size}
                    color={color}
                  />
                  <Badge color={danger} style={{ elevation: 0, right: -5 }} />
                </>
              ),
            },
          },
          {
            name: 'VDOrdersTab',
            component: VDOrdersScreen,
            options: {
              tabBarIcon: ({ focused, color, size }) => (
                <>
                  <Icon
                    name="md-cart"
                    size={focused ? 30 : size}
                    color={color}
                    style={{ width: 80 }}
                  />
                  <Badge color={danger} style={{ elevation: 0, right: -5 }} />
                </>
              ),
            },
          },
          {
            name: 'VDShopSettingsTab',
            component: VDSettingsScreen,
            options: {
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  name="ios-settings"
                  style={{ width: 80 }}
                  size={focused ? 30 : size}
                  color={color}
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
