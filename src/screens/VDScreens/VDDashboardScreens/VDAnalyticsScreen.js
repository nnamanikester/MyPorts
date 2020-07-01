import React from 'react';
import * as UI from '../../../components/common';
import {
  inactiveColor,
  textColor,
  primaryColor,
} from '../../../components/common/variables';
import { View, StyleSheet } from 'react-native';

const VDAnalyticsScreen = ({ navigation }) => {
  return (
    <>
      <UI.Layout>
        <UI.Spacer />
        <View style={styles.container}>
          <UI.ListItem
            onClick={() => navigation.navigate('ManageWallets')}
            left={
              <View style={styles.list}>
                <UI.Icon size={35} color="#fff" name="ios-card" />
              </View>
            }
            body={
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <UI.Text>Account Balance</UI.Text>
              </View>
            }
            right={
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <UI.Text bold note>
                  NGN 454,000
                </UI.Text>
              </View>
            }
          />

          <UI.ListItem
            onClick={() => navigation.navigate('VDProductsTab')}
            left={
              <View style={styles.list}>
                <UI.Icon size={35} color="#fff" name="md-basket" />
              </View>
            }
            body={
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <UI.Text>Products</UI.Text>
              </View>
            }
            right={
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <UI.Text bold note>
                  43
                </UI.Text>
              </View>
            }
          />

          <UI.ListItem
            onClick={() => navigation.navigate('VDNewOrders')}
            left={
              <View style={{ ...styles.list, backgroundColor: primaryColor }}>
                <UI.Icon size={35} color={'#fff'} name="ios-time" />
              </View>
            }
            body={
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <UI.Text>New Orders</UI.Text>
              </View>
            }
            right={
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <UI.Text bold>3</UI.Text>
              </View>
            }
          />

          <UI.ListItem
            onClick={() => navigation.navigate('VDDeliveredOrders')}
            left={
              <View style={styles.list}>
                <UI.Icon size={35} color="#fff" name="ios-time" />
              </View>
            }
            body={
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <UI.Text>Delivered Orders</UI.Text>
              </View>
            }
            right={
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <UI.Text bold note>
                  546
                </UI.Text>
              </View>
            }
          />

          <UI.ListItem
            onClick={() => navigation.navigate('VDTransactions')}
            left={
              <View style={styles.list}>
                <UI.Icon type="FontAwesome" color="#fff" name="exchange" />
              </View>
            }
            body={
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <UI.Text>Total Transactions</UI.Text>
              </View>
            }
            right={
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <UI.Text bold note>
                  135
                </UI.Text>
              </View>
            }
          />

          <UI.Spacer />
          <UI.Text heading>Activity Report</UI.Text>
          <UI.Spacer />
          <UI.ReportBoard
            data={[
              {
                title: 'Orders',
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

          <UI.Spacer />
          <UI.Text heading>Weekly Sales Chart</UI.Text>
          <UI.Spacer />
          <UI.PieChart
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
          <UI.Spacer large />
        </View>
      </UI.Layout>
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
