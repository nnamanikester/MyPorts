import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout, Icon, Clickable } from '../../components/common';
import Header from '../../components/Header';

const ManageAddressesScreen = ({ navigation }) => {
  return (
    <>
      <Header
        title="Manage Wallets"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Clickable>
        }
        headerRight={
          <Clickable onClick={() => navigation.navigate('AddAddress')}>
            <Icon name="md-add" color="#fff" />
          </Clickable>
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
