import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from '../Icon';
import {primaryColor} from '../variables';
import {Clickable} from '../Clickable';

const Rating = ({onClick, s1, s2, s3, s4, s5, size, value}) => {
  const [totalRatings] = React.useState(s1 + s2 + s3 + s4 + s5);
  const [averageRating, setAverageRating] = React.useState(0);
  const [star, setStar] = React.useState(value);

  React.useMemo(() => {
    const s1Percentage = 0;
    const s2Percentage = 25;
    const s3Percentage = 50;
    const s4Percentage = 75;
    const s5Percentage = 100;

    const s1Value = s1 * s1Percentage;
    const s2Value = s2 * s2Percentage;
    const s3Value = s3 * s3Percentage;
    const s4Value = s4 * s4Percentage;
    const s5Value = s5 * s5Percentage;

    const averageValue =
      (s1Value + s2Value + s3Value + s4Value + s5Value) / totalRatings;

    setAverageRating(averageValue / 20);
  }, [s1, s2, s3, s4, s5, onClick]);

  let stars = {
    star1: '#E8E8E8',
    star2: '#E8E8E8',
    star3: '#E8E8E8',
    star4: '#E8E8E8',
    star5: '#E8E8E8',
    star6: '#E8E8E8',
  };

  const handleClick = (rate) => {
    setAverageRating(rate);
    return onClick(rate);
  };

  if (averageRating >= 4.5) {
    stars.star1 = primaryColor;
    stars.star2 = primaryColor;
    stars.star3 = primaryColor;
    stars.star4 = primaryColor;
    stars.star5 = primaryColor;
  } else if (averageRating >= 3.5) {
    stars.star1 = primaryColor;
    stars.star2 = primaryColor;
    stars.star3 = primaryColor;
    stars.star4 = primaryColor;
  } else if (averageRating >= 2.5) {
    stars.star1 = primaryColor;
    stars.star2 = primaryColor;
    stars.star3 = primaryColor;
  } else if (averageRating >= 1.5) {
    stars.star1 = primaryColor;
    stars.star2 = primaryColor;
  } else if (averageRating >= 0.1) {
    stars.star1 = primaryColor;
  }

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
   * `Star1`, the value of the first star. Accepts a number.
   */
  s1: PropTypes.number,
  /**
   * `Star2`, the value of the second star. Accepts a number.
   */
  s2: PropTypes.number,
  /**
   * `Star3`, the value of the third star. Accepts a number.
   */
  s3: PropTypes.number,
  /**
   * `Star4`, the value of the fourth star. Accepts a number.
   */
  s4: PropTypes.number,
  /**
   * `Star5`, the value of the fifth star. Accepts a number.
   */
  s5: PropTypes.number,
  /**
   * The value of the current star from 1 - 5.
   */
  value: PropTypes.number,
};

Rating.defaultProps = {
  onClick: () => {},
  s1: 0,
  s2: 0,
  s3: 0,
  s4: 0,
  s5: 0,
};

export {Rating};
