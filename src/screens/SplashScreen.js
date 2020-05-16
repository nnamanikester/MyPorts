import React from 'react';
import {View, Text} from 'react-native';

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 30, fontFamily: 'SFPD-regular'}}>
        App Loading
      </Text>
    </View>
  );
};

export default SplashScreen;
