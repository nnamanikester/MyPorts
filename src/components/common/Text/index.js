import PropTypes from 'prop-types';
import React from 'react';
import {Text as TXT, StyleSheet} from 'react-native';
import {textColor, info} from '../variables';

/**
 * A component for displaying texts which supports
 */
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
  numberOfLines,
  textDecoration,
}) => {
  const textStyle = {};

  if (h1) {
    textStyle.fontSize = 28;
    textStyle.fontFamily = 'SFPD-semi-bold';
    textStyle.lineHeight = 33;
  } else if (h2) {
    textStyle.fontFamily = 'SFPD-semi-bold';
    textStyle.fontSize = 22;
    textStyle.lineHeight = 27;
  } else if (h3) {
    textStyle.fontFamily = 'SFPD-semi-bold';
    textStyle.fontSize = 18;
    textStyle.lineHeight = 25;
  } else if (note) {
    textStyle.color = info;
    textStyle.fontSize = 13;
    textStyle.lineHeight = 17;
  } else if (heading) {
    textStyle.fontFamily = 'SFPD-regular';
    textStyle.fontSize = 17;
    textStyle.lineHeight = 21;
  } else if (size) {
    textStyle.fontSize = size;
    textStyle.lineHeight = size + 10;
  } else {
    textStyle.fontSize = 16;
    textStyle.lineHeight = 20;
  }

  if (color) {
    textStyle.color = color;
  }

  if (bold) {
    textStyle.fontFamily = 'SFPD-semi-bold';
  }

  switch (textDecoration) {
    case 'lineThrough':
      textStyle.textDecorationLine = 'line-through';
  }

  return (
    <TXT
      numberOfLines={numberOfLines}
      style={{...styles.text, ...textStyle, ...style}}>
      {children}
    </TXT>
  );
};

const styles = StyleSheet.create({
  text: {
    color: textColor,
    fontSize: 16,
    fontFamily: 'SFPD-light',
  },
});

Text.propTypes = {
  /**
   * Used to change the font size of the `Text`. Default is `16`.
   */
  size: PropTypes.number,
  /**
   *
   */
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  bold: PropTypes.bool,
  style: PropTypes.object,
  color: PropTypes.string,
  note: PropTypes.bool,
  heading: PropTypes.bool,
  numberOfLines: PropTypes.number,
};

Text.defaultProps = {
  style: {},
  size: 16,
  bold: false,
  color: textColor,
  note: false,
  heading: false,
  h1: false,
  h2: false,
  h3: false,
  numberOfLines: 9999999999,
};

export {Text};
