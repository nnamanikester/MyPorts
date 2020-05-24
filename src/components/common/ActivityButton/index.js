import PropTypes from 'prop-types';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '../Text';
import {Row} from '../Row';
import {Spacer} from '../Spacer';
import {info} from '../variables';

const ActivityButton = ({activeIcon, inActiveIcon, onClick, count}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick} activeOpacity={0.7}>
        {activeIcon || inActiveIcon}
      </TouchableOpacity>
      <Spacer />
      <View style={styles.iconContainer}>
        <Text color={info}>{count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    alignSelf: 'center',
  },
});

ActivityButton.propTypes = {
  activeIcon: PropTypes.element,
  inactiveIcon: PropTypes.element,
  count: PropTypes.number,
};

export {ActivityButton};
