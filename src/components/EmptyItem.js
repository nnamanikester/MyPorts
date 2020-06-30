import React from 'react';
import { View, StyleSheet } from 'react-native';
import { info } from './common/variables';
import * as UI from './common';

const EmptyItem = ({ show, title, message }) => {
  if (!show) return null;

  return (
    <View style={{ ...styles.container }}>
      <View style={styles.headerContanier}>
        <UI.Text h3>{title}</UI.Text>
      </View>

      <UI.Spacer />

      <View style={styles.messageContainer}>
        <UI.Text note color="" style={styles.message}>
          {message}
        </UI.Text>
      </View>

      <UI.Spacer large />

      <View>
        <UI.Icon color={info} size={100} name="ios-basket" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100%',
    // width: '100%',
    backgroundColor: '#fff',
  },
  messageContainer: {
    paddingHorizontal: 30,
  },
});

export default EmptyItem;
