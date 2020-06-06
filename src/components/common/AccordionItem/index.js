import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from '../Text';
import {Icon} from '../Icon';
import {primaryColor} from '../variables';

const AccordionItem = ({children, expanded, index, onExpand, props}) => {
  const {onClick} = props;

  const runFunctions = () => {
    onExpand();
    if (onClick) {
      onClick();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={runFunctions}
        activeOpacity={0.7}
        style={styles.header}>
        <Text style={styles.headerText}>Heading Text</Text>
        <Icon
          style={styles.headerIcon}
          name={`ios-arrow-${expanded ? 'up' : 'down'}`}
        />
      </TouchableOpacity>
      <View style={{...styles.body, display: expanded ? 'flex' : 'none'}}>
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

export {AccordionItem};
