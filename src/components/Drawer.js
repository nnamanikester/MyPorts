import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Text, Icon, ListItem, Link} from './common';
import {female4} from '../assets/images';
import {primaryColor, info} from './common/variables';

const Drawer = ({navigation, state, descriptor, progress}) => {
  return (
    <DrawerContentScrollView
      style={styles.drawer}
      {...{navigation, state, descriptor, progress}}>
      <View>
        {/* <View style={styles.closeButton}>
          <TouchableOpacity
            onPress={() => navigation.closeDrawer()}
            activeOpacity={0.7}>
            <Icon size={40} name="ios-close" />
          </TouchableOpacity>
        </View> */}
        <View style={styles.header}>
          <ListItem
            onClick={() => navigation.navigate('Home')}
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
        <DrawerItem
          icon={({size, color}) => (
            <Icon size={size} color={color} name="ios-home" />
          )}
          label={({color, focused}) => <Text>Home</Text>}
          onPress={() => navigation.navigate('Categories')}
        />
      </View>
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
  closeButton: {
    alignItems: 'flex-end',
    paddingTop: 10,
    paddingRight: 20,
  },
});

export default Drawer;
