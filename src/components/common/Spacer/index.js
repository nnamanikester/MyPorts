import PropTypes from 'prop-types';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Spacer = ({children, large, small, medium, horizontal, vertical}) => {
  let value = {margin: small ? 5 : medium ? 10 : large ? 20 : 5};

  if (horizontal) {
    value = {marginHorizontal: small ? 5 : medium ? 10 : large ? 20 : 5};
  }
  if (vertical) {
    value = {marginVertical: small ? 5 : medium ? 10 : large ? 20 : 5};
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
  container: {
    borderWidth: 1,
  },
});

Spacer.propTypes = {
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  horizontal: PropTypes.bool,
};

export {Spacer};
