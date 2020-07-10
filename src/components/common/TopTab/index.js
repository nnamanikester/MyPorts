import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

/**
 * A component that requires a `screens` prop to display a material top tab navigation.
 */
const TopTab = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: styles.label,
      }}
      {...props}
      lazy>
      {props.screens.map((screen) => {
        return (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'SFPD-light',
  },
});

TopTab.propTypes = {
  /**
   * Accepts an array of objects with keys `name` (For the route name), `component`(For the
   * component to be rendered) and `options` for the options to be applied on the route.
   * See `https://reactnavigation.org/docs/material-top-tab-navigator/` for reference.
   */
  screens: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TopTab.defaultProps = {};

export {TopTab};
