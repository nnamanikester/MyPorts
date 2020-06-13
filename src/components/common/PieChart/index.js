import { PieChart as PC } from 'react-native-chart-kit';
import React from 'react';
import { primaryColor, lightColor } from '../variables';
import { Dimensions, View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * A component that requires it's `data` prop, `height` and `width` prop to
 * display a pie chart on the screen. The data prop takes the below format;
 * [{
 * name: "Seoul",
 * population: 21500000,
 * color: "rgba(131, 167, 234, 1)",
 * legendFontColor: "#7F7F7F",
 * legendFontSize: 15
 * }]
 */
const PieChart = ({ data, width, height, style, bgColor }) => {
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
      <View>
        <PC
          style={style}
          data={data}
          width={width || Dimensions.get('window').width}
          height={height || 220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor={bgColor || primaryColor}
        />
      </View>
    </>
  );
};

PieChart.propTypes = {
  /**
   * An array of object that takes the below data to display the pie chart
   * [{
   * name: "Seoul",
   * population: 21500000,
   * color: "rgba(131, 167, 234, 1)",
   * legendFontColor: "#7F7F7F",
   * legendFontSize: 15
   * }]
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
   * Defines the background Color of the chart.
   */
  bgColor: PropTypes.string,
  /**
   * A react StyleSheet Object to be applied to the cahrt container
   */
  style: PropTypes.object,
};

export { PieChart };
