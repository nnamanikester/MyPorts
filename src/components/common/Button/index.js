import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from '../Text';
import {primaryColor, inactiveColor, grayColor, textColor} from '../variables';

let smallStyle = {};
let color = '#fff';
let typeStyle = {};
let disabled = 0.7;

const Button = ({
  children,
  onClick,
  size,
  type,
  iconRight,
  iconLeft,
  showIconDivider,
  style,
}) => {
  switch (type) {
    case 'disabled':
      typeStyle = {
        elevation: 0,
        backgroundColor: inactiveColor,
        borderWidth: 0,
      };
      disabled = 1;
      break;
    case 'outline':
      typeStyle = {
        borderWidth: 1,
        borderColor: primaryColor,
        backgroundColor: '#fff',
      };
      color = textColor;
      break;
    case 'ghost':
      typeStyle = {
        backgroundColor: '#fff',
        elevation: 1,
      };
      color = textColor;
      break;
    default:
      typeStyle = {};
      break;
  }

  switch (size) {
    case 'small':
      smallStyle = {
        width: 140,
      };
      break;
    case 'large':
      smallStyle = {
        width: '100%',
      };
      break;
    default:
      smallStyle = {
        width: '100%',
      };
      break;
  }

  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        ...styles.button,
        ...smallStyle,
        ...typeStyle,
        ...style,
      }}
      activeOpacity={disabled}>
      {iconLeft ? (
        <View
          style={{
            ...styles.iconLeft,
            borderRightWidth: showIconDivider ? 1 : 0,
          }}>
          {iconLeft}
        </View>
      ) : null}
      <Text color={color} style={{...styles.title}}>
        {children}
      </Text>
      {iconRight ? (
        <View
          style={{
            ...styles.iconRight,
            borderLeftWidth: showIconDivider ? 1 : 0,
          }}>
          {iconRight}
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: primaryColor,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 2,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    textTransform: 'uppercase',
    flex: 3,
    textAlign: 'center',
  },
  iconLeft: {
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: grayColor,
    paddingHorizontal: 15,
  },
  iconRight: {
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: grayColor,
    paddingHorizontal: 15,
  },
});

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  showIconDivider: PropTypes.bool,
  style: PropTypes.object,
};

Button.defaultProps = {
  onClick: () => {},
  size: 'large',
  type: '',
  showIconDivider: false,
  style: {},
};

export {Button};
