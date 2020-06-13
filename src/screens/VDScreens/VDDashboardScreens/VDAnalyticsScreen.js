import React from 'react';
import {
  Text,
  Layout,
  PieChart,
  Spacer,
  ReportBoard,
} from '../../../components/common';
import {
  inactiveColor,
  textColor,
  primaryColor,
} from '../../../components/common/variables';
import { View, StyleSheet } from 'react-native';

const VDAnalyticsScreen = () => {
  return (
    <>
      <Layout>
        <Spacer />
        <View style={styles.container}>
          <Text heading>Activity Report</Text>
          <Spacer />
          <ReportBoard
            data={[
              {
                title: 'Sales',
                today: '10',
                week: '24',
                month: '93',
                total: '549',
              },
              {
                title: 'Transactions(NGN)',
                today: '22.5k',
                week: '122k',
                month: '540k',
                total: '3.1m',
              },
              {
                title: 'Reviews',
                today: '2',
                week: '7',
                month: '23',
                total: '102',
              },
              {
                title: 'Comments',
                today: '20',
                week: '79',
                month: '205',
                total: '2.3k',
              },
              {
                title: 'Views',
                today: '234',
                week: '1.1k',
                month: '23.5k',
                total: '256.4k',
              },
            ]}
          />

          <Spacer />
          <Text heading>Weekly Sales Chart</Text>
          <Spacer />
          <PieChart
            data={[
              {
                name: 'Kester',
                color: primaryColor,
                population: 20,
                legendFontColor: textColor,
                legendFontSize: 15,
              },
              {
                name: 'Kester',
                color: primaryColor + '99',
                population: 28,
                legendFontColor: textColor,
                legendFontSize: 15,
              },
              {
                name: 'Kester',
                color: primaryColor + '55',
                population: 19,
                legendFontColor: textColor,
                legendFontSize: 15,
              },
              {
                name: 'Kester',
                color: primaryColor + '22',
                population: 26,
                legendFontColor: textColor,
                legendFontSize: 15,
              },
            ]}
            bgColor={inactiveColor}
          />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default VDAnalyticsScreen;
