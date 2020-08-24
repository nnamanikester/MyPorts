import PropTypes from 'prop-types';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Badge} from './common';
import {primaryColor} from './common/variables';
import {danger} from './common/variables';
import {connect} from 'react-redux';
import Permissions from './Permissions';

const Header = ({
  isCart,
  hideHeader,
  headerRight,
  headerLeft,
  title,
  style,
  cart,
}) => {
  if (hideHeader) {
    return null;
  }

  return (
    <View style={{...styles.container, ...style}}>
      {headerLeft && (
        <View style={styles.leftContainerStyle}>{headerLeft}</View>
      )}
      <View style={styles.titleContainerStyle}>
        <Text numberOfLines={1} style={styles.titleStyle} size={17}>
          {title}
        </Text>
      </View>
      {headerRight && (
        <View style={styles.rightContainerStyle}>
          {headerRight}
          <Permissions.Customer>
            {isCart && cart && cart.items && cart.items.length > 0 ? (
              <Badge style={{elevation: 1, top: 10, left: 26}} color={danger} />
            ) : null}
          </Permissions.Customer>
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

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Header);
