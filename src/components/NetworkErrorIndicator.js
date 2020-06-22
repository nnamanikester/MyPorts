import React from 'react';
import * as UI from './common';
import { View, StyleSheet } from 'react-native';
import { danger } from './common/variables';

const NetworkErrorIndicator = ({ onRetry, show, topPosition }) => {
  if (!show) return null;

  return (
    <>
      <View style={{ ...styles.container, top: topPosition }}>
        <UI.Text color="#fff" bold>
          Hello! You are currently offline.
        </UI.Text>
        <UI.Spacer />
        <UI.Link onClick={onRetry}>
          <UI.Text
            bold
            style={{ textDecorationLine: 'underline' }}
            color="#fff">
            Retry
          </UI.Text>
        </UI.Link>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    backgroundColor: danger,
    top: 0,
    height: 30,
    left: 0,
    zIndex: 999999999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NetworkErrorIndicator;
