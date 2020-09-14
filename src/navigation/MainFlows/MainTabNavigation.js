import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../../screens/CategoriesScreen';
import VendorsListScreen from '../../screens/vendorScreens/VendorsListScreen';
import ProductsScreen from '../../screens/ProductsScreens/ProductsScreen';
import NotificationsScreen from '../../screens/NotificationsScreen';
import SettingsScreen from '../../screens/SettingsScreens/SettingsScreen';
import {Icon, Text, Badge} from '../../components/common';
import {danger} from '../../components/common/variables';
import {connect} from 'react-redux';

const Tab = createBottomTabNavigator();

const TabNavigation = ({notifications}) => {
  const [hasUnreadNotification, setHasUnreadNotification] = React.useState(
    false,
  );

  React.useMemo(() => {
    let counter = 0;
    if (notifications && notifications.length > 0) {
      notifications.forEach((n) => {
        if (n.status === 1) {
          counter++;
        }
      });
    }
    if (counter > 0) {
      setHasUnreadNotification(true);
    } else {
      setHasUnreadNotification(false);
    }
  }, [notifications]);

  return (
    <Tab.Navigator initialRouteName="Vendors">
      <Tab.Screen
        name="Vendors"
        component={VendorsListScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="ios-business" color={color} size={focused ? 30 : 24} />
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
            <Icon name="ios-list" color={color} size={focused ? 30 : 24} />
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
              size={focused ? 28 : 22}
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
            <>
              <Icon
                name={
                  focused ? 'ios-notifications' : 'ios-notifications-outline'
                }
                color={color}
                size={focused ? 30 : 24}
              />
              {hasUnreadNotification && (
                <Badge
                  style={{
                    right: 30,
                    top: 3,
                    elevation: 0,
                  }}
                  color={danger}
                />
              )}
            </>
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
            <Icon name="ios-settings" color={color} size={focused ? 30 : 24} />
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

const mapStateToProps = (state, ownProps) => {
  return {
    notifications: state.notifications,
  };
};

export default connect(mapStateToProps)(TabNavigation);
