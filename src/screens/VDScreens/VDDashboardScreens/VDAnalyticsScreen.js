import React from 'react';
import * as UI from '../../../components/common';
import {primaryColor} from '../../../components/common/variables';
import {View, StyleSheet, Alert} from 'react-native';
import {useLazyQuery} from '@apollo/react-hooks';
import {
  GET_VENDOR_ANALYTICS,
  GET_VENDOR_REPORTS,
} from '../../../apollo/queries/vendor';
import {connect} from 'react-redux';
import Skeleton from 'react-native-skeleton-placeholder';
import {formatMoney, formatShortNumber} from '../../../utils';

const VDAnalyticsScreen = ({navigation, offline, orders}) => {
  const [analytics, setAnalytics] = React.useState({});
  const [reports, setReports] = React.useState({});
  const [sales, setSales] = React.useState(0);

  const [getAnalytics, {loading, data, error}] = useLazyQuery(
    GET_VENDOR_ANALYTICS,
    {
      pollInterval: 500,
    },
  );
  const [
    getReports,
    {loading: reportsLoading, data: reportsData, error: reportsError},
  ] = useLazyQuery(GET_VENDOR_REPORTS, {
    pollInterval: 500,
  });

  React.useEffect(() => {
    if (!offline) {
      getAnalytics();
      getReports();
    }
  }, []);

  React.useMemo(() => {
    if (error) {
      Alert.alert(
        'Error!',
        'Unable to get Analytics. Please check your internet connection and try again!',
        [
          {
            text: 'Try again',
            onPress: () => {
              getAnalytics();
              getReports();
            },
          },
        ],
      );
    }
  }, [error, reportsError]);

  React.useMemo(() => {
    if (data) {
      setAnalytics(data.vendorAnalytics);
    }
    if (reportsData) {
      setReports(reportsData.vendorReports);
      setSales(reportsData.vendorReports.sales.total);
    }
  }, [data, reportsData]);

  return (
    <>
      <UI.Loading show={reportsLoading} />
      <UI.Layout>
        <UI.Spacer />
        <View style={styles.container}>
          <UI.ListItem
            onClick={() => navigation.navigate('ManageWallets')}
            left={
              loading ? (
                <Skeleton>
                  <Skeleton.Item width={50} height={50} borderRadius={5} />
                </Skeleton>
              ) : (
                <View style={styles.list}>
                  <UI.Icon size={35} color="#fff" name="ios-card" />
                </View>
              )
            }
            body={
              <View style={{justifyContent: 'center', flex: 1}}>
                {loading ? (
                  <Skeleton>
                    <Skeleton.Item width="80%" height={10} borderRadius={5} />
                  </Skeleton>
                ) : (
                  <UI.Text>Account Balance</UI.Text>
                )}
              </View>
            }
            right={
              <View style={{flex: 1, justifyContent: 'center'}}>
                {!loading ? (
                  <UI.Text bold note>
                    {formatMoney(analytics.balance)}
                  </UI.Text>
                ) : null}
              </View>
            }
          />

          <UI.ListItem
            onClick={() => navigation.navigate('VDProductsTab')}
            left={
              loading ? (
                <Skeleton>
                  <Skeleton.Item width={50} height={50} borderRadius={5} />
                </Skeleton>
              ) : (
                <View style={styles.list}>
                  <UI.Icon size={35} color="#fff" name="md-basket" />
                </View>
              )
            }
            body={
              <View style={{justifyContent: 'center', flex: 1}}>
                {loading ? (
                  <Skeleton>
                    <Skeleton.Item width="80%" height={10} borderRadius={5} />
                  </Skeleton>
                ) : (
                  <UI.Text>Products</UI.Text>
                )}
              </View>
            }
            right={
              <View style={{flex: 1, justifyContent: 'center'}}>
                {!loading ? (
                  <UI.Text bold note>
                    {formatShortNumber(analytics.products)}
                  </UI.Text>
                ) : null}
              </View>
            }
          />

          <UI.ListItem
            // onClick={() => navigation.navigate('VDNewOrders')}
            left={
              loading ? (
                <Skeleton>
                  <Skeleton.Item width={50} height={50} borderRadius={5} />
                </Skeleton>
              ) : (
                <View style={styles.list}>
                  <UI.Icon size={35} color="#fff" name="ios-time" />
                </View>
              )
            }
            body={
              <View style={{justifyContent: 'center', flex: 1}}>
                {loading ? (
                  <Skeleton>
                    <Skeleton.Item width="80%" height={10} borderRadius={5} />
                  </Skeleton>
                ) : (
                  <UI.Text>New Orders</UI.Text>
                )}
              </View>
            }
            right={
              <View style={{flex: 1, justifyContent: 'center'}}>
                {!loading ? (
                  <UI.Text bold note>
                    {formatShortNumber(analytics.newOrders)}
                  </UI.Text>
                ) : null}
              </View>
            }
          />

          <UI.ListItem
            // onClick={() => navigation.navigate('VDDeliveredOrders')}
            left={
              loading ? (
                <Skeleton>
                  <Skeleton.Item width={50} height={50} borderRadius={5} />
                </Skeleton>
              ) : (
                <View style={styles.list}>
                  <UI.Icon size={35} color="#fff" name="ios-time" />
                </View>
              )
            }
            body={
              <View style={{justifyContent: 'center', flex: 1}}>
                {loading ? (
                  <Skeleton>
                    <Skeleton.Item width="80%" height={10} borderRadius={5} />
                  </Skeleton>
                ) : (
                  <UI.Text>Delivered Orders</UI.Text>
                )}
              </View>
            }
            right={
              <View style={{flex: 1, justifyContent: 'center'}}>
                {!loading ? (
                  <UI.Text bold note>
                    {formatShortNumber(analytics.deliveredOrders)}
                  </UI.Text>
                ) : null}
              </View>
            }
          />

          <UI.ListItem
            // onClick={() => navigation.navigate('VDTransactions')}
            left={
              loading ? (
                <Skeleton>
                  <Skeleton.Item width={50} height={50} borderRadius={5} />
                </Skeleton>
              ) : (
                <View style={styles.list}>
                  <UI.Icon type="FontAwesome" color="#fff" name="exchange" />
                </View>
              )
            }
            body={
              <View style={{justifyContent: 'center', flex: 1}}>
                {loading ? (
                  <Skeleton>
                    <Skeleton.Item width="80%" height={10} borderRadius={5} />
                  </Skeleton>
                ) : (
                  <UI.Text>Total Transactions</UI.Text>
                )}
              </View>
            }
            right={
              <View style={{flex: 1, justifyContent: 'center'}}>
                {!loading ? (
                  <UI.Text bold note>
                    {formatShortNumber(analytics.transactions)}
                  </UI.Text>
                ) : null}
              </View>
            }
          />

          <UI.ListItem
            // onClick={() => navigation.navigate('VDTransactions')}
            left={
              loading ? (
                <Skeleton>
                  <Skeleton.Item width={50} height={50} borderRadius={5} />
                </Skeleton>
              ) : (
                <View style={styles.list}>
                  <UI.Icon type="Fontisto" color="#fff" name="shopping-sale" />
                </View>
              )
            }
            body={
              <View style={{justifyContent: 'center', flex: 1}}>
                {loading ? (
                  <Skeleton>
                    <Skeleton.Item width="80%" height={10} borderRadius={5} />
                  </Skeleton>
                ) : (
                  <UI.Text>Sales</UI.Text>
                )}
              </View>
            }
            right={
              <View style={{flex: 1, justifyContent: 'center'}}>
                {!loading ? (
                  <UI.Text bold note>
                    {formatShortNumber(sales)}
                  </UI.Text>
                ) : null}
              </View>
            }
          />

          <UI.Spacer medium />

          <UI.Text heading>Activity Report</UI.Text>

          <UI.Spacer />

          <UI.ReportBoard
            data={[
              {
                title: 'Orders',
                today: reports && reports.orders ? reports.orders.today : 0,
                week: reports && reports.orders ? reports.orders.week : 0,
                month: reports && reports.orders ? reports.orders.month : 0,
                total: reports && reports.orders ? reports.orders.total : 0,
              },
              {
                title: 'Sales',
                today: reports && reports.sales ? reports.sales.today : 0,
                week: reports && reports.sales ? reports.sales.week : 0,
                month: reports && reports.sales ? reports.sales.month : 0,
                total: reports && reports.sales ? reports.sales.total : 0,
              },
              {
                title: 'Transactions (\u20A6)',
                today:
                  reports && reports.transactions
                    ? reports.transactions.today
                    : 0,
                week:
                  reports && reports.transactions
                    ? reports.transactions.week
                    : 0,
                month:
                  reports && reports.transactions
                    ? reports.transactions.month
                    : 0,
                total:
                  reports && reports.transactions
                    ? reports.transactions.total
                    : 0,
              },
              {
                title: 'Reviews',
                today: reports && reports.reviews ? reports.reviews.today : 0,
                week: reports && reports.reviews ? reports.reviews.week : 0,
                month: reports && reports.reviews ? reports.reviews.month : 0,
                total: reports && reports.reviews ? reports.reviews.total : 0,
              },
              {
                title: 'Comments',
                today: reports && reports.comments ? reports.comments.today : 0,
                week: reports && reports.comments ? reports.comments.week : 0,
                month: reports && reports.comments ? reports.comments.month : 0,
                total: reports && reports.comments ? reports.comments.total : 0,
              },
            ]}
          />

          <UI.Spacer size={100} />
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

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
    orders: state.orders.vendorOrders,
  };
};

export default connect(mapStateToProps)(VDAnalyticsScreen);
