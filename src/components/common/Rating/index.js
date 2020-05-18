import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from '../Icon';
import {warning} from '../variables';

const Rating = ({onClick, s1, s2, s3, s4, s5}) => {
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
    star1: '#999999',
    star2: '#999999',
    star3: '#999999',
    star4: '#999999',
    star5: '#999999',
    star6: '#999999',
  };

  if (averageRating >= 4.5) {
    stars.star1 = warning;
    stars.star2 = warning;
    stars.star3 = warning;
    stars.star4 = warning;
    stars.star5 = warning;
  } else if (averageRating >= 3.5) {
    stars.star1 = warning;
    stars.star2 = warning;
    stars.star3 = warning;
    stars.star4 = warning;
  } else if (averageRating >= 2.5) {
    stars.star1 = warning;
    stars.star2 = warning;
    stars.star3 = warning;
  } else if (averageRating >= 1.5) {
    stars.star1 = warning;
    stars.star2 = warning;
  } else {
    stars.star1 = warning;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onClick}
        style={styles.star}
        activeOpacity={0.5}>
        <Icon name="ios-star-outline" color={stars.star1} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onClick}
        style={styles.star}
        activeOpacity={0.5}>
        <Icon name="ios-star-outline" color={stars.star2} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onClick}
        style={styles.star}
        activeOpacity={0.5}>
        <Icon name="ios-star-outline" color={stars.star3} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onClick}
        style={styles.star}
        activeOpacity={0.5}>
        <Icon name="ios-star-outline" color={stars.star4} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onClick}
        style={styles.star}
        activeOpacity={0.5}>
        <Icon name="ios-star-outline" color={stars.star5} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  star: {
    marginHorizontal: 5,
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

export {Rating};
