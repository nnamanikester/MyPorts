import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Layout,
  Icon,
  ListItem,
  Text,
  Link,
  Spacer,
} from '../../components/common';
import Header from '../../components/Header';
import {primaryColor, grayColor, info} from '../../components/common/variables';

const ManageAddressesScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Manage Wallets"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </TouchableOpacity>
        }
        headerRight={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('AddAddress')}>
            <Icon name="md-add" color="#fff" />
          </TouchableOpacity>
        }
      />
      <Layout>
        <View style={styles.container}></View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});

export default ManageAddressesScreen;