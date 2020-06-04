import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Icon} from '..';
import PropTypes from 'prop-types';
import {primaryColor, grayColor} from '../variables';
import {TouchableOpacity} from 'react-native-gesture-handler';

/**
 * A component that given `show` boolean prop with value `true`, displays a bar from
 * the bottom of the app.
 */
const ActionBar = ({
  show,
  headerTextColor,
  headerText,
  iconColor,
  onCloseButtonClick,
  children,
  headerTextStyle,
  containerStyle,
}) => {
  if (!show) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <View style={{...styles.container, ...containerStyle}}>
        <View style={styles.header}>
          <Text
            style={{...styles.headerText, ...headerTextStyle}}
            color={headerTextColor}>
            {headerText}
          </Text>
          <TouchableOpacity onPress={onCloseButtonClick} activeOpacity={0.7}>
            <Icon color={iconColor} name="md-close" />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#0007',
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 999999999,
    elevation: 999999,
  },
  container: {
    height: '70%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: grayColor,
  },
  headerText: {
    flex: 1,
    fontFamily: 'SFPD-regular',
    fontSize: 24,
  },
  body: {
    padding: 10,
  },
});

ActionBar.propTypes = {
  /**
   * If `true` displays the bar. default is false.
   */
  show: PropTypes.bool,
  /**
   * Accepts a color value. If provided, determines the color of the `headerText`.
   */
  headerTextColor: PropTypes.string,
  /**
   * Accepts A string as the Text to be displayed on the header of the ActionBar. Default is
   * `Action Bar`.
   */
  headerText: PropTypes.string,
  /**
   * Accepts a color value. If provided, changes the color of the close button Icon.
   */
  iconColor: PropTypes.string,
  /**
   * A callback function when the close button is clicked.
   */
  onCloseButtonClick: PropTypes.func,
  /**
   * A react StyleSheet that will be applied on the `headerText`.
   */
  headerTextStyle: PropTypes.object,
  /**
   * A react StyleSheet that will be applied on the ActionBar Container.
   */
  containerStyle: PropTypes.object,
};

ActionBar.defaultProps = {
  show: false,
  headerText: 'Action Bar',
  onCloseButtonClick: () => {},
  headerTextStyle: {},
  containerStyle: {},
};

export {ActionBar};
