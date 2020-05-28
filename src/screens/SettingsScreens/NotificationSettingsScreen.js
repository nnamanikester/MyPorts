import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Layout,
  Text,
  Switch,
  Icon,
  Spacer,
  ListItem,
} from '../../components/common';
import {primaryColor, info} from '../../components/common/variables';
import Header from '../../components/Header';

const NotificationSettingsScreen = ({navigation}) => {
  const [value, setValue] = useState(false);

  return (
    <>
      <Header
        title="Notification Settngs"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </TouchableOpacity>
        }
      />
      <Layout>
        <View style={styles.container}>
          <Text color={primaryColor} style={styles.title}>
            Push Notifications
          </Text>

          <ListItem
            body={
              <>
                <Text size={17}>Your Orders</Text>
                <Text note>Notify me of the status of my orders</Text>
              </>
            }
            right={<Switch value={value} onChange={() => setValue(!value)} />}
          />

          <Spacer />

          <ListItem
            body={
              <>
                <Text size={17}>Deals and Promotions</Text>
                <Text note>Daily deals, promotions and flash sales</Text>
              </>
            }
            right={<Switch value={value} onChange={() => setValue(!value)} />}
          />

          <Spacer />

          <ListItem
            body={
              <>
                <Text size={17}>Rewards</Text>
                <Text note>Gifts, rewards, and coupons</Text>
              </>
            }
            right={<Switch value={value} onChange={() => setValue(!value)} />}
          />

          <Spacer />

          <ListItem
            body={
              <>
                <Text size={17}>System Reminders</Text>
                <Text note>Generals, admins, and updates</Text>
              </>
            }
            right={<Switch value={value} onChange={() => setValue(!value)} />}
          />

          <Spacer />

          <ListItem
            body={
              <>
                <Text size={17}>Back in Stock</Text>
                <Text note>et notified when a product is back in stock</Text>
              </>
            }
            right={<Switch value={value} onChange={() => setValue(!value)} />}
          />

          <Spacer />

          <ListItem
            body={
              <>
                <Text size={17}>Favorite Vendor Products</Text>
                <Text note>Notify me of my favorite vendors new products</Text>
              </>
            }
            right={<Switch value={value} onChange={() => setValue(!value)} />}
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

export default NotificationSettingsScreen;
