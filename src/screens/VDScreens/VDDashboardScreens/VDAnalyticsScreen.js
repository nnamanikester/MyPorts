import React from 'react';
import {
  Text,
  Layout,
  PieChart,
  Spacer,
  Row,
  Column,
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

        <View style={{ backgroundColor: inactiveColor, padding: 10 }}>
          <Text heading>Sales(NGN)</Text>
          <Row>
            <Column style={{ alignItems: 'center' }} size="3">
              <Text bold>13</Text>
              <Text note color="">
                Today
              </Text>
            </Column>
            <Column style={{ alignItems: 'center' }} size="3">
              <Text bold>13</Text>
              <Text note color="">
                This week
              </Text>
            </Column>
            <Column style={{ alignItems: 'center' }} size="3">
              <Text bold>13</Text>
              <Text note color="">
                This Month
              </Text>
            </Column>
            <Column style={{ alignItems: 'center' }} size="3">
              <Text bold>13</Text>
              <Text note color="">
                Total
              </Text>
            </Column>
          </Row>
        </View>

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
