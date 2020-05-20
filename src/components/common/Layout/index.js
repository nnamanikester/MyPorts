import PropTypes from 'prop-types';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const Layout = ({children, itemToFloat, style, onScrollUp, onScrollDown}) => {
  let scrollOffset = 0;

  const onScroll = (event) => {
    const currentScrollOffset = event.nativeEvent.contentOffset.y;
    const differnce = Math.abs(currentScrollOffset - scrollOffset);

    if (scrollOffset > currentScrollOffset && differnce > 3) {
      console.log(differnce);
      // scrollOffset = currentScrollOffset;
      if (onScrollDown) return onScrollDown();
    }

    if (differnce > 3) {
      scrollOffset = currentScrollOffset;
      if (onScrollUp) return onScrollUp();
    }
  };

  return (
    <ScrollView
      stickyHeaderIndices={[itemToFloat]}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      bounces={false}
      style={{...styles.container, ...style}}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

Layout.propTypes = {
  itemToFloat: PropTypes.number,
  style: PropTypes.object,
};

Layout.defaultProps = {
  style: {},
};

export {Layout};
