import React from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import * as UI from '../../components/common';
import {connect} from 'react-redux';
import {useMutation} from '@apollo/react-hooks';
import {UPDATE_EMAIL_SETTINGS} from '../../apollo/mutations';
import ScreenHeaderWithoutRightIcon from '../../components/ScreenHeaderWithoutRightIcons';
import {setEmailSettings} from '../../redux/actions/AuthActions';

const EmailSettingsScreen = ({navigation, user, setEmailSettings, offline}) => {
  const {
    customer: {emailSetting},
  } = user;

  const [orders, setOrders] = React.useState(emailSetting.orders);
  const [promotions, setPromotions] = React.useState(emailSetting.promotions);
  const [rewards, setRewards] = React.useState(emailSetting.rewards);

  const [updateEmail] = useMutation(UPDATE_EMAIL_SETTINGS, {
    variables: {
      id: emailSetting.id,
      orders,
      promotions,
      rewards,
    },
  });

  React.useMemo(() => {
    if (!offline) {
      updateEmail()
        .then((res) => {
          setEmailSettings(res.data.updateEmailSettings);
          ToastAndroid.show('Settings Updapted!', ToastAndroid.SHORT);
        })
        .catch((e) => {
          setOrders(emailSetting.orders);
          setPromotions(emailSetting.promotions);
          setRewards(emailSetting.rewards);
          ToastAndroid.show('Error updating settings!', ToastAndroid.SHORT);
        });
    }
  }, [orders, promotions, rewards]);

  return (
    <>
      <ScreenHeaderWithoutRightIcon
        navigation={navigation}
        title="Email Settings"
        icon="back"
      />

      <UI.Layout>
        <View style={styles.container}>
          <UI.ListItem
            body={
              <>
                <UI.Text size={17}>Your Orders</UI.Text>
                <UI.Text note>Notify me of the status of my orders</UI.Text>
              </>
            }
            right={
              <UI.Switch value={orders} onChange={() => setOrders(!orders)} />
            }
          />

          <UI.Spacer />

          <UI.ListItem
            body={
              <>
                <UI.Text size={17}>Deals and Promotions</UI.Text>
                <UI.Text note>Daily deals, promotions and flash sales</UI.Text>
              </>
            }
            right={
              <UI.Switch
                value={promotions}
                onChange={() => setPromotions(!promotions)}
              />
            }
          />

          <UI.Spacer />

          <UI.ListItem
            body={
              <>
                <UI.Text size={17}>Rewards</UI.Text>
                <UI.Text note>Gifts, rewards, and coupons</UI.Text>
              </>
            }
            right={
              <UI.Switch
                value={rewards}
                onChange={() => setRewards(!rewards)}
              />
            }
          />

          <UI.Spacer />
        </View>
      </UI.Layout>
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

export default connect(mapStateToProps, {setEmailSettings})(
  EmailSettingsScreen,
);
