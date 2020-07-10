import React from 'react';
import {Switch as SW} from 'react-native';
import PropTypes from 'prop-types';
import {primaryColor, grayColor} from '../variables';

/**
 * Renders a boolean Input (switch button)
 *
 * This is a component that requires a `onChange`  callback prop to update the `value`
 * prop in order for the component to reflect user actions.If the `value` prop is not
 * updated, the component will continue to render the the supplied `value` prop instead
 * of the expected result of any user actions.
 */
const Switch = ({onChange, value, style}) => {
  return (
    <SW
      trackColor={{true: primaryColor, false: grayColor}}
      thumbColor={primaryColor}
      onValueChange={onChange}
      value={value}
      style={{...style}}
    />
  );
};

Switch.propTypes = {
  /**
   * invoked when the value of the switch is changed. And it is invoked with the new value
   */
  onChange: PropTypes.func,
  /**
   * The value of the switch. If true will be turned on. The default is false
   */
  value: PropTypes.bool,
  /**
   * The style for the switch container. Accepts all ReactNative View Props
   */
  style: PropTypes.object,
};

Switch.defaultProps = {};

export {Switch};
