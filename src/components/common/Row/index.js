import PropTypes from 'prop-types';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Row = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

Row.propTypes = {};

export {Row};
