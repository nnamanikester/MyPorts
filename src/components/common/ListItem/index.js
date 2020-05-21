import PropTypes from 'prop-types';
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {grayColor} from '../variables';

const ListItem = ({children, selected, left, right, body}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <View style={styles.left}>{left}</View>
      <View style={styles.body}>{body || children}</View>
      <View style={styles.right}>{right}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: grayColor,
    paddingBottom: 10,
    marginBottom: 10,
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

ListItem.propTypes = {};

ListItem.defaultProps = {};

export {ListItem};
