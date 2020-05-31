import PropTypes from 'prop-types';
import React from 'react';
import {TouchableOpacity, Linking} from 'react-native';
import {Text} from '../Text';
import {primaryColor} from '../variables';

const Link = ({children, to, onClick, style, color}) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={to ? Linking.openURL(to) : onClick}
      activeOpacity={0.7}>
      <Text color={color || primaryColor}>{children}</Text>
    </TouchableOpacity>
  );
};

Link.propTypes = {
  /**
   * a function Called after the link is being clicked.
   */
  onClick: PropTypes.func,
  /**
   * Given an object with react styles, changes the look of the link
   */
  style: PropTypes.object,
  /**
   * Accepts a string. Given a color values, changes the link color to the given value.
   */
  color: PropTypes.string,
  /**
   * Expects a url with the correct protocol; 'http' or 'https'
   */
  to: PropTypes.string,
};

Link.defaultProps = {
  onClick: () => {},
};

export {Link};
