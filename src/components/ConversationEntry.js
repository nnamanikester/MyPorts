import React from 'react';
import {Icon, TextInput, FAB} from './common';
import {View, StyleSheet} from 'react-native';

const ConversationEntry = (props) => {
  const {sending, onSubmit} = props;
  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <TextInput {...props} multiline placeholder="Type message here..." />
        </View>
        <FAB
          onClick={onSubmit}
          size={50}
          type={sending ? 'disabled' : ''}
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
