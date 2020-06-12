import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Image } from 'react-native';

/**
 * Requiring an src prop accepting an image import, displays an image in form
 * of avatar to the screen.
 */
const Avatar = ({ src, medium, small, large, size, rounded, style }) => {
  let typeStyle = {};

  if (small) {
    typeStyle = {
      width: 35,
      height: 35,
    };
  } else if (medium) {
    typeStyle = {
      width: 50,
      height: 50,
    };
  } else if (large) {
    typeStyle = {
      width: 70,
      height: 70,
    };
  } else if (size) {
    typeStyle = {
      width: size,
      height: size,
    };
  }

  return (
    <Image
      style={{
        ...styles.image,
        ...typeStyle,
        ...style,
        borderRadius: rounded ? 100 : 5,
      }}
      source={src}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});

Avatar.propTypes = {
  /**
   * Accepts an image import from a local part. If the image is from an external
   * link, specify an object with a key `uri` and pass the url of the image as a
   * value
   */
  src: PropTypes.any.isRequired,
  /**
   * Makes the avatar to be circle in shape if true. defaut is false.
   */
  rounded: PropTypes.bool,
  /**
   * Makes the avatar to be small in size if true. default is true.
   */
  small: PropTypes.bool,
  /**
   * Accepts a number, Makes the avatar to take the size specified.
   */
  size: PropTypes.number,
  /**
   * Makes the avatar to be large in size if true. default is false.
   */
  large: PropTypes.bool,
  /**
   * Makes the avatar to be medium in size if true. default is false.
   */
  medium: PropTypes.bool,
};

Avatar.defaultProps = {
  rounded: false,
};

export { Avatar };
