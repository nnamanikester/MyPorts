import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../Text';
import { Row } from '../Row';
import { Spacer } from '../Spacer';
import { info } from '../variables';
import { Clickable } from '../Clickable';

const ActivityButton = ({ activeIcon, inActiveIcon, onClick, count }) => {
  return (
    <View style={styles.container}>
      <Clickable onClick={onClick}>{activeIcon || inActiveIcon}</Clickable>
      <Spacer />
      <View style={styles.iconContainer}>
        <Text size={14} color={info}>
          {count}
        </Text>
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

export { ActivityButton };
