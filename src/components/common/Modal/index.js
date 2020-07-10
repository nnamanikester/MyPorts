import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../Text';

const Modal = ({children, show}) => {
  if (!show) {
    return null;
  }

  return (
    <View
      style={{
        ...styles.background,
      }}>
      <View style={styles.container}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
    width: '90%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 5,
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 9,
    backgroundColor: '#000b',
  },
  button: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

Modal.propTypes = {
  show: PropTypes.bool,
};

Modal.defaultProps = {
  show: false,
};

export {Modal};
