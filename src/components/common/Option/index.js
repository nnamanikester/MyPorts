import React from 'react';
import OptionsMenu from 'react-native-options-menu';
import {View} from 'react-native';
import PropTypes from 'prop-types';

/**
 * A component that requires `options` and `Icon` props to returns a dropdown
 * menu with those options as items inside the menu.
 */
const Option = ({options, icon}) => {
  return (
    <View>
      <OptionsMenu
        customButton={icon}
        options={options.map((opt) => opt.label)}
        actions={options.map((opt) => opt.action)}
      />
    </View>
  );
};

Option.propTypes = {
  /**
   * An array of objects with keys `label`: `String` and `action`: `function`.
   * The `label` is show when the option is open while the `function` is called
   * the a click event is done on the label.
   */
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * An Icon to use as the option menu button.
   */
  icon: PropTypes.element.isRequired,
};

export {Option};
