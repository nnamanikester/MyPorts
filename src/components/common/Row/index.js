import PropTypes from 'prop-types';
import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

const Row = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

Row.propTypes = {};

export {Row};
