import React from 'react';
import { Text, Layout, Spacer, Clickable, Icon, Avatar } from './common';
import { View, StyleSheet, Image } from 'react-native';
import { primaryColor, grayColor, info } from './common/variables';

const Message = ({ onSelect, right, message, time, sent }) => {
  return (
    <>
      <Clickable
        activeOpacity={0.95}
        onLongPress={onSelect}
        style={styles.chatBox}>
        <View style={right ? styles.chatRight : styles.chatLeft}>
          <>
            <Text style={right ? styles.textRight : styles.textLeft}>
              {message}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: right ? 'flex-start' : 'flex-end',
              }}>
              <Text style={right ? styles.timeRight : styles.timeLeft}>
                {time}
              </Text>
              <Spacer size={2} />
              <Icon
                style={{ marginVertical: -7 }}
                name={sent ? 'ios-checkmark' : 'ios-time'}
                color={
                  right && sent
                    ? primaryColor
                    : right && !sent
                    ? info
                    : !right && sent
                    ? '#fff'
                    : '#555'
                }
                size={!sent ? 14 : 28}
              />
            </View>
          </>
        </View>
      </Clickable>
    </>
  );
};

const styles = StyleSheet.create({
  chatBox: {
    marginBottom: 5,
  },
  chatLeft: {
    backgroundColor: primaryColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    maxWidth: '80%',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  textLeft: {
    fontSize: 14,
    lineHeight: 16,
    color: '#fff',
  },
  chatRight: {
    borderColor: primaryColor,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    maxWidth: '80%',
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  textRight: {
    fontSize: 14,
    lineHeight: 16,
  },
  timeRight: {
    fontSize: 11,
    color: '#444',
    lineHeight: 11,
    alignSelf: 'flex-end',
    marginTop: 3,
  },
  timeLeft: {
    fontSize: 11,
    color: '#666',
    marginTop: 3,
    lineHeight: 11,
  },
});

export default Message;
