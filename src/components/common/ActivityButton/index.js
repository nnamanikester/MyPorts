import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {Text} from '../Text';
import {Spacer} from '../Spacer';
import {info} from '../variables';
import {Clickable} from '../Clickable';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ActivityButton = ({activeIcon, inActiveIcon, onClick, count}) => {
  const [resize, setResize] = React.useState(24);

  React.useMemo(() => {
    LayoutAnimation.spring();
  }, [onClick]);

  return (
    <View style={styles.container}>
      <Clickable
        onPressIn={() => setResize(16)}
        onPressOut={() => setResize(24)}
        style={{width: resize, height: resize}}
        onClick={onClick}>
        {activeIcon || inActiveIcon}
      </Clickable>
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

export {ActivityButton};
