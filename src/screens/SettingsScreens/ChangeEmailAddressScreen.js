import React from 'react';
import {
  Layout,
  Button,
  ListItem,
  Icon,
  Text,
  Spacer,
  Row,
} from '../../components/common';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {info} from '../../components/common/variables';

const ChangeEmailAddressScreen = ({navigation, logUserOut}) => {
  return (
    <>
      <Header
        title="Change Email Address"
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
          <Text h1>Change Email Address</Text>
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

export default ChangeEmailAddressScreen;
