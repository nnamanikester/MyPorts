import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {connect} from 'react-redux';
import {View, Image, StyleSheet} from 'react-native';
import {Text, Icon, ListItem, Link, Badge, Divider, Spacer} from './common';
import {profilePhoto} from '../assets/images';
import {info} from './common/variables';
import {logUserOut} from '../redux/actions/AuthActions';
import {clearAddress} from '../redux/actions/AddressActions';
import {clearCustomerProfile} from '../redux/actions/CustomerActions';
import {clearCart} from '../redux/actions/CartActions';
import {clearNotificationsStorage} from '../redux/actions/NotificationsAction';
import {clearWallet} from '../redux/actions/WalletActions';
import {danger} from './common/variables';
import Permissions from './Permissions';

const Drawer = ({
  navigation,
  user,
  customer,
  vendorProfile,
  logUserOut,
  cart,
  clearAddress,
  clearWallet,
  clearNotificationsStorage,
  clearCart,
  clearCustomerProfile,
  notifications,
}) => {
  const [hasNotification, setHasNotification] = React.useState(false);

  React.useMemo(() => {
    let counter = 0;
    notifications &&
      notifications.length > 0 &&
      notifications.forEach((n) => {
        if (n.status === 1) {
          counter++;
        }
      });
    if (counter > 0) {
      setHasNotification(true);
    } else {
      setHasNotification(false);
    }
  }, [notifications]);

  return (
    <DrawerContentScrollView style={styles.drawer}>
      {/* Drawer Header */}
      <Permissions.Customer>
        <View style={styles.header}>
          <ListItem
            onClick={() => navigation.navigate('Profile')}
            left={
              <View style={styles.headerAlignment}>
                <Image
                  style={styles.profileImage}
                  source={customer.photo ? {uri: customer.photo} : profilePhoto}
                />
              </View>
            }
            body={
              <View style={styles.headerAlignment}>
                <Text size={18}>
                  {customer ? customer.firstName : null}{' '}
                  {customer ? customer.lastName : null}
                </Text>
                <Link to={`mailto:${user.email}`}>{user.email}</Link>
              </View>
            }
            right={
              <View style={styles.headerAlignment}>
                <Icon color={info} name="ios-arrow-forward" />
              </View>
            }
          />
        </View>
      </Permissions.Customer>
      <Permissions.Vendor>
        <View style={styles.header}>
          <ListItem
            onClick={() => navigation.navigate('ShopSettings')}
            left={
              <View style={styles.headerAlignment}>
                <Image
                  style={styles.profileImage}
                  source={
                    vendorProfile.logo
                      ? {uri: vendorProfile.logo}
                      : profilePhoto
                  }
                />
              </View>
            }
            body={
              <View style={styles.headerAlignment}>
                <Text size={18}>
                  {vendorProfile ? vendorProfile.name : null}
                </Text>
                <Link to={`mailto:${user.email}`}>{user.email}</Link>
              </View>
            }
            right={
              <View style={styles.headerAlignment}>
                <Icon color={info} name="ios-arrow-forward" />
              </View>
            }
          />
        </View>
      </Permissions.Vendor>

      {/* Drawer Body */}
      <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} style={{color}} name="ios-home" />
        )}
        label={({color, focused}) => <Text color={color}>Home</Text>}
        onPress={() => navigation.navigate('Vendors')}
      />

      <Permissions.CustomerAndGuest>
        <DrawerItem
          icon={({size, color}) => (
            <>
              <Icon size={size} color={color} name="md-cart" />
              {cart && cart.items && cart.items.length > 0 && (
                <Badge style={{elevation: 1}} color={danger} />
              )}
            </>
          )}
          label={({color, focused}) => <Text color={color}>Shopping Cart</Text>}
          onPress={() => navigation.navigate('Cart')}
        />
      </Permissions.CustomerAndGuest>

      <Permissions.CustomerAndGuest>
        <DrawerItem
          icon={({size, color}) => (
            <Icon size={size} style={{color}} name="ios-bookmark" />
          )}
          label={({color, focused}) => <Text color={color}>Saved Items</Text>}
          onPress={() => navigation.navigate('SavedItems')}
        />
      </Permissions.CustomerAndGuest>

      <Permissions.CustomerAndGuest>
        <DrawerItem
          icon={({size, color}) => (
            <Icon size={size} color={color} name="md-time" />
          )}
          label={({color, focused}) => <Text color={color}>Order History</Text>}
          onPress={() => navigation.navigate('Orders')}
        />
      </Permissions.CustomerAndGuest>

      <Permissions.Vendor>
        <DrawerItem
          icon={({size, color}) => (
            <>
              <Icon size={size} color={color} name="ios-notifications" />
              {hasNotification && (
                <Badge style={{elevation: 1}} color={danger} />
              )}
            </>
          )}
          label={({color, focused}) => <Text color={color}>Notifications</Text>}
          onPress={() => navigation.navigate('VDNotifications')}
        />
      </Permissions.Vendor>

      {/* <Permissions.Vendor>
        <DrawerItem
          icon={({size, color}) => (
            <Icon size={size} color={color} name="ios-megaphone" />
          )}
          label={({color, focused}) => <Text color={color}>Boost Product</Text>}
          onPress={() => navigation.navigate('VDNotifications')}
        />
      </Permissions.Vendor> */}

      <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} color={color} name="ios-card" />
        )}
        label={({color, focused}) => <Text color={color}>Wallet</Text>}
        onPress={() => navigation.navigate('ManageWallets')}
      />

      {/* <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} color={color} name="ios-gift" />
        )}
        label={({color, focused}) => <Text color={color}>Refer and Earn</Text>}
        onPress={() => navigation.navigate('ReferAndEarn')}
      /> */}

      {/* <Permissions.CustomerAndGuest>
        <DrawerItem
          icon={({size, color}) => (
            <>
              <Icon size={size} color={color} name="ios-megaphone" />
              <Badge style={{elevation: 1}} color={danger} />
            </>
          )}
          label={({color, focused}) => (
            <Text color={color}>Available Coupons</Text>
          )}
          onPress={() => navigation.navigate('Coupons')}
        />
      </Permissions.CustomerAndGuest> */}

      <Divider />

      <DrawerItem
        icon={({size, color}) => (
          <Icon
            size={size}
            color={color}
            name="ios-information-circle-outline"
          />
        )}
        label={({color, focused}) => <Text color={color}>About</Text>}
        onPress={() => navigation.navigate('About')}
      />

      <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} color={color} name="ios-call" />
        )}
        label={({color, focused}) => <Text color={color}>Contact Support</Text>}
        onPress={() => navigation.navigate('ContactSupport')}
      />

      <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} color={color} name="ios-help-circle-outline" />
        )}
        label={({color, focused}) => (
          <Text color={color}>Fequently Asked Questions</Text>
        )}
        onPress={() => navigation.navigate('FAQ')}
      />

      <Permissions.Customer>
        <DrawerItem
          icon={({size, color}) => (
            <Icon size={size} color={color} name="ios-settings" />
          )}
          label={({color, focused}) => <Text color={color}>Settings</Text>}
          onPress={() => navigation.navigate('Settings')}
        />
      </Permissions.Customer>

      <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} color={color} name="ios-log-out" />
        )}
        label={({color, focused}) => <Text color={color}>Log Out</Text>}
        onPress={() => {
          clearAddress();
          clearWallet();
          clearNotificationsStorage();
          clearCart();
          clearCustomerProfile();
          logUserOut();
        }}
      />
      <Spacer large />
      <Spacer large />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    padding: 10,
  },
  header: {
    width: '100%',
    height: 120,
    paddingVertical: 10,
  },
  headerAlignment: {
    flex: 1,
    justifyContent: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    customer: state.customer.profile,
    vendorProfile: state.vendor.profile,
    cart: state.cart,
    notifications: state.notifications,
  };
};

export default connect(mapStateToProps, {
  logUserOut,
  clearAddress,
  clearWallet,
  clearNotificationsStorage,
  clearCart,
  clearCustomerProfile,
})(Drawer);
