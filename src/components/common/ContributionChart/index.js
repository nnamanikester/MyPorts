import { ContributionGraph } from 'react-native-chart-kit';
import React from 'react';
import { primaryColor, lightColor } from '../variables';
import { Dimensions, View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * A component that requires it's `data` prop, `height` and `width` prop to
 * display a github-like contribution chart on the screen. The data prop takes the below format;
 * [
 *  { date: "2017-01-02", count: 8 },
 *  { date: "2017-01-03", count: 4 },
 * ];
 */
const ContributionChart = ({
  data,
  width,
  height,
  style,
  endDate,
  numberOfDays,
  onDayPress,
}) => {
  const chartConfig = {
    backgroundGradientFrom: primaryColor,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: lightColor,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <>
      <View style={style}>
        <ContributionGraph
          values={data}
          endDate={endDate}
          numDays={numberOfDays}
          width={width || Dimensions.get('window').width}
          height={height || 220}
          chartConfig={chartConfig}
          onDayPress={onDayPress}
        />
      </View>
    </>
  );
};

ContributionChart.propTypes = {
  /**
   * An array of object that takes the below data to display the contribution
   * chart
   * [
   *  { date: "2017-01-02", count: 8 },
   *  { date: "2017-01-03", count: 4 },
   * ];
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Defines the width of the chart. default it Device width.
   */
  width: PropTypes.number,
  /**
   * Defines the height of the chart..
   */
  height: PropTypes.number,
  /**
   * Accepts a date as a string to define the end date of the last box
   */
  endDate: PropTypes.string,
  /**
   * A react StyleSheet Object to be applied to the cahrt container
   */
  style: PropTypes.object,
  /**
   * Defines the total number of boxes(days) to be displayed
   */
  numberOfDays: PropTypes.number,
  /**
   * A function to be called after a box is being clicked on.
   */
  onDayPress: PropTypes.func,
};

export { ContributionChart };
