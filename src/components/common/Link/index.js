import PropTypes from 'prop-types';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text';
import {primaryColor} from '../variables';

const Link = ({children, onClick, style, color}) => {
  return (
    <TouchableOpacity style={style} onPress={onClick} activeOpacity={0.7}>
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
};

export {Link};
