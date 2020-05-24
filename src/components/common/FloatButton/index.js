import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {primaryColor, inactiveColor, textColor} from '../variables';
import {Text} from '../Text';

const FloatButton = ({onClick, children, size, shape, type, style}) => {
  let smallStyle = {};
  let color = '#fff';
  let typeStyle = {};
  let shapeStyle = {};
  let disabled = 0.7;

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
        width: 40,
        height: 40,
      };
      break;
    case 'medium':
      smallStyle = {
        width: 55,
        height: 55,
      };
      break;
    case 'large':
      smallStyle = {
        width: 70,
        height: 70,
      };
      break;
    default:
      smallStyle = {
        width: 40,
        height: 40,
      };
      break;
  }

  switch (shape) {
    case 'rounded':
      shapeStyle = {
        borderRadius: 10,
      };
      break;
    case 'circle':
      shapeStyle = {
        borderRadius: 50,
      };
      break;
    case 'normal':
      shapeStyle = {
        borderRadius: 5,
      };
      break;
    default:
      shapeStyle = {
        borderRadius: 50,
      };
      break;
  }

  return (
    <TouchableOpacity
      activeOpacity={disabled}
      style={{
        ...styles.button,
        ...typeStyle,
        ...smallStyle,
        ...shapeStyle,
        ...style,
      }}
      onPress={onClick}>
      <Text color={color}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

FloatButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  shape: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
};

FloatButton.defaultProps = {
  onClick: () => {},
  size: 'small',
  shape: 'circle',
  style: {},
};

export {FloatButton};
