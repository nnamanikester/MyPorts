import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '../Text';
import PropTypes from 'prop-types';
import {primaryColor, grayColor, inactiveColor} from '../variables';
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
    borderRadius: 10,
    backgroundColor: primaryColor,
  },
  progressBar: {
    height: 12,
    width: '100%',
    backgroundColor: inactiveColor,
    borderRadius: 10,
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
