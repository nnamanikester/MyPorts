import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../Text';
import {Row} from '../Row';
import {Column} from '../Column';
import {Spacer} from '../Spacer';
import {primaryColor} from '../variables';
import PropTypes from 'prop-types';
import {formatShortNumber} from '../../../utils';

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
const ReportBoard = ({data, containerStyle, titleStyle}) => {
  return (
    <>
      <View style={{...styles.container, ...containerStyle}}>
        {data.map((report, index) => {
          return (
            <View key={index}>
              <Text style={{...styles.title, ...titleStyle}}>
                {report.title}
              </Text>
              <Row>
                <Column style={{alignItems: 'center'}} size="3">
                  <Text bold color="#fff">
                    {formatShortNumber(report.today)}
                  </Text>
                  <Text note color="#fff">
                    {report.todayLabel || 'Today'}
                  </Text>
                </Column>
                <Column style={{alignItems: 'center'}} size="3">
                  <Text bold color="#fff">
                    {formatShortNumber(report.week)}
                  </Text>
                  <Text note color="#fff">
                    {report.weekLabel || 'This Week'}
                  </Text>
                </Column>
                <Column style={{alignItems: 'center'}} size="3">
                  <Text bold color="#fff">
                    {formatShortNumber(report.month)}
                  </Text>
                  <Text note color="#fff">
                    {report.monthLabel || 'This Month'}
                  </Text>
                </Column>
                <Column style={{alignItems: 'center'}} size="3">
                  <Text bold color="#fff">
                    {formatShortNumber(report.total)}
                  </Text>
                  <Text note color="#fff">
                    {report.totalLabel || 'Total'}
                  </Text>
                </Column>
              </Row>
              <Spacer />
            </View>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    padding: 10,
    flex: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: 'SFPD-regular',
    paddingHorizontal: 20,
    color: '#fff',
    fontWeight: 'bold',
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
  titleStyle: PropTypes.object,
};

export {ReportBoard};
