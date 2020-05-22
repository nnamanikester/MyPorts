import PropTypes from 'prop-types';
import React from 'react';
import {View, StyleSheet} from 'react-native';

let width = '';

const Column = ({children, size, style}) => {
  switch (size) {
    case '1':
      width = '8.333333333333333%';
      break;
    case '2':
      width = '16.66666666666667%';
      break;
    case '3':
      width = '25%';
      break;
    case '4':
      width = '33.33333333333333%';
      break;
    case '5':
      width = '41.66666666666667%';
      break;
    case '6':
      width = '50%';
      break;
    case '7':
      width = '58.33333333333333%';
      break;
    case '8':
      width = '66.66666666666664%';
      break;
    case '9':
      width = '75%';
      break;
    case '10':
      width = '83.33333333333333%';
      break;
    case '11':
      width = '91.66666666666666%';
      break;
    case '12':
      width = '100%';
      break;
    default:
      width = '100%';
      break;
  }
  return <View style={{width, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({});

Column.propTypes = {
  size: PropTypes.string.isRequired,
};

export {Column};
