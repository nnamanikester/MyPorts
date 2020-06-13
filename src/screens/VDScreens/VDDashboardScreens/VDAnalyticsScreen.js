import React from 'react';
import {
  Text,
  Layout,
  PieChart,
  Spacer,
  ReportBoard,
  ListItem,
  Icon,
} from '../../../components/common';
import {
  inactiveColor,
  textColor,
  primaryColor,
  success,
} from '../../../components/common/variables';
import { View, StyleSheet } from 'react-native';

const VDAnalyticsScreen = ({ navigation }) => {
  return (
    <>
      <Layout>
        <Spacer />
        <View style={styles.container}>
          <ListItem
            left={
              <View style={styles.list}>
                <Icon size={35} color="#fff" name="ios-card" />
              </View>
            }
            body={
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text>Account Balance</Text>
              </View>
            }
            right={
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text bold note>
                  NGN 454,000
                </Text>
              </View>
            }
          />

          <ListItem
            onClick={() => navigation.navigate('VDNewOrders')}
            left={
              <View style={{ ...styles.list, backgroundColor: success }}>
                <Icon size={35} color={'#fff'} name="ios-time" />
              </View>
            }
            body={
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text>New Orders</Text>
              </View>
            }
            right={
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text bold>3</Text>
              </View>
            }
          />

          <ListItem
            onClick={() => navigation.navigate('VDDeliveredOrders')}
            left={
              <View style={styles.list}>
                <Icon size={35} color="#fff" name="ios-time" />
              </View>
            }
            body={
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text>Delivered Orders</Text>
              </View>
            }
            right={
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text bold note>
                  546
                </Text>
              </View>
            }
          />

          <ListItem
            onClick={() => navigation.navigate('VDTransactions')}
            left={
              <View style={styles.list}>
                <Icon type="FontAwesome" color="#fff" name="exchange" />
              </View>
            }
            body={
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text>Total Transactions</Text>
              </View>
            }
            right={
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text bold note>
                  135
                </Text>
              </View>
            }
          />

          <Spacer />
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
          <Spacer large />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  list: {
    backgroundColor: primaryColor,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});

export default VDAnalyticsScreen;
