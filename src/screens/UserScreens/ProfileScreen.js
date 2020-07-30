import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import * as UI from '../../components/common';
import {primaryColor} from '../../components/common/variables';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import UserComments from './ProfileTabs/UserComments';
import UserReviews from './ProfileTabs/UserReviews';
import {profilePhoto} from '../../assets/images';
import {formatMoney} from '../../utils/numberFormat';
import {connect} from 'react-redux';
import {
  CUSTOMER_WALLET,
  CUSTOMER_COMMENTS,
  CUSTOMER_ORDERS,
  CUSTOMER_REVIEWS,
  CUSTOMER_SAVES,
} from '../../apollo/queries';
import {useLazyQuery} from '@apollo/react-hooks';
import {checkNetworkStatus} from '../../redux/actions/NetworkActions';
import NetworkErrorIndicator from '../../components/NetworkErrorIndicator';

const ProfileScreen = ({navigation, offline, customer, checkNetworkStatus}) => {
  // Graphql Queries.
  const [
    customerWallet,
    {loading: walletLoading, data: walletData, error: walletError},
  ] = useLazyQuery(CUSTOMER_WALLET);

  const [
    customerSaves,
    {loading: savesLoading, data: savesData, error: savesError},
  ] = useLazyQuery(CUSTOMER_SAVES);

  const [
    customerOrders,
    {loading: ordersLoading, data: ordersData, error: ordersError},
  ] = useLazyQuery(CUSTOMER_ORDERS);
  // const { loading: commentsLoading, data: commentsData } = useLazyQuery(CUSTOMER_COMMENTS);
  // const { loading, data } = useLazyQuery(CUSTOMER_REVIEWS);

  const [savesCount, setSavesCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [balance, setBalance] = useState(0.0);

  useEffect(() => {
    checkNetworkStatus();
    if (!offline) {
      customerOrders({variables: {id: customer.id}});
      customerWallet();
      customerSaves({variables: {id: customer.id}});
    }
    if (walletData) {
      setBalance(walletData.customerWallet.balance);
    }
    if (savesData) {
      setSavesCount(savesData.customerSaves.length);
    }
    if (ordersData) {
      setOrdersCount(ordersData.customerOrders.length);
    }

    if (walletError) {
      Alert.alert('Error', 'Unable to get balance.');
    }
    if (savesError) {
      Alert.alert('Error', 'Unable to get saved items.');
    }
    if (ordersError) {
      Alert.alert('Error', 'Unable to get order history.');
    }
  }, [walletData, savesData, ordersData]);

  return (
    <>
      <NetworkErrorIndicator
        onRetry={() => checkNetworkStatus()}
        show={offline}
      />
      <Header
        isCart
        title="Profile"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Clickable>
        }
        headerRight={
          <>
            <UI.Clickable onClick={() => navigation.navigate('Cart')}>
              <UI.Icon
                name="shopping-bag"
                size={22}
                type="Feather"
                color="#fff"
              />
            </UI.Clickable>
            <UI.Spacer medium />
            <UI.Clickable onClick={() => navigation.navigate('Search')}>
              <UI.Icon name="ios-search" color="#fff" />
            </UI.Clickable>
          </>
        }
      />
      <UI.Layout>
        <UI.Spacer medium />

        <View style={styles.container}>
          {/* USER PROFILE PICTURE AND NAME */}
          <View style={styles.profilePhoto}>
            <Avatar
              size={100}
              rounded
              src={customer.photo ? {uri: customer.photo} : profilePhoto}
            />

            <UI.Text heading>
              {customer ? customer.firstName + ' ' + customer.lastName : null}
            </UI.Text>

            <UI.Link onClick={() => navigation.navigate('UpdateProfile')}>
              Edit Profile
            </UI.Link>
          </View>

          <UI.Spacer medium />

          <UI.Row
            style={{
              justifyContent: 'center',
              flex: 1,
            }}>
            <UI.Column style={styles.column} size="4">
              <UI.Clickable
                onClick={() => navigation.navigate('SavedItems')}
                style={{alignItems: 'center'}}>
                <UI.Icon color={primaryColor} size={30} name="ios-bookmark" />
                <UI.Text>{savesCount}</UI.Text>
              </UI.Clickable>
            </UI.Column>

            <UI.Column style={styles.column} size="4">
              <View style={{alignItems: 'center'}}>
                <UI.Icon color={primaryColor} size={30} name="ios-card" />
                <UI.Text>{formatMoney(balance)}</UI.Text>
              </View>
            </UI.Column>

            <UI.Column style={styles.column} size="4">
              <UI.Clickable
                onClick={() => navigation.navigate('Orders')}
                style={{alignItems: 'center'}}>
                <UI.Icon color={primaryColor} size={30} name="ios-time" />
                <UI.Text>{ordersCount}</UI.Text>
              </UI.Clickable>
            </UI.Column>
          </UI.Row>

          <UI.Spacer />
        </View>

        <UI.TopTab
          screens={[
            {name: 'Reviews', component: UserReviews},
            {name: 'Comments', component: UserComments},
          ]}
        />

        <UI.Spacer large />
        <UI.Spacer large />
        <UI.Spacer large />
      </UI.Layout>
      <UI.Loading show={walletLoading || savesLoading || ordersLoading} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  profilePhoto: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    customer: state.customer.profile,
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps, {checkNetworkStatus})(ProfileScreen);
