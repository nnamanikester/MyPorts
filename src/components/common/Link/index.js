import PropTypes from 'prop-types';
import React from 'react';
import {View, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import {Text} from '../Text';
import {primaryColor} from '../variables';

const Link = ({children, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick} activeOpacity={0.7}>
      <Text color={primaryColor}>{children}</Text>
    </TouchableOpacity>
  );
};

Link.propTypes = {
  onClick: PropTypes.func,
};

export {Link};
