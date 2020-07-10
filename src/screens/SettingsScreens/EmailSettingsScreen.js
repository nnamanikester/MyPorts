import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Layout,
  Text,
  Switch,
  Icon,
  Spacer,
  ListItem,
  Clickable,
} from '../../components/common';
import Header from '../../components/Header';
import {connect} from 'react-redux';

const EmailSettingsScreen = ({navigation, user}) => {
  const {
    customer: {emailSetting},
  } = user;
  console.log('custoer', emailSetting);
  const [value, setValue] = useState(false);
  const [orders, setOrders] = React.useState(emailSetting.orders);
  const [promotions, setPromotions] = React.useState(emailSetting.promotions);
  const [rewards, setRewards] = React.useState(emailSetting.rewards);

  return (
    <>
      <Header
        title="Email Settngs"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Clickable>
        }
      />
      <Layout>
        <View style={styles.container}>
          <ListItem
            body={
              <>
                <Text size={17}>Your Orders</Text>
                <Text note>Notify me of the status of my orders</Text>
              </>
            }
            right={
              <Switch value={orders} onChange={() => setOrders(!orders)} />
            }
          />

          <Spacer />

          <ListItem
            body={
              <>
                <Text size={17}>Deals and Promotions</Text>
                <Text note>Daily deals, promotions and flash sales</Text>
              </>
            }
            right={
              <Switch
                value={promotions}
                onChange={() => setPromotions(!promotions)}
              />
            }
          />

          <Spacer />

          <ListItem
            body={
              <>
                <Text size={17}>Rewards</Text>
                <Text note>Gifts, rewards, and coupons</Text>
              </>
            }
            right={
              <Switch value={rewards} onChange={() => setRewards(!rewards)} />
            }
          />

          <Spacer />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
});

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
    customer: state.customer.profile,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(EmailSettingsScreen);
