import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import WalletCard from '../../components/WalletCard';

const ManageAddressesScreen = ({ navigation }) => {
  return (
    <>
      <Header
        title="Manage Wallets"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Clickable>
        }
      />
      <UI.Layout>
        <View style={styles.container}>
          <WalletCard
            cardNo={'5683   8747   8475'}
            name="Tiana Rosser"
            balance="32,500"
          />
          <UI.Spacer />
          <UI.Button>
            <UI.Text color="#fff">Fund Wallet</UI.Text>
          </UI.Button>
        </View>
      </UI.Layout>
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
