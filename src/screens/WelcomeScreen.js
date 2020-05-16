import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WelcomeScrren = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
});

export default WelcomeScrren;
