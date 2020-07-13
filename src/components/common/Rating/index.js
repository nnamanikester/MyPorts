import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from '../Icon';
import {primaryColor} from '../variables';
import {Clickable} from '../Clickable';

const Rating = ({onClick, size, value, clickable}) => {
  const [averageRating, setAverageRating] = React.useState(value);
  const [stars, setStars] = React.useState({
    star1: '#E8E8E8',
    star2: '#E8E8E8',
    star3: '#E8E8E8',
    star4: '#E8E8E8',
    star5: '#E8E8E8',
    star6: '#E8E8E8',
  });

  const handleClick = (rate) => {
    if (!clickable) {
      return;
    }
    setAverageRating(rate);
    return onClick(rate);
  };

  React.useMemo(() => {
    if (averageRating >= 4.5) {
      setStars({
        star1: primaryColor,
        star2: primaryColor,
        star3: primaryColor,
        star4: primaryColor,
        star5: primaryColor,
      });
    } else if (averageRating >= 3.5) {
      setStars({
        star1: primaryColor,
        star2: primaryColor,
        star3: primaryColor,
        star4: primaryColor,
        star5: '#E8E8E8',
      });
    } else if (averageRating >= 2.5) {
      setStars({
        star1: primaryColor,
        star2: primaryColor,
        star3: primaryColor,
        star4: '#E8E8E8',
        star5: '#E8E8E8',
      });
    } else if (averageRating >= 1.5) {
      setStars({
        star1: primaryColor,
        star2: primaryColor,
        star3: '#E8E8E8',
        star4: '#E8E8E8',
        star5: '#E8E8E8',
      });
    } else if (averageRating >= 0.1) {
      setStars({
        star1: primaryColor,
        star2: '#E8E8E8',
        star3: '#E8E8E8',
        star4: '#E8E8E8',
        star5: '#E8E8E8',
      });
    }
  }, [averageRating, onClick]);

  return (
    <View style={styles.container}>
      <Clickable onClick={() => handleClick(1)} style={styles.star}>
        <Icon size={size || 20} name="ios-star" color={stars.star1} />
      </Clickable>

      <Clickable onClick={() => handleClick(2)} style={styles.star}>
        <Icon size={size || 20} name="ios-star" color={stars.star2} />
      </Clickable>

      <Clickable onClick={() => handleClick(3)} style={styles.star}>
        <Icon size={size || 20} name="ios-star" color={stars.star3} />
      </Clickable>

      <Clickable onClick={() => handleClick(4)} style={styles.star}>
        <Icon size={size || 20} name="ios-star" color={stars.star4} />
      </Clickable>

      <Clickable onClick={() => handleClick(5)} style={styles.star}>
        <Icon size={size || 20} name="ios-star" color={stars.star5} />
      </Clickable>
    </View>
  );
};

const styles = StyleSheet.create({
  star: {
    marginHorizontal: 2,
  },
  container: {
    flexDirection: 'row',
  },
});

Rating.propTypes = {
  /**
   * A function called when the stars are clicked on.
   */
  onClick: PropTypes.func,
  /**
   * The value of the current star from 1 - 5.
   */
  value: PropTypes.number,
  /**
   * Determines if the stars are clickable. Defaults to false.
   */
  clickable: PropTypes.bool,
};

Rating.defaultProps = {
  onClick: () => {},
  value: 0,
  clickable: false,
};

export {Rating};
