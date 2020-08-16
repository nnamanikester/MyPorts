import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as UI from '../../components/common';
import WalletCard from '../../components/WalletCard';
import {GET_WALLET} from '../../apollo/queries/wallet';
import {connect} from 'react-redux';
import {useLazyQuery} from '@apollo/react-hooks';
import Skeleton from 'react-native-skeleton-placeholder';
import {formatMoney, formatCardNo} from '../../utils/index';
import ScreenHeaderWithoutRightIcon from '../../components/ScreenHeaderWithoutRightIcons';
import {danger} from '../../components/common/variables';

const ManageWalletsScreen = ({navigation, offline}) => {
  const [getWallet, {loading, data, error}] = useLazyQuery(GET_WALLET);
  const [cardNo, setCardNo] = React.useState('');
  const [name, setName] = React.useState('');
  const [balance, setBalance] = React.useState('');
  const [showFund, setShowFund] = React.useState(false);
  const [amountError, setAmountError] = React.useState(false);
  const [amount, setAmount] = React.useState('');

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
  }, [data, error, offline, getWallet]);

  const handleAmountInput = (value) => {
    setAmountError(false);
    if (value > 0) {
      return setAmount(value);
    }
    setAmount(value);
    return setAmountError(true);
  };

  return (
    <>
      <ScreenHeaderWithoutRightIcon
        navigation={navigation}
        title="Manage Wallet"
        icon="back"
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
            <UI.Button onClick={() => setShowFund(true)}>
              <UI.Text color="#fff">Fund Wallet</UI.Text>
            </UI.Button>
          )}
        </View>
      </UI.Layout>
      <UI.Modal show={showFund}>
        <View style={{alignSelf: 'flex-end'}}>
          <UI.Clickable onClick={() => setShowFund(false)}>
            <UI.Icon size={36} name="md-close" />
          </UI.Clickable>
        </View>

        <UI.Spacer large />

        {amountError && <UI.Text color={danger}>Invalid amount!</UI.Text>}

        <UI.TextInput
          value={amount}
          onChangeText={(value) => handleAmountInput(value)}
          placeholder="Enter Amount"
          keyboardType="number-pad"
        />

        <UI.Spacer />
        <UI.Button
          type={!amount > 0 || amountError ? 'disabled' : ''}
          onClick={() => {
            setShowFund(false);
            navigation.navigate('FundWallet', {amount});
          }}>
          <UI.Text color="#fff">Pay Now</UI.Text>
        </UI.Button>
      </UI.Modal>
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
