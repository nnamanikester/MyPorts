import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    height: 190,
    borderRadius: 10,
    margin: 10,
  },
});

export {Card};
