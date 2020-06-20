import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Spacer, Icon } from './common';
import { info } from './common/variables';

const NetworkError = ({ show, onButtonClick }) => {
  if (!show) {
    return null;
  }

  return (
    <View style={{ ...styles.container }}>
      <View style={styles.iconContainer}>
        <Icon color={info} size={100} type="Feather" name="wifi-off" />
      </View>
      <Spacer large />

      <View style={styles.headerContanier}>
        <Text h1>No Internet</Text>
      </View>

      <Spacer />

      <View style={styles.messageContainer}>
        <Text style={styles.message}>
          Hey! It seems you're offline. {' \n'}
          Please check your internet connection and try again.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button onClick={onButtonClick}>
          <Text color="#fff">Retry</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'absolute',
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 99999999999,
    elevation: 15,
  },
  messageContainer: {
    paddingHorizontal: 30,
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
  },
  backgroundContainer: {
    width: '100%',
    position: 'absolute',
    bottom: -10,
  },
  background: {
    width: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 50,
    bottom: 50,
    elevation: 9999,
    zIndex: 999999,
  },
});

export default NetworkError;
