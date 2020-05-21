import PropTypes from 'prop-types';
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {grayColor} from '../variables';

const ListItem = ({children, left, right, body, marked}) => {
  let markedStyle = {};

  if (marked) {
    markedStyle = {
      backgroundColor: '#D0E8FD',
      borderRadius: 5,
    };
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{...styles.container, ...markedStyle}}>
      {left && <View style={styles.left}>{left}</View>}
      <View style={styles.body}>{body || children}</View>
      {right && <View style={styles.right}>{right}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: grayColor,
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
};

ListItem.defaultProps = {};

export {ListItem};
