import PropTypes from 'prop-types';
import React from 'react';
import {TextInput, Text, Icon, Link} from './common';
import {TextInput as TeIp} from 'react-native';
import {StyleSheet, View} from 'react-native';

const SearchBar = (props) => {
  const {
    placeholder,
    onChangeText,
    value,
    onFilterClick,
    hideFilterIcon,
  } = props;
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        value={value}
        autoFocus={true}
        iconLeft={<Icon name="ios-search" />}
        placeholder={placeholder}
        onChangeText={onChangeText}
        iconRight={
          !hideFilterIcon ? (
            <Link onClick={onFilterClick}>
              <Icon name="ios-options" />
            </Link>
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
