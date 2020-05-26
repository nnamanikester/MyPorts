import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '../Text';
import PropTypes from 'prop-types';
import {primaryColor, grayColor} from '../variables';

const ProgressBar = ({color, percent}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.progress,
          backgroundColor: color,
          width: `${percent}%`,
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: '100%',
    backgroundColor: grayColor,
  },
  progress: {
    height: '100%',
  },
});

ProgressBar.propTypes = {
  color: PropTypes.string,
  percent: PropTypes.string,
};

ProgressBar.defaultProps = {
  color: primaryColor,
  percent: '100%',
};

export {ProgressBar};
