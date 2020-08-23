import PropTypes from 'prop-types';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {inactiveColor} from '../variables';
import {Clickable} from '../Clickable';

const ListItem = ({children, left, right, body, marked, onClick, style}) => {
  let markedStyle = {};

  if (marked) {
    markedStyle = {
      backgroundColor: '#D0E8FD',
      borderRadius: 5,
    };
  }

  return (
    <Clickable
      onClick={onClick}
      style={{...styles.container, ...markedStyle, ...style}}>
      {left && <View style={styles.left}>{left}</View>}
      <View style={styles.body}>{body || children}</View>
      {right && <View style={styles.right}>{right}</View>}
    </Clickable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: inactiveColor,
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  left: {
    marginHorizontal: 10,
  },
  body: {
    marginRight: 10,
    flex: 1,
  },
  right: {
    marginHorizontal: 10,
  },
});

ListItem.propTypes = {
  marked: PropTypes.bool,
  left: PropTypes.element,
  right: PropTypes.element,
  body: PropTypes.element,
  style: PropTypes.object,
};

ListItem.defaultProps = {};

export {ListItem};
