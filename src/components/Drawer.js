import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {connect} from 'react-redux';
import {View, Image, StyleSheet} from 'react-native';
import {Text, Icon, ListItem, Link, Badge, Divider} from './common';
import {female4} from '../assets/images';
import {info} from './common/variables';
import {useRoute} from '@react-navigation/native';
import {logUserOut} from '../redux/actions/AuthActions';

const Drawer = ({navigation, logUserOut}) => {
  const route = useRoute();

  return (
    <DrawerContentScrollView style={styles.drawer}>
      {/* Drawer Header */}
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

      {/* Drawer Body */}
      <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} style={{color}} name="ios-home" />
        )}
        // focused={route.name == 'Home' ? true : false}
        label={({color, focused}) => <Text color={color}>Home</Text>}
        onPress={() => navigation.navigate('Vendors')}
      />

      <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} color={color} name="ios-time" />
        )}
        // focused={route.name == 'OrderHistory' ? true : false}
        label={({color, focused}) => <Text color={color}>Order History</Text>}
        onPress={() => navigation.navigate('Orders')}
      />

      <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} color={color} name="ios-home" />
        )}
        // focused={route.name == 'ReferAndEarn' ? true : false}
        label={({color, focused}) => <Text color={color}>Refer and Earn</Text>}
        onPress={() => navigation.navigate('Home')}
      />

      <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} color={color} name="ios-home" />
        )}
        // focused={route.name == 'Coupons' ? true : false}
        label={({color, focused}) => (
          <Text color={color}>Available Coupons</Text>
        )}
        onPress={() => navigation.navigate('Home')}
      />

      <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} color={color} name="ios-gift" />
        )}
        // focused={route.name == 'Gifts' ? true : false}
        label={({color, focused}) => <Text color={color}>Gifts</Text>}
        onPress={() => navigation.navigate('Home')}
      />

      <Divider />

      <DrawerItem
        icon={({size, color}) => (
          <Icon
            size={size}
            color={color}
            name="ios-information-circle-outline"
          />
        )}
        // focused={route.name == 'About' ? true : false}
        label={({color, focused}) => <Text color={color}>About</Text>}
        onPress={() => navigation.navigate('About')}
      />

      <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} color={color} name="ios-call" />
        )}
        // focused={route.name == 'Support' ? true : false}
        label={({color, focused}) => <Text color={color}>Contact Support</Text>}
        onPress={() => navigation.navigate('Home')}
      />

      <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} color={color} name="ios-help-circle-outline" />
        )}
        // focused={route.name == 'FAQ' ? true : false}
        label={({color, focused}) => (
          <Text color={color}>Fequently Asked Questions</Text>
        )}
        onPress={() => navigation.navigate('FAQ')}
      />

      <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} color={color} name="ios-settings" />
        )}
        // focused={route.name == 'Settings' ? true : false}
        label={({color, focused}) => <Text color={color}>Settings</Text>}
        onPress={() => navigation.navigate('Settings')}
      />

      <DrawerItem
        icon={({size, color}) => (
          <Icon size={size} color={color} name="ios-log-out" />
        )}
        label={({color, focused}) => <Text>Log Out</Text>}
        onPress={() => logUserOut()}
      />
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

export default connect(null, {logUserOut})(Drawer);
