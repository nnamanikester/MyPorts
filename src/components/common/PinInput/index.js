import React from 'react';
import SmoothPin from 'react-native-smooth-pincode-input';
import PropTypes from 'prop-types';
import {primaryColor} from '../variables';

const PinInput = ({
  keyboardType,
  value,
  onChangeText,
  onFinish,
  password,
  length,
  autoFocus,
  numbersOnly,
  editable,
  placeholder,
  containerStyle,
  focusedStyle,
  cellStyle,
}) => {
  return (
    <>
      <SmoothPin
        value={value}
        onTextChange={onChangeText}
        onFulfill={onFinish}
        cellStyle={{
          borderWidth: 1,
          borderRadius: 5,
          borderColor: 'rgba(2, 57, 122, 0.6)',
          ...cellStyle,
        }}
        cellStyleFocused={{
          borderColor: primaryColor,
          borderWidth: 2,
          ...focusedStyle,
        }}
        containerStyle={{
          marginHorizontal: 10,
          alignItems: 'flex-start',
          ...containerStyle,
        }}
        password={password}
        codeLength={length}
        placeholder={placeholder}
        autoFocus={autoFocus}
        editable={editable}
        restrictToNumbers={numbersOnly}
        onBackspace={() => {}}
        keyboardType={keyboardType}
        cellSpacing={10}
      />
    </>
  );
};

PinInput.propTypes = {
  /**
   * The type of keyboard to be used when typing the inputs
   */
  keyboardType: PropTypes.string,
  /**
   * A callback function to be called when the input is filled.
   */
  onFinish: PropTypes.func,
  /**
   * Determined if the input is hidden or not. Default is false.
   */
  password: PropTypes.bool,
  /**
   * The number of input boxes. Default is 4,
   */
  length: PropTypes.number,
  /**
   * If true, focuses the input on screen render.
   */
  autoFocus: PropTypes.bool,
  /**
   * Restrict input to numbers only
   */
  numbersOnly: PropTypes.bool,
  /**
   * If false, makes each cell not editable. Default is true.
   */
  editable: PropTypes.bool,
  /**
   * A required field. The value to show for the input.
   */
  value: PropTypes.string.isRequired,
  /**
   * Callback function that's called when the text changes.
   */
  onChangeText: PropTypes.func.isRequired,
  /**
   * A text to be used as a placeholder.
   */
  placeholder: PropTypes.string,
};

PinInput.defaultProps = {
  keyboardType: 'number-pad',
  onFinish: () => {},
  password: false,
  length: 4,
  autoFocus: true,
  numbersOnly: true,
  editable: true,
};

export {PinInput};
