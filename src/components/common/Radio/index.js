import React from 'react';
import {View, StyleSheet} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import {Icon} from '../Icon';
import {primaryColor} from '../variables';
import PropTypes from 'prop-types';

/**
 * A component that accepts required `data` prop of array of objects of `label`
 * and renders a radio component with the provided `label` as the radio's label.
 * Aside label, other keys can also be provided.
 */
const Radio = ({data, onSelect, selected}) => {
  return (
    <RadioButtonRN
      style={{justifyContent: 'space-between'}}
      box={false}
      duration={200}
      initial={selected}
      icon={<Icon name="ios-checkmark-circle" color={primaryColor} />}
      activeColor={primaryColor}
      animationTypes={['shake']}
      textStyle={styles.textStyle}
      data={data}
      selectedBtn={onSelect}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'SFPD-light',
    fontSize: 18,
  },
});

Radio.propTypes = {
  /**
   * Accepts an array of object of required `label` key to render the radio
   * buttons.
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * A callback called when a button has been selected.
   */
  onSelect: PropTypes.func,
  /**
   * Accepts the `data` (one of the objects provided in `data` prop) to
   * determin the selected button.
   */
  selected: PropTypes.any,
};

Radio.defaultProps = {
  onSelect: () => {},
};

export {Radio};
