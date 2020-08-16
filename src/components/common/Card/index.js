import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = ({children, style}) => {
  return <View style={{...styles.container, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    minHeight: 100,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: '#fff0',
  },
});

export {Card};
