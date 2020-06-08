import React from 'react';
import { StyleSheet, View } from 'react-native';
import Spin from 'react-native-spinkit';
import PropTypes from 'prop-types';
import { primaryColor } from '../variables';

/**
 * Displays a loading spinner with a white overlay background
 */
const Spinner = ({ show, size, style, color }) => {
  if (!show) {
    return null;
  }
  return (
    <Spin
      isVisible={show}
      size={size || 20}
      color={color}
      type="Circle"
      style={{ ...styles.spinner, ...style }}
    />
  );
};

const styles = StyleSheet.create({});

Spinner.propTypes = {
  /**
   * Given a number, determines the size of the loading.
   */
  size: PropTypes.number,
  /**
   * Given a color as a string, determines the color of the loader.
   */
  color: PropTypes.string,
  /**
   * Accepts an object with react styleSheet to style the loader
   */
  style: PropTypes.object,
};

Spinner.defaultProps = {
  size: 20,
  color: primaryColor,
  // spinner: 'Circle',
  show: false,
};

export { Spinner };
