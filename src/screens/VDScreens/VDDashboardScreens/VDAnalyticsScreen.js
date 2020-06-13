import React from 'react';
import {
  Text,
  Layout,
  PieChart,
  Spacer,
  Row,
  Column,
  ReportBoard,
} from '../../../components/common';
import {
  lightColor,
  inactiveColor,
  textColor,
  primaryColor,
} from '../../../components/common/variables';
import { View } from 'react-native';

const VDAnalyticsScreen = () => {
  return (
    <>
      <Layout style={{ padding: 0, margin: 0 }}>
        <Spacer />

        <ReportBoard
          data={[
            {
              title: 'Sales(NGN)',
              today: '10',
              week: '24',
              month: '93',
              total: '549',
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
      </Layout>
    </>
  );
};

export default VDAnalyticsScreen;
