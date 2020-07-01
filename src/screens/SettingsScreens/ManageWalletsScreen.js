import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import WalletCard from '../../components/WalletCard';
import { GET_WALLET } from '../../apollo/queries/wallet';
import { connect } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';
import Skeleton from 'react-native-skeleton-placeholder';
import { formatMoney, formatCardNo } from '../../utils/index';

const ManageWalletsScreen = ({ navigation, offline }) => {
  const [getWallet, { loading, data, error }] = useLazyQuery(GET_WALLET);
  const [cardNo, setCardNo] = React.useState('');
  const [name, setName] = React.useState('');
  const [balance, setBalance] = React.useState('');

  React.useEffect(() => {
    if (!offline) {
      getWallet();
    }
    if (data) {
      setName(data.getWallet.name);
      setCardNo(data.getWallet.cardNo);
      setBalance(data.getWallet.balance);
    }
    if (error) {
      return;
    }
  }, [data, error]);

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
          {loading ? (
            <Skeleton>
              <Skeleton.Item height={200} borderRadius={5} />
            </Skeleton>
          ) : (
            <WalletCard
              cardNo={formatCardNo(cardNo)}
              name={name}
              balance={formatMoney(balance)}
            />
          )}

          <UI.Spacer />

          {loading ? (
            <Skeleton>
              <Skeleton.Item height={50} borderRadius={5} />
            </Skeleton>
          ) : (
            <UI.Button>
              <UI.Text color="#fff">Fund Wallet</UI.Text>
            </UI.Button>
          )}
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

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps)(ManageWalletsScreen);
