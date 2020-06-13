import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Row, Column } from '..';
import { inactiveColor } from '../variables';
import PropTypes from 'prop-types';

/**
 * A component that displays a report with four colums and labels namely: `today`
 * `This Week`, `This Month`, and `Total`. Can e very useful in charts. It accepts
 * a required `data` prop which is an array of object with the following structure;
 * [{
 * `title`: `String`,
 * `today`: `String`,
 * `week`: `String`,
 * `month`: `String`,
 * `total`: `String`,
 * `todayLabel`: `String`,
 * `weekLabel`: `String`,
 * `monthLabel`: `String`,
 * `totalLabel`: `String`,
 * }]
 */
const ReportBoard = ({ data, containerStyle, headingStyle }) => {
  return (
    <>
      <View style={{ ...styles.container, ...containerStyle }}>
        {data.map((report, index) => {
          <View key={index}>
            <Text style={{ ...styles.heading, ...headingStyle }} heading>
              {report.title}
            </Text>
            <Row>
              <Column style={{ alignItems: 'center' }} size="3">
                <Text bold>{report.today}</Text>
                <Text note color="">
                  {report.todayLabel || 'Today'}
                </Text>
              </Column>
              <Column style={{ alignItems: 'center' }} size="3">
                <Text bold>{report.week}</Text>
                <Text note color="">
                  {report.weekLabel || 'This Week'}
                </Text>
              </Column>
              <Column style={{ alignItems: 'center' }} size="3">
                <Text bold>{report.month}</Text>
                <Text note color="">
                  {report.monthLabel || 'This Month'}
                </Text>
              </Column>
              <Column style={{ alignItems: 'center' }} size="3">
                <Text bold>{report.total}</Text>
                <Text note color="">
                  {report.totalLabel || 'Total'}
                </Text>
              </Column>
            </Row>
          </View>;
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: inactiveColor,
    padding: 10,
    borderRadius: 5,
  },
  heading: {
    fontSize: 18,
    fontFamily: 'SFPD-regular',
  },
});

ReportBoard.propTypes = {
  /**
   * Accepts an array of object with the following structure;
   * [{
   * `title`: `String`,
   * `today`: `String`,
   * `week`: `String`,
   * `month`: `String`,
   * `total`: `String`,
   * `todayLabel`: `String`,
   * `weekLabel`: `String`,
   * `monthLabel`: `String`,
   * `totalLabel`: `String`,
   * }]
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * A react StyleSheet Object that will be used to style the report container.
   */
  containerStyle: PropTypes.object,
  /**
   * A react StyleSheet Object that will be used to style the heading text.
   */
  headingStyle: PropTypes.object,
};

export { ReportBoard };
