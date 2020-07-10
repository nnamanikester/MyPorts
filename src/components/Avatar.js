import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Avatar = ({src, medium, small, large, size, rounded, style}) => {
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
  src: PropTypes.any.isRequired,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  size: PropTypes.number,
  large: PropTypes.bool,
  medium: PropTypes.bool,
};

Avatar.defaultProps = {
  rounded: false,
};

export default Avatar;
