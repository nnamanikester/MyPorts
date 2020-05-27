import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '../Text';
import PropTypes from 'prop-types';
import {primaryColor, grayColor} from '../variables';
import {Spacer} from '../Spacer';

const ProgressBar = ({color, percent, label}) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Spacer size={3} />
      <View style={styles.progressBar}>
        <View
          style={{
            ...styles.progress,
            backgroundColor: color,
            width: `${percent}%`,
          }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    height: '100%',
  },
  progressBar: {
    height: 20,
    width: '100%',
    // backgroundColor: grayColor,
  },
});

ProgressBar.propTypes = {
  color: PropTypes.string,
  percent: PropTypes.number,
};

ProgressBar.defaultProps = {
  color: primaryColor,
  percent: '100%',
};

export {ProgressBar};
