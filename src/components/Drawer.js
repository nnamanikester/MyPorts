import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';

const Drawer = ({state, navigation, progress}) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem label="Home" onClick={() => {}} />
    </DrawerContentScrollView>
  );
};

export default Drawer;
