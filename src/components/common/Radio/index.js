import React from 'react';
import {View, StyleSheet} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import {Icon} from '../Icon';
import {primaryColor} from '../variables';
import PropTypes from 'prop-types';

const Radio = ({data, onSelect, selected}) => {
  return (
    <RadioButtonRN
      style={{justifyContent: 'space-between'}}
      box={false}
      duration={200}
      initial={selected}
      icon={<Icon name="ios-checkmark-circle" color={primaryColor} />}
      activeColor={primaryColor}
      animationTypes={['rotate']}
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
  data: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
  selected: PropTypes.number,
};

Radio.defaultProps = {
  onSelect: () => {},
};

export {Radio};
