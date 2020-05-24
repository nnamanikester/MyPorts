import PropTypes from 'prop-types';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Row = ({children, style}) => {
  return <View style={{...styles.container, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

Row.propTypes = {};

export {Row};
