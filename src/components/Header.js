import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Badge } from './common';
import { primaryColor, lightColor } from './common/variables';
import { danger } from './common/variables';

const Header = ({
  isCart,
  hideHeader,
  headerRight,
  headerLeft,
  title,
  style,
}) => {
  if (hideHeader) return null;

  return (
    <View style={{ ...styles.container, ...style }}>
      {headerLeft && (
        <View style={styles.leftContainerStyle}>{headerLeft}</View>
      )}
      <View style={styles.titleContainerStyle}>
        <Text style={styles.titleStyle} size={17}>
          {title}
        </Text>
      </View>
      {headerRight && (
        <View style={styles.rightContainerStyle}>
          {headerRight}
          {isCart && (
            <Badge style={{ elevation: 1, top: 8, left: 30 }} color={danger} />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    height: 55,
    backgroundColor: primaryColor,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  titleContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  leftContainerStyle: {
    flexDirection: 'row',
    padding: 10,
  },
  rightContainerStyle: {
    flexDirection: 'row',
    padding: 10,
  },
  titleStyle: {
    fontFamily: 'SFPD-semi-bold',
    color: '#fff',
  },
});

Header.propTypes = {
  hideHeader: PropTypes.bool,
  headerRight: PropTypes.element,
  headerLeft: PropTypes.element,
  title: PropTypes.any.isRequired,
};

Header.defaultProps = {
  hideHeader: false,
  headerRight: null,
  headerLeft: null,
  title: 'Title',
};

export default Header;
