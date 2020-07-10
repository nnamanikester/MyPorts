import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import {info, grayColor, inactiveColor} from '../variables';

const Icon = ({size, name, color, type, style}) => {
  const IconType = () => {
    switch (type) {
      case 'AntDesign':
        return (
          <AntDesign
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
      case 'Entypo':
        return (
          <Entypo
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
      case 'EvilIcons':
        return (
          <EvilIcons
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
      case 'Feather':
        return (
          <Feather
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
      case 'FontAwesome':
        return (
          <FontAwesome
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
      case 'FontAwesome5':
        return (
          <FontAwesome5
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
      case 'Fontisto':
        return (
          <Fontisto
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
      case 'Foundation':
        return (
          <Foundation
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
      case 'Ionicons':
        return (
          <Ionicons
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
      case 'MaterialIcons':
        return (
          <MaterialIcons
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
      case 'MaterialCommunityIcons':
        return (
          <MaterialCommunityIcons
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
      case 'Octicons':
        return (
          <Octicons
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
      case 'Zocial':
        return (
          <Zocial
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
      case 'SimpleLineIcons':
        return (
          <SimpleLineIcons
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
      default:
        return (
          <Ionicons
            name={name}
            color={color || info}
            size={size}
            style={{...styles.icon, ...style}}
          />
        );
    }
  };
  return <IconType />;
};

const styles = StyleSheet.create({
  icon: {},
});

Icon.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Icon.defaultProps = {
  onClick: () => {},
  size: 28,
  style: {},
};

export {Icon};
