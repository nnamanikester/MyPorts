import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {primaryColor, inactiveColor, textColor} from '../variables';
import {Text} from '../Text';

/**
 * A Floating action bar button that floats at thte bottom right of
 * the screen.
 */
const FAB = ({onClick, children, size, shape, type, style}) => {
  let sizeStyle = {
    width: size || 40,
    height: size || 40,
  };
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

  switch (shape) {
    case 'rounded':
      shapeStyle = {
        borderRadius: 50,
      };
      break;
    case 'squared':
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
        ...sizeStyle,
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
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});

FAB.propTypes = {
  /**
   * Called when the FAB is being clicked on.
   */
  onClick: PropTypes.func,
  /**
   * Determines the width and height of the FAB.
   */
  size: PropTypes.number,
  /**
   * Changes the shape of the FAB. Available optios are `squared` and `rounded`.
   * Default is `rounded`.
   */
  shape: PropTypes.string,
  /**
   * Used to change the type of FAB. Available options are `ghost`, `outline`,
   * and `disabled`. Default has a bakground of `primaryColor`. If `disabled`,
   * the FAB can no longer be clickable.
   */
  type: PropTypes.string,
  /**
   * A react StyleSheet object that will be applied on the button.
   */
  style: PropTypes.object,
};

FAB.defaultProps = {
  onClick: () => {},
  size: 40,
  shape: 'rounded',
  style: {},
};

export {FAB};