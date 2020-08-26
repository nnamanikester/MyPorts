import React from 'react';
import * as UI from '../../../components/common';
import {primaryColor} from '../../../components/common/variables';
import {View, StyleSheet, Alert} from 'react-native';
import {useLazyQuery} from '@apollo/react-hooks';
import {GET_VENDOR_ANALYTICS} from '../../../apollo/queries/vendor';
import {connect} from 'react-redux';
import Skeleton from 'react-native-skeleton-placeholder';
import {formatMoney} from '../../../utils';

const VDAnalyticsScreen = ({navigation, offline}) => {
  const [analytics, setAnalytics] = React.useState({});

  const [getAnalytics, {loading, data, error}] = useLazyQuery(
    GET_VENDOR_ANALYTICS,
    {
      pollInterval: 500,
    },
  );

  React.useEffect(() => {
    if (!offline) {
      getAnalytics();
    }

    if (data) {
      setAnalytics(data.vendorAnalytics);
    }
  }, [data]);

  React.useMemo(() => {
    if (error) {
      Alert.alert(
        'Error!',
        'Unable to get Analytics. Please check your internet connection and try again!',
        [{text: 'Try again', onPress: () => getAnalytics()}],
      );
    }
  }, [error]);

  return (
    <>
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
                    {analytics.products}
                  </UI.Text>
                ) : null}
              </View>
            }
          />

          <UI.ListItem
            onClick={() => navigation.navigate('VDNewOrders')}
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
                    {analytics.newOrders}
                  </UI.Text>
                ) : null}
              </View>
            }
          />

          <UI.ListItem
            onClick={() => navigation.navigate('VDDeliveredOrders')}
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
                  <UI.Text>Dellivered Orders</UI.Text>
                )}
              </View>
            }
            right={
              <View style={{flex: 1, justifyContent: 'center'}}>
                {!loading ? (
                  <UI.Text bold note>
                    {analytics.deliveredOrders}
                  </UI.Text>
                ) : null}
              </View>
            }
          />

          <UI.ListItem
            onClick={() => navigation.navigate('VDTransactions')}
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
                    {analytics.transactions}
                  </UI.Text>
                ) : null}
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
                title: 'Transactions',
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
            ]}
          />

          <UI.Spacer />
          {/* <UI.Text heading>Weekly Sales Chart</UI.Text>
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
          /> */}
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

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps)(VDAnalyticsScreen);
