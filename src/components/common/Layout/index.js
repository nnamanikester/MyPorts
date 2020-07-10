import PropTypes from 'prop-types';
import React from 'react';
import {ScrollView, StyleSheet, View, RefreshControl} from 'react-native';
import {primaryColor} from '../variables';

const Layout = ({
  children,
  itemToFloat,
  style,
  noScroll,
  onEndReached,
  onRefresh,
  refreshing,
}) => {
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 0;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <>
      {noScroll ? (
        <View style={{...styles.container, ...style}}>{children}</View>
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl
              colors={[primaryColor]}
              onRefresh={onRefresh}
              refreshing={refreshing}
              progressBackgroundColor="#fff"
            />
          }
          scrollEventThrottle={400}
          stickyHeaderIndices={[itemToFloat]}
          showsVerticalScrollIndicator={false}
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent)) {
              onEndReached();
            }
          }}
          bounces
          style={{...styles.container, ...style}}>
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
   * Invoked when a the user scrolls to the bottom of the scrollview
   */
  onEndReached: PropTypes.func,
  /**
   * Invoked when the view start refreshing
   */
  onRefresh: PropTypes.func,
  /**
   * Whether the view should be indicating an active refresh
   */
  refreshing: PropTypes.bool,
};

Layout.defaultProps = {
  style: {},
  noScroll: false,
  onEndReached: () => {},
  refreshing: false,
};

export {Layout};
