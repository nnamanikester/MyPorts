import React from 'react';
import {Clickable} from '../Clickable';
import {Icon} from '../Icon';
import {Text} from '../Text';
import {StyleSheet, View} from 'react-native';
import {primaryColor} from '../variables';
import PropTypes from 'prop-types';

/**
 * A component that accepts array of numbers to display a pagination on the
 * screen
 */
const Pagination = ({currentPage, pages, onButtonClick, clickableButtons}) => {
  // const currentPageStyle = {
  //   backgroundColor: primaryColor,
  //   color: '#fff',
  // };

  return (
    <View style={styles.container}>
      {pages.map((page, index) => (
        <Clickable
          key={index}
          style={{
            ...styles.pageButton,
            backgroundColor: currentPage >= page ? primaryColor : '#fff0',
          }}
          onClick={() => {
            if (clickableButtons) {
              return onButtonClick(page);
            }
            return;
          }}>
          <Text color={currentPage >= page ? '#fff' : '#000'}>
            {currentPage > page ? (
              <Icon name="ios-checkmark" color="#fff" />
            ) : (
              page
            )}
          </Text>
        </Clickable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageButton: {
    minWidth: 30,
    height: 30,
    backgroundColor: '#fff0',
    borderWidth: 1,
    borderColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

Pagination.propTypes = {
  /**
   * Accepts a  number that determines the current page of the pagination.
   */
  currentPage: PropTypes.number,
  /**
   * Callback called with a number of a button after it's being clicked.
   */
  onButtonClick: PropTypes.func,
  /**
   * An array of numbers that are to be dispayed as the `label` for the
   * pagination.
   */
  pages: PropTypes.arrayOf(PropTypes.number),
  /**
   * If `false`, the pagination buttons will not be clickable. dDefault is
   * `true`.
   */
  clickableButtons: PropTypes.bool,
};

Pagination.defautProps = {
  currentPage: 1,
  onButtonClick: () => {},
  pages: [],
  clickableButtons: true,
};

export {Pagination};
