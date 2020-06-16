import React from 'react';
import {
  Text,
  Spacer,
  Clickable,
  Icon,
  Avatar,
  TextInput,
  FAB,
} from './common';
import { View, StyleSheet } from 'react-native';
import { primaryColor, info, lightColor } from './common/variables';

const ConversationEntry = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <TextInput multiline placeholder="Type message here..." />
        </View>
        <FAB
          size={50}
          shape="squared"
          style={{
            position: 'relative',
            left: 0,
            bottom: 0,
          }}>
          <Icon color="#fff" name="ios-send" />
        </FAB>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: 52,
    bottom: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default ConversationEntry;
