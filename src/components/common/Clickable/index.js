import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

/**
 * A component for createing an area that can be clickable. Can be used to
 * create a button or any other clickable. Accepts all react native TouchableOpacity
 * props except `onPress` and `activeOpacity`. `onPress` is replaced with `onClick`
 */
const Clickable = (props) => {
  return (
    <TouchableOpacity onPress={props.onClick} activeOpacity={0.8} {...props}>
      {props.children}
    </TouchableOpacity>
  );
};

Clickable.propTypes = {
  /**
   * Invoked when a click event is performed.
   */
  onClick: PropTypes.func,
};

Clickable.defaultProps = {
  onClick: () => {},
};

export {Clickable};
