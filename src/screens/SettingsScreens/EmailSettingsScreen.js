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
import Header from '../../components/Header';

const EmailSettingsScreen = ({navigation}) => {
  const [value, setValue] = useState(false);

  return (
    <>
      <Header
        title="Email Settngs"
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

export default EmailSettingsScreen;
