import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = ({children, style}) => {
  return <View style={{...styles.container, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    height: 190,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export {Card};
