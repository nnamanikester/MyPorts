import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from '../Text';
import {
  primaryColor,
  inactiveColor,
  dividerColor,
  textColor,
} from '../variables';

let smallStyle = {};
let color = '#fff';
let typeStyle = {};
let disabled = 0.5;

const Button = ({children, onClick, size, type, iconRight, iconLeft}) => {
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
        elevation: 2,
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
        width: 150,
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
      }}
      activeOpacity={disabled}>
      {iconLeft ? <View style={styles.iconLeft}>{iconLeft}</View> : null}
      <Text color={color} style={{...styles.title}}>
        {children}
      </Text>
      {iconRight ? <View style={styles.iconRight}>{iconRight}</View> : null}
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
    elevation: 4,
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
    borderRightColor: dividerColor,
    paddingHorizontal: 15,
  },
  iconRight: {
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: dividerColor,
    paddingHorizontal: 15,
  },
});

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
};

Button.defaultProps = {
  onClick: () => {},
  size: 'large',
  type: '',
};

export {Button};
