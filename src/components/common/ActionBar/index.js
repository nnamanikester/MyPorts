import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {Text} from '../Text';
import {Icon} from '../Icon';
import {Layout} from '../Layout';
import PropTypes from 'prop-types';
import {grayColor, primaryColor} from '../variables';
import {Clickable} from '../Clickable';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

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
  React.useMemo(() => {
    LayoutAnimation.spring();
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <View style={{...styles.container, ...containerStyle}}>
        <View style={styles.header}>
          <Text style={{...styles.headerText, ...headerTextStyle}} color="#fff">
            {headerText}
          </Text>
          <Clickable onClick={onCloseButtonClick} activeOpacity={0.7}>
            <Icon color={iconColor || '#fff'} name="md-close" />
          </Clickable>
        </View>
        <Layout style={styles.body}>{children}</Layout>
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
    height: '75%',
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
    backgroundColor: primaryColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    flex: 1,
    fontFamily: 'SFPD-regular',
    fontSize: 20,
  },
  body: {
    paddingTop: 10,
    flex: 1,
    paddingHorizontal: 20,
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
