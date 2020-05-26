import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {success} from '../variables';

const Badge = ({children, style, medium, large, small, color}) => {
  let size = {width: 10, height: 10};

  if (small) {
    size = {width: 10, height: 10};
  }

  if (medium) {
    size = {width: 15, height: 15};
  }

  if (large) {
    size = {width: 20, height: 20};
  }

  return (
    <View
      style={{
        ...styles.container,
        ...style,
        ...size,
        backgroundColor: color,
      }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    backgroundColor: success,
    position: 'absolute',
    right: 7,
    elevation: 5,
  },
});

Badge.propTypes = {};

Badge.defaultProps = {};

export {Badge};
