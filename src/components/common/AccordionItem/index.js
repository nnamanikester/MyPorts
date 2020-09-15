import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {Text} from '../Text';
import {Icon} from '../Icon';
import {primaryColor} from '../variables';
import {Clickable} from '../Clickable';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

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
  const [anim, setAnim] = React.useState(false);

  // Callback functions to be run when the header is clicked.
  const callbacks = () => {
    onExpand();
    if (onClick) {
      onClick();
    }
  };

  React.useMemo(() => {
    if (anim) {
      LayoutAnimation.spring();
    }
  }, [expanded]);

  React.useEffect(() => {
    setAnim(true);
  });

  return (
    <View style={styles.container}>
      <Clickable
        onClick={callbacks}
        style={{...styles.header, ...headerContainerStyle}}>
        <Text style={{...styles.headerText, ...headerTextStyle}}>
          {headerText}
        </Text>
        <Icon
          style={styles.headerIcon}
          name={`ios-arrow-${expanded ? 'up' : 'down'}`}
        />
      </Clickable>
      <View
        style={{
          ...styles.body,
          display: expanded ? 'flex' : 'none',
          borderBottomWidth: expanded ? 1 : 0,
          borderColor: '#0001',
          ...bodyStyle,
        }}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    borderColor: primaryColor,
    borderRadius: 5,
    overflow: 'hidden',
  },
  header: {
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#0001',
  },
  headerText: {
    fontFamily: 'SFPD-regular',
    fontSize: 18,
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
  headerText: PropTypes.string,
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

AccordionItem.defaultProps = {
  headerTextStyle: {},
  headerContainerStyle: {},
  bodyStyle: {},
  onClick: () => {},
};

export {AccordionItem};
