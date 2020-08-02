import React from 'react';
import {Text, Clickable} from './common';
import {View, StyleSheet} from 'react-native';
import {primaryColor, lightColor} from './common/variables';

const Message = ({onSelect, onClick, selected, right, message, time}) => {
  return (
    <>
      <Clickable
        onClick={onClick}
        activeOpacity={0.95}
        onLongPress={onSelect}
        style={
          selected
            ? {...styles.chatBox, ...styles.selected}
            : {...styles.chatBox}
        }>
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
              {/* <Spacer size={2} />
              <Icon
                style={{marginVertical: -7}}
                name={sent ? 'ios-checkmark' : 'ios-time'}
                color={
                  right && sent
                    ? primaryColor
                    : right && !sent
                    ? info
                    : !right && sent
                    ? '#fff'
                    : '#ddd'
                }
                size={!sent ? 14 : 28}
              /> */}
            </View>
          </>
        </View>
      </Clickable>
    </>
  );
};

const styles = StyleSheet.create({
  chatBox: {
    marginBottom: 2,
    borderRadius: 5,
    padding: 5,
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
    color: '#ddd',
    marginTop: 3,
    lineHeight: 11,
  },
  selected: {
    backgroundColor: lightColor,
  },
});

export default Message;
