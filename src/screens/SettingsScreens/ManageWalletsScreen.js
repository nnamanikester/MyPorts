import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Layout,
  Icon,
  Clickable,
  Button,
  Text,
  Spacer,
} from '../../components/common';
import Header from '../../components/Header';
import WalletCard from '../../components/WalletCard';

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
      />
      <Layout>
        <View style={styles.container}>
          <WalletCard
            cardNo={'5683   8747   8475'}
            name="Tiana Rosser"
            balance="32,500"
          />
          <Spacer />
          <Button>
            <Text color="#fff">Fund Wallet</Text>
          </Button>
        </View>
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
