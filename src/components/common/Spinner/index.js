import React from 'react';
import {StyleSheet, View} from 'react-native';
import Spin from 'react-native-spinkit';
import PropTypes from 'prop-types';
import {primaryColor} from '../variables';

/**
 * Displays a loading spinner with a white overlay background
 */
const Spinner = ({show, area, style, tint}) => {
  if (!show) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Spin
        isVisible={show}
        size={area}
        color={tint}
        type="Circle"
        style={{...styles.spinner, ...style}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    position: 'relative',
  },
});

Spinner.propTypes = {
  /**
   * Given a number, determines the size of the loading.
   */
  area: PropTypes.number,
  /**
   * Given a tint as a string, determines the color of the loader.
   */
  color: PropTypes.string,
  /**
   * Accepts an object with react styleSheet to style the loader
   */
  style: PropTypes.object,
};

Spinner.defaultProps = {
  area: 20,
  tint: primaryColor,
  show: false,
};

export {Spinner};
