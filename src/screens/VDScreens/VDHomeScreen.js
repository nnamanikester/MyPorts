import React from 'react';
import Header from '../../components/Header';
import * as UI from '../../components/common';
import VDAnalyticsScreen from './VDDashboardScreens/VDAnalyticsScreen';
import VDProductsScreen from './VDDashboardScreens/VDProductsScreen';
import VDSettingsScreen from './VDDashboardScreens/VDSettingsScreen';
import VDMessagingScreen from './VDDashboardScreens/VDMessagingScreen';
import VDOrdersScreen from './VDDashboardScreens/VDOrdersScreen';
import {primaryColor, danger} from '../../components/common/variables';
import {connect} from 'react-redux';
import {View} from 'react-native';

const VDHome = ({navigation, orders}) => {
  const [hasNewOrders, setHasNewOrders] = React.useState(false);

  React.useMemo(() => {
    let count = 0;
    orders &&
      orders.forEach((o) => {
        if (o.status === 1) {
          count++;
        }
      });
    if (count > 0) {
      setHasNewOrders(true);
    } else {
      setHasNewOrders(false);
    }
  }, [orders]);

  return (
    <>
      <Header
        style={{elevation: 0}}
        title="Dashboard"
        headerLeft={
          <UI.Clickable onClick={() => navigation.openDrawer()}>
            <UI.Icon name="ios-menu" color="#fff" />
          </UI.Clickable>
        }
        headerRight={
          <View style={{flexDirection: 'row'}}>
            <UI.Option
              icon={
                <View style={{flexDirection: 'row'}}>
                  <UI.Spacer medium />
                  <UI.Icon name="md-more" color="#fff" />
                </View>
              }
              options={[
                {
                  label: 'Report a problem',
                  action: () => navigation.navigate('ContactSupport'),
                },
              ]}
            />
          </View>
        }
      />
      <UI.TopTab
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
              tabBarIcon: ({focused, color, size}) => (
                <UI.Icon
                  style={{width: 80}}
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
              tabBarIcon: ({focused, color, size}) => (
                <UI.Icon
                  style={{width: 80}}
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
              tabBarIcon: ({focused, color, size}) => (
                <>
                  <UI.Icon
                    name="ios-chatbubbles"
                    style={{width: 80}}
                    size={focused ? 30 : size}
                    color={color}
                  />
                </>
              ),
            },
          },
          {
            name: 'VDOrdersTab',
            component: VDOrdersScreen,
            options: {
              tabBarIcon: ({focused, color, size}) => (
                <>
                  <UI.Icon
                    name="md-cart"
                    size={focused ? 30 : size}
                    color={color}
                    style={{width: 80}}
                  />
                  {hasNewOrders && (
                    <UI.Badge
                      color={danger}
                      style={{elevation: 0, right: -5}}
                    />
                  )}
                </>
              ),
            },
          },
          {
            name: 'VDShopSettingsTab',
            component: VDSettingsScreen,
            options: {
              tabBarIcon: ({focused, color, size}) => (
                <UI.Icon
                  name="ios-settings"
                  style={{width: 80}}
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

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
    orders: state.orders.vendorOrders,
  };
};

export default connect(mapStateToProps)(VDHome);
