import PropTypes from 'prop-types';
import React from 'react';
import {TextInput as TI, View, StyleSheet} from 'react-native';
import {
  grayColor,
  textColor,
  danger,
  primaryColor,
  inactiveColor,
} from '../variables';

const TextInput = ({
  onFocus,
  onBlur,
  onEndEditing,
  value,
  onChangeText,
  autoCapitalize,
  autoFocus,
  password,
  autoCorrect,
  placeholder,
  multiline,
  keyboardType,
  maxLength,
  rows,
  iconRight,
  iconLeft,
  style,
  error,
  type,
  shape,
}) => {
  let iconLeftStyle = {};
  let iconRightStyle = {};
  let errorStyle = {};
  let typeStyle = {};
  let shapeStyle = {};
  let editable = true;

  if (iconLeft) {
    iconLeftStyle = {
      paddingLeft: 50,
    };
  }
  if (iconRight) {
    iconRightStyle = {
      paddingRight: 50,
    };
  }
  if (error) {
    errorStyle = {
      color: danger,
      borderColor: danger,
    };
  }

  switch (type) {
    case 'disabled':
      typeStyle = {
        elevation: 0,
        backgroundColor: inactiveColor,
        borderWidth: 0,
      };
      editable = false;
      break;
    case 'outline':
      typeStyle = {
        borderWidth: 1,
        borderColor: primaryColor,
      };
      break;
    case 'ghost':
      typeStyle = {
        elevation: 2,
      };
      break;
    default:
      typeStyle = {};
      break;
  }

  switch (shape) {
    case 'rounded':
      shapeStyle = {
        borderRadius: 50,
      };
      break;
    case 'normal':
      shapeStyle = {
        borderRadius: 5,
      };
      break;
    default:
      shapeStyle = {
        borderRadius: 5,
      };
      break;
  }

  return (
    <View style={{...styles.container}}>
      {iconLeft ? <View style={{...styles.iconLeft}}>{iconLeft}</View> : null}
      <TI
        value={value}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
        onBlur={onBlur}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        secureTextEntry={password}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={editable}
        multiline={multiline}
        numberOfLines={rows}
        keyboardType={keyboardType}
        textBreakStrategy="highQuality"
        maxLength={maxLength}
        style={{
          ...styles.input,
          ...iconLeftStyle,
          ...iconRightStyle,
          ...errorStyle,
          ...typeStyle,
          ...shapeStyle,
          ...style,
        }}
      />
      {iconRight ? (
        <View style={{...styles.iconRight}}>{iconRight}</View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    borderColor: grayColor,
    borderRadius: 5,
    height: 50,
    color: textColor,
    fontSize: 16,
    fontFamily: 'SFPD-light',
    paddingHorizontal: 20,
    flex: 1,
  },
  iconLeft: {
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'absolute',
    left: 5,
    zIndex: 10,
  },
  iconRight: {
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'absolute',
    right: 5,
    zIndex: 10,
  },
});

TextInput.propTypes = {
  onChangeText: PropTypes.func,
  autoCapitalize: PropTypes.string,
  placeholder: PropTypes.string,
  autoCorrect: PropTypes.bool,
  autoFocus: PropTypes.bool,
  password: PropTypes.bool,
  iconRight: PropTypes.element,
  iconLeft: PropTypes.element,
  style: PropTypes.object,
  error: PropTypes.bool,
  type: PropTypes.string,
  shape: PropTypes.string,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  keyboardType: PropTypes.string,
  value: PropTypes.any,
};

TextInput.defaultProps = {
  onChangeText: () => {},
  autoCapitalize: 'none',
  autoCorrect: false,
  autoFocus: false,
  password: false,
  placeholder: '',
  style: {},
  error: false,
  shape: 'normal',
  multiline: false,
  keyboardType: 'default',
};

export {TextInput};
