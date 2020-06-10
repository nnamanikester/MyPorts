import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const Layout = ({
  children,
  itemToFloat,
  style,
  onScrollUp,
  onScrollDown,
  noScroll,
}) => {
  let scrollOffset = 0;

  const onScroll = (event) => {
    const currentScrollOffset = event.nativeEvent.contentOffset.y;
    const differnce = Math.abs(currentScrollOffset - scrollOffset);

    if (scrollOffset > currentScrollOffset && differnce > 3) {
      // scrollOffset = currentScrollOffset;
      if (onScrollDown) return onScrollDown();
    }

    if (differnce > 3) {
      scrollOffset = currentScrollOffset;
      if (onScrollUp) return onScrollUp();
    }
  };

  return (
    <>
      {noScroll ? (
        <View style={{ ...styles.container, ...style }}>{children}</View>
      ) : (
        <ScrollView
          stickyHeaderIndices={[itemToFloat]}
          showsVerticalScrollIndicator={false}
          onScroll={onScroll}
          bounces={false}
          style={{ ...styles.container, ...style }}>
          {children}
        </ScrollView>
      )}
    </>
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
  /**
   * Index of the item to float on the top of the screen onScroll.
   */
  itemToFloat: PropTypes.number,
  /**
   * A react StyleSheet object that will be applied on the layout.
   */
  style: PropTypes.object,
  /**
   * If `true`, the element layout won't be Scrollable. Default id `false`.
   */
  noScroll: PropTypes.bool,
  /**
   * Invoked when a scroll event is detected moving upwards
   */
  onScrollUp: PropTypes.func,
  /**
   * Invoked when a scroll event is detected moving downwards
   */
  onScrollDown: PropTypes.func,
};

Layout.defaultProps = {
  style: {},
  noScroll: false,
};

export { Layout };
