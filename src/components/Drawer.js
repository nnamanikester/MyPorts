import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Icon, ListItem, Link, Badge, Divider, Spacer } from './common';
import { female4 } from '../assets/images';
import { info } from './common/variables';
import { logUserOut } from '../redux/actions/AuthActions';
import { danger } from './common/variables';
import Permissions from './Permissions';

const Drawer = ({ navigation, logUserOut }) => {
  return (
    <DrawerContentScrollView style={styles.drawer}>
      {/* Drawer Header */}
      <Permissions.CustomerAndVendor>
        <View style={styles.header}>
          <ListItem
            onClick={() => navigation.navigate('Profile')}
            left={
              <View style={styles.headerAlignment}>
                <Image style={styles.profileImage} source={female4} />
              </View>
            }
            body={
              <View style={styles.headerAlignment}>
                <Text size={20}>Tiana Rosser</Text>
                <Link>Tianaroser@gmail.com</Link>
              </View>
            }
            right={
              <View style={styles.headerAlignment}>
                <Icon color={info} name="ios-arrow-forward" />
              </View>
            }
          />
        </View>
      </Permissions.CustomerAndVendor>

      {/* Drawer Body */}
      <DrawerItem
        icon={({ size, color }) => (
          <Icon size={size} style={{ color }} name="ios-home" />
        )}
        label={({ color, focused }) => <Text color={color}>Home</Text>}
        onPress={() => navigation.navigate('Vendors')}
      />

      <Permissions.CustomerAndGuest>
        <DrawerItem
          icon={({ size, color }) => (
            <>
              <Icon size={size} color={color} name="md-cart" />
              <Badge style={{ elevation: 1 }} color={danger} />
            </>
          )}
          label={({ color, focused }) => (
            <Text color={color}>Shopping Cart</Text>
          )}
          onPress={() => navigation.navigate('Cart')}
        />
      </Permissions.CustomerAndGuest>

      <Permissions.CustomerAndGuest>
        <DrawerItem
          icon={({ size, color }) => (
            <>
              <Icon size={size} style={{ color }} name="ios-bookmark" />
              <Badge style={{ elevation: 1 }} color={danger} />
            </>
          )}
          label={({ color, focused }) => <Text color={color}>Saved Items</Text>}
          onPress={() => navigation.navigate('SavedItems')}
        />
      </Permissions.CustomerAndGuest>

      <Permissions.CustomerAndGuest>
        <DrawerItem
          icon={({ size, color }) => (
            <Icon size={size} color={color} name="md-time" />
          )}
          label={({ color, focused }) => (
            <Text color={color}>Order History</Text>
          )}
          onPress={() => navigation.navigate('Orders')}
        />
      </Permissions.CustomerAndGuest>

      <DrawerItem
        icon={({ size, color }) => (
          <Icon size={size} color={color} name="ios-gift" />
        )}
        label={({ color, focused }) => (
          <Text color={color}>Refer and Earn</Text>
        )}
        onPress={() => navigation.navigate('ReferAndEarn')}
      />

      <Permissions.CustomerAndGuest>
        <DrawerItem
          icon={({ size, color }) => (
            <>
              <Icon size={size} color={color} name="ios-megaphone" />
              <Badge style={{ elevation: 1 }} color={danger} />
            </>
          )}
          label={({ color, focused }) => (
            <Text color={color}>Available Coupons</Text>
          )}
          onPress={() => navigation.navigate('Coupons')}
        />
      </Permissions.CustomerAndGuest>

      <Divider />

      <DrawerItem
        icon={({ size, color }) => (
          <Icon
            size={size}
            color={color}
            name="ios-information-circle-outline"
          />
        )}
        label={({ color, focused }) => <Text color={color}>About</Text>}
        onPress={() => navigation.navigate('About')}
      />

      <DrawerItem
        icon={({ size, color }) => (
          <Icon size={size} color={color} name="ios-call" />
        )}
        label={({ color, focused }) => (
          <Text color={color}>Contact Support</Text>
        )}
        onPress={() => navigation.navigate('ContactSupport')}
      />

      <DrawerItem
        icon={({ size, color }) => (
          <Icon size={size} color={color} name="ios-help-circle-outline" />
        )}
        label={({ color, focused }) => (
          <Text color={color}>Fequently Asked Questions</Text>
        )}
        onPress={() => navigation.navigate('FAQ')}
      />

      <DrawerItem
        icon={({ size, color }) => (
          <Icon size={size} color={color} name="ios-settings" />
        )}
        label={({ color, focused }) => <Text color={color}>Settings</Text>}
        onPress={() => navigation.navigate('Settings')}
      />

      <DrawerItem
        icon={({ size, color }) => (
          <Icon size={size} color={color} name="ios-log-out" />
        )}
        label={({ color, focused }) => <Text>Log Out</Text>}
        onPress={() => logUserOut()}
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

export default connect(null, { logUserOut })(Drawer);
