import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../Text';
import PropTypes from 'prop-types';
import {grayColor} from '../variables';

/**
 * A component that shows a dark background with message when for a `timeout(ms)` period of
 * time. The `message` prop is required. For the Toast to work correctly, you have to specify
 * a `onTimeout` prop that will make use of state to display the component. If not the toast
 * will continue to be on the screen.
 */
const Toast = ({style, message, position, timeout, onToast, onTimeout}) => {
  if (onToast) {
    onToast();
  }

  setTimeout(() => {
    if (onTimeout) {
      onTimeout();
    }
  }, timeout || 3000);

  let positionStyle = {};

  switch (position) {
    case 'top':
      positionStyle = {
        top: 10,
      };
      break;
    case 'bottom':
      positionStyle = {
        bottom: 10,
      };
      break;
    case 'center':
      positionStyle = {
        top: '50%',
      };
      break;
    default:
      positionStyle = {
        bottom: 10,
      };
      break;
  }

  return (
    <View style={{...styles.overlay, ...positionStyle}}>
      <View style={{...styles.container, ...style}}>
        <Text style={{lineHeight: 16}} color={grayColor} note>
          {message}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    zIndex: 99999999999,
    elevation: 999999999,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#000a',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    maxWidth: '90%',
    maxHeight: 70,
    minWidth: 70,
    minHeight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Toast.propTypes = {
  /**
   * A react StyleSheet object. It will style the Toast contianer if provided.
   */
  style: PropTypes.object,
  /**
   * Required. A text that will be displayed inside of the Toast.
   */
  message: PropTypes.string.isRequired,
  /**
   * Used to determine the position of the Toast. It can be either `center`, `top` or `bottom`
   * Defaults to 'bottom'.
   */
  position: PropTypes.string,
  /**
   * Sets how long the Toast will last in millisecond.
   */
  timeout: PropTypes.number,
  /**
   * A callback to run when the Toast is first rendered.
   */
  onToast: PropTypes.func,
  /**
   * A callback to run when the `timeout` elapses.
   */
  onTimeout: PropTypes.func,
};

Toast.defaultProps = {
  onTimeout: () => {},
  onToast: () => {},
  timeout: 3000,
  position: 'bottom',
  style: {},
};

export {Toast};
