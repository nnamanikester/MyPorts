import PropTypes from 'prop-types';
import React from 'react';
import {View, StyleSheet} from 'react-native';

let width = '';

const Column = ({children, size}) => {
  switch (size) {
    case '1':
      width = '10%';
      break;
    case '2':
      width = '20%';
      break;
    case '3':
      width = '30%';
      break;
    case '4':
      width = '40%';
      break;
    case '5':
      width = '50%';
      break;
    case '6':
      width = '60%';
      break;
    case '7':
      width = '70%';
      break;
    case '8':
      width = '80%';
      break;
    case '9':
      width = '90%';
      break;
    case '10':
      width = '100%';
      break;
    default:
      width = '';
      break;
  }
  return <View style={{...styles.container, width}}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'red',
  },
});

Column.propTypes = {
  size: PropTypes.string.isRequired,
};

export {Column};
