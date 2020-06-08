import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from '../Icon';
import { primaryColor } from '../variables';
import { Clickable } from '../Clickable';

const Rating = ({ onClick, s1, s2, s3, s4, s5, size }) => {
  const totalRatings = s1 + s2 + s3 + s4 + s5;
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

  const averageRating = averageValue / 20;

  let stars = {
    star1: '#E8E8E8',
    star2: '#E8E8E8',
    star3: '#E8E8E8',
    star4: '#E8E8E8',
    star5: '#E8E8E8',
    star6: '#E8E8E8',
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
      <Clickable onClick={onClick} style={styles.star}>
        <Icon size={size || 20} name="ios-star" color={stars.star1} />
      </Clickable>

      <Clickable onClick={onClick} style={styles.star}>
        <Icon size={size || 20} name="ios-star" color={stars.star2} />
      </Clickable>

      <Clickable onClick={onClick} style={styles.star}>
        <Icon size={size || 20} name="ios-star" color={stars.star3} />
      </Clickable>

      <Clickable onClick={onClick} style={styles.star}>
        <Icon size={size || 20} name="ios-star" color={stars.star4} />
      </Clickable>

      <Clickable onClick={onClick} style={styles.star}>
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
  onClick: PropTypes.func,
  s1: PropTypes.number,
  s2: PropTypes.number,
  s3: PropTypes.number,
  s4: PropTypes.number,
  s5: PropTypes.number,
};

Rating.defaultProps = {
  onClick: () => {},
  s1: 0,
  s2: 0,
  s3: 0,
  s4: 0,
  s5: 0,
};

export { Rating };
