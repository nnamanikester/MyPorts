import PropTypes from 'prop-types';
import React from 'react';
import {Linking} from 'react-native';
import {Text} from '../Text';
import {primaryColor} from '../variables';
import {Clickable} from '../Clickable';

const Link = ({children, to, textStyle, onClick, style, color}) => {
  return (
    <Clickable style={style} onClick={to ? () => Linking.openURL(to) : onClick}>
      <Text style={textStyle} color={color || primaryColor}>
        {children}
      </Text>
    </Clickable>
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
   * Expects a url with the correct protocol; `http` or `https`
   */
  to: PropTypes.string,
  /**
   * A react StyleSheet Object that is applied to the link's text.
   */
  textStyle: PropTypes.object,
};

Link.defaultProps = {
  onClick: () => {},
};

export {Link};
