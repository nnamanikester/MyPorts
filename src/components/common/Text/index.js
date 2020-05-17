import PropTypes from 'prop-types';
import React from 'react';
import {Text as TXT, StyleSheet} from 'react-native';
import {textColor} from '../variables';

const Text = ({h1, h2, h3, bold, size, children}) => {
  const styles = StyleSheet.create({
    textStyle: {
      fontFamily: h1 || h2 || h3 ? 'SFPD-semi-bold' : 'SFPD-light',
      fontSize: h1 ? 28 : h2 ? 22 : h3 ? 20 : size ? size : 16,
      fontWeight: bold ? 'bold' : 'normal',
      color: textColor,
    },
  });
  return <TXT style={styles.textStyle}>{children}</TXT>;
};

Text.propTypes = {
  size: PropTypes.number,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  bold: PropTypes.bool,
};

export {Text};
