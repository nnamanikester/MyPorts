import PropTypes from 'prop-types';
import React from 'react';
import {Text as TXT, StyleSheet} from 'react-native';
import {textColor, info} from '../variables';

const Text = ({
  h1,
  h2,
  h3,
  bold,
  heading,
  note,
  size,
  children,
  style,
  color,
}) => {
  const styles = StyleSheet.create({
    textStyle: {
      fontFamily:
        h1 || h2 || h3
          ? 'SFPD-semi-bold'
          : heading
          ? 'SFPD-regular'
          : 'SFPD-light',
      fontSize: h1 ? 28 : h2 ? 22 : h3 ? 20 : note ? 13 : heading ? 17 : size,
      fontWeight: bold ? 'bold' : 'normal',
      color: color,
    },
  });
  return <TXT style={{...styles.textStyle, ...style}}>{children}</TXT>;
};

Text.propTypes = {
  size: PropTypes.number,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  bold: PropTypes.bool,
  style: PropTypes.object,
  color: PropTypes.string,
  note: PropTypes.bool,
  heading: PropTypes.bool,
};

Text.defaultProps = {
  style: {},
  size: 16,
  bold: false,
  color: textColor,
  note: false,
  heading: false,
};

export {Text};
