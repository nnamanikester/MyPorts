import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from '../Text';
import {Button} from '../Button';
import {Spacer} from '../Spacer';
import PropTypes from 'prop-types';
import {
  check,
  successBg,
  error as errorCheck,
  errorBg,
} from '../../../assets/icons';

/**
 * A react component that return a success message or error message.
 */
const Alert = ({
  show,
  style,
  error,
  showBg,
  success,
  message,
  header,
  buttonText,
  onButtonClick,
}) => {
  if (!show) {
    return null;
  }

  let bgImage = successBg;
  let icon = errorCheck;

  if (success) {
    bgImage = successBg;
    icon = check;
  }

  if (error) {
    bgImage = errorBg;
    icon = errorCheck;
  }

  return (
    <View style={{...styles.container, ...style}}>
      <View style={styles.iconContainer}>
        <Image source={icon} />
      </View>
      {header && (
        <View style={styles.headerContanier}>
          <Text h1>{header}</Text>
        </View>
      )}
      <Spacer />
      {message && (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{message}</Text>
        </View>
      )}
      {buttonText && (
        <View style={styles.buttonContainer}>
          <Button onClick={onButtonClick}>
            <Text color="#fff">{buttonText}</Text>
          </Button>
        </View>
      )}
      {showBg && (
        <View style={styles.backgroundContainer}>
          <Image style={styles.background} source={bgImage} />
        </View>
      )}
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
    backgroundColor: '#fff',
    zIndex: 99999999999,
    elevation: 155,
  },
  messageContainer: {
    paddingHorizontal: 30,
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
  },
  backgroundContainer: {
    width: '100%',
    position: 'absolute',
    bottom: -10,
  },
  background: {
    width: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 50,
    bottom: 50,
    elevation: 9,
    zIndex: 999999,
  },
});

Alert.propTypes = {
  /**
   * If 'true' displays the Alert. default is 'false'
   */
  show: PropTypes.bool,
  /**
   * Accepts an object with react styleSheet to style the loader
   */
  style: PropTypes.object,
  /**
   * Accepts a function. Called when the button is clicked.
   */
  onButtonClick: PropTypes.func,
  /**
   * If 'true', shows error icon and error background. Default is 'false'.
   */
  error: PropTypes.bool,
  /**
   * If 'true', shows the success Icon and success background. Default is 'true'.
   */
  success: PropTypes.bool,
  /**
   * if 'true', shows the background image. 'success' or 'error' determines the background
   * color. Default is 'false'.
   */
  showBg: PropTypes.bool,
  /**
   * This takes a string of message to be displayed under the header text, giving more detail
   * about the alert.
   */
  message: PropTypes.string,
  /**
   * The Header text to be displayed explaining the type of alert.
   */
  header: PropTypes.string,
  /**
   * This is the text shown on the button undert he alert container. if not provided, the button
   * will be hidden.
   */
  buttonText: PropTypes.string,
};

Alert.defaultProps = {
  show: false,
  style: {},
  error: false,
  showBg: false,
  success: false,
  onButtonClick: () => {},
};

export {Alert};
