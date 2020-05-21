import PropTypes from 'prop-types';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Spacer = ({
  children,
  large,
  size,
  small,
  medium,
  horizontal,
  vertical,
}) => {
  let value = {margin: small ? 5 : medium ? 10 : large ? 20 : size};

  if (horizontal) {
    value = {margin: small ? 5 : medium ? 10 : large ? 20 : size};
  }
  if (vertical) {
    value = {margin: small ? 5 : medium ? 10 : large ? 20 : size};
  }

  return (
    <View
      style={{
        ...value,
        ...styles.container,
      }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

Spacer.propTypes = {
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  size: PropTypes.number,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
};

Spacer.defaultProps = {
  size: 5,
};

export {Spacer};
