import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {Text} from '../Text';
import {primaryColor, inactiveColor, grayColor, textColor} from '../variables';
import {Clickable} from '../Clickable';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

let smallStyle = {};
let color = '#fff';
let typeStyle = {};
let disabled = 1;

const Button = ({
  children,
  onClick,
  size,
  type,
  iconRight,
  iconLeft,
  showIconDivider,
  style,
}) => {
  const [resize, setResize] = React.useState(size === 'small' ? 140 : '100%');
  const [anim, setAnim] = React.useState(false);

  switch (type) {
    case 'disabled':
      typeStyle = {
        elevation: 0,
        backgroundColor: inactiveColor,
        borderWidth: 0,
      };
      disabled = 1;
      break;
    case 'outline':
      typeStyle = {
        borderWidth: 1,
        borderColor: primaryColor + '55',
        backgroundColor: '#fff',
      };
      color = textColor;
      break;
    case 'ghost':
      typeStyle = {
        backgroundColor: inactiveColor,
        elevation: 0,
      };
      color = textColor;
      break;
    default:
      typeStyle = {};
      break;
  }

  switch (size) {
    case 'small':
      smallStyle = {
        width: resize,
      };
      break;
    case 'large':
      smallStyle = {
        width: resize,
      };
      break;
    default:
      smallStyle = {
        width: resize,
      };
      break;
  }

  React.useMemo(() => {
    if (anim) {
      LayoutAnimation.spring();
    }
  }, [resize]);

  React.useEffect(() => {
    setAnim(true);
  });

  return (
    <Clickable
      onPressIn={() => setResize(size === 'small' ? 120 : '95%')}
      onPressOut={() => setResize(size === 'small' ? 140 : '100%')}
      onClick={type === 'disabled' ? null : onClick}
      style={{
        ...styles.button,
        width: resize,
        ...smallStyle,
        ...typeStyle,
        ...style,
      }}
      activeOpacity={disabled}>
      {iconLeft ? (
        <View
          style={{
            ...styles.iconLeft,
            borderRightWidth: showIconDivider ? 1 : 0,
          }}>
          {iconLeft}
        </View>
      ) : null}
      <Text color={color} style={{...styles.title}}>
        {children}
      </Text>
      {iconRight ? (
        <View
          style={{
            ...styles.iconRight,
            borderLeftWidth: showIconDivider ? 1 : 0,
          }}>
          {iconRight}
        </View>
      ) : null}
    </Clickable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: primaryColor,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 0,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    textTransform: 'uppercase',
    flex: 3,
    textAlign: 'center',
  },
  iconLeft: {
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: grayColor,
    paddingHorizontal: 15,
  },
  iconRight: {
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: grayColor,
    paddingHorizontal: 15,
  },
});

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  showIconDivider: PropTypes.bool,
  style: PropTypes.object,
};

Button.defaultProps = {
  onClick: () => {},
  size: 'large',
  type: '',
  showIconDivider: false,
  style: {},
};

export {Button};
