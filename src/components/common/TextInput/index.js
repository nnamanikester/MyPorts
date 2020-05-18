import PropTypes from 'prop-types';
import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const TextInput = ({onChangeText}) => {
  return (
    <View>
      <TextInput onChangeText={onChangeText} />
    </View>
  );
};

const styles = StyleSheet.create({});

export {TextInput};
