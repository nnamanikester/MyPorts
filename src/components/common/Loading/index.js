import React from 'react';
import {StyleSheet, View} from 'react-native';
import Spinner from 'react-native-spinkit';
import PropTypes from 'prop-types';
import {primaryColor} from '../variables';

/**
 * Displays a loading spinner with a white overlay background
 */
const Loading = ({
  show,
  // width,
  // spinner,
  style,
  color,
}) => {
  if (!show) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Spinner
        isVisible={show}
        size={40}
        color={color}
        type="Circle"
        style={{...styles.spinner, ...style}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'absolute',
    width: '100%',
    backgroundColor: '#fffa',
    zIndex: 99999999999,
  },
  spinner: {},
});

Loading.propTypes = {
  /**
   * Given a number, determines the size of the loading.
   */
  // width: PropTypes.number,
  /**
   * If 'true' displays the loading. default is false
   */
  show: PropTypes.bool,
  /**
   * Displays the loading style to use. defaults is 'WanderingCubes'.
   * List of available types:
   * 'CircleFlip'
   * 'Bounce'
   * 'WanderingCubes'
   * 'Pulse'
   * 'ChasingDots'
   * 'ThreeBounce'
   * 'Circle'
   * '9CubeGrid'
   * 'FadingCircle'
   * 'FadingCircleAlt'
   * 'Wave'
   */
  // spinner: PropTypes.string,
  /**
   * Given a color as a string, determines the color of the loader.
   */
  color: PropTypes.string,
  /**
   * Accepts an object with react styleSheet to style the loader
   */
  style: PropTypes.object,
};

Loading.defaultProps = {
  // width: 80,
  color: primaryColor,
  // spinner: 'Circle',
  show: false,
};

export {Loading};
