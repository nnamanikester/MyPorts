import React from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import * as UI from '../../components/common';
import {connect} from 'react-redux';
import {useMutation} from '@apollo/react-hooks';
import {UPDATE_NOTIFICATION_SETTINGS} from '../../apollo/mutations';
import ScreenHeaderWithoutRightIcon from '../../components/ScreenHeaderWithoutRightIcons';
import {setNotificationSettings} from '../../redux/actions/AuthActions';
import {primaryColor} from '../../components/common/variables';

const NotificationSettingsScreen = ({
  navigation,
  user,
  offline,
  setNotificationSettings,
}) => {
  const {
    customer: {notificationSetting},
  } = user;

  const [orders, setOrders] = React.useState(notificationSetting.orders);
  const [promotions, setPromotions] = React.useState(
    notificationSetting.promotions,
  );
  const [rewards, setRewards] = React.useState(notificationSetting.rewards);
  const [reminders, setReminders] = React.useState(
    notificationSetting.reminders,
  );
  const [inStock, setInStock] = React.useState(notificationSetting.inStock);
  const [newProducts, setNewProducts] = React.useState(
    notificationSetting.newProducts,
  );

  const [updateNotification] = useMutation(UPDATE_NOTIFICATION_SETTINGS, {
    variables: {
      id: notificationSetting.id,
      orders,
      promotions,
      rewards,
      reminders,
      inStock,
      newProducts,
    },
  });

  React.useMemo(() => {
    if (!offline) {
      updateNotification()
        .then((res) => {
          setNotificationSettings(res.data.updateNotificationSettings);
          ToastAndroid.show('Settings Updapted!', ToastAndroid.SHORT);
        })
        .catch((e) => {
          setOrders(notificationSetting.orders);
          setPromotions(notificationSetting.promotions);
          setRewards(notificationSetting.rewards);
          ToastAndroid.show('Error updating settings!', ToastAndroid.SHORT);
        });
    }
  }, [orders, promotions, rewards, newProducts, reminders, inStock]);

  return (
    <>
      <ScreenHeaderWithoutRightIcon
        navigation={navigation}
        title="Notification Settings"
        icon="back"
      />

      <UI.Layout>
        <View style={styles.container}>
          <UI.Text color={primaryColor} style={styles.title}>
            Push Notifications
          </UI.Text>

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

          <UI.ListItem
            body={
              <>
                <UI.Text size={17}>System Reminders</UI.Text>
                <UI.Text note>Generals, admins, and updates</UI.Text>
              </>
            }
            right={
              <UI.Switch
                value={reminders}
                onChange={() => setReminders(!reminders)}
              />
            }
          />

          <UI.Spacer />

          <UI.ListItem
            body={
              <>
                <UI.Text size={17}>Back in Stock</UI.Text>
                <UI.Text note>
                  et notified when a product is back in stock
                </UI.Text>
              </>
            }
            right={
              <UI.Switch
                value={inStock}
                onChange={() => setInStock(!inStock)}
              />
            }
          />

          <UI.Spacer />

          <UI.ListItem
            body={
              <>
                <UI.Text size={17}>Favorite Vendor Products</UI.Text>
                <UI.Text note>
                  Notify me of my favorite vendors new products
                </UI.Text>
              </>
            }
            right={
              <UI.Switch
                value={newProducts}
                onChange={() => setNewProducts(!newProducts)}
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

export default connect(mapStateToProps, {setNotificationSettings})(
  NotificationSettingsScreen,
);
