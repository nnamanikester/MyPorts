import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../Text';

const Option = () => {
  return (
    <View>
      <View style={styles.container}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    minWidth: 150,
    overflow: 'scroll',
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'space-between',
  },
});

export { Option };
