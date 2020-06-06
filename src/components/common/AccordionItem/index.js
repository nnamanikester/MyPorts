import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from '../Text';
import {Icon} from '../Icon';
import {primaryColor} from '../variables';

/**
 * An `AccordionItem`, to be used only inside an Accordion.
 */
const AccordionItem = ({children, expanded, index, onExpand, props}) => {
  const {
    onClick,
    headerText,
    headerTextStyle,
    headerContainerStyle,
    bodyStyle,
  } = props;

  // Call back functions to be run when the header is clicked.
  const callbacks = () => {
    onExpand();
    if (onClick) {
      onClick();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={headerContainerStyle}
        onPress={callbacks}
        activeOpacity={0.7}
        style={styles.header}>
        <Text style={{...styles.headerText, headerTextStyle}}>
          {headerText}
        </Text>
        <Icon
          style={styles.headerIcon}
          name={`ios-arrow-${expanded ? 'up' : 'down'}`}
        />
      </TouchableOpacity>
      <View
        style={{
          ...styles.body,
          display: expanded ? 'flex' : 'none',
          ...bodyStyle,
        }}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 1,
    borderColor: primaryColor,
    borderRadius: 5,
  },
  header: {
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: primaryColor,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  headerText: {
    fontFamily: 'SFPD-regular',
    fontSize: 20,
  },
  headerIcon: {
    fontSize: 22,
  },
  body: {
    padding: 10,
  },
});

AccordionItem.propTypes = {
  /**
   * Called after the header is being clicked.
   */
  onClick: PropTypes.func,
  /**
   * The text to be displayed on the header of the Accordion.
   */
  headerText: PropTypes.string.isRequired,
  /**
   * A react StyleSheet object to be applied on the `headerText`.
   */
  headerTextStyle: PropTypes.object,
  /**
   * A react StyleSheet object to be applied on the `headerText` Container.
   */
  headerContainerStyle: PropTypes.object,
  /**
   * A react StyleSheet object to be applied on the body of the Accordion.
   */
  bodyStyle: PropTypes.object,
};

export {AccordionItem};
