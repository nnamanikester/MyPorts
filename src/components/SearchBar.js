import PropTypes from 'prop-types';
import React from 'react';
import {TextInput, Text, Icon} from './common';
import {TextInput as TeIp} from 'react-native';
import {StyleSheet, View} from 'react-native';

const SearchBar = ({placeholder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoFocus={true}
        iconLeft={<Icon name="ios-search" />}
        placeholder="Article"
        multiline={true}
      />
      {/* <TeIp autoFocus={false} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
