import React from 'react';
import {ToastAndroid} from 'react-native';
import * as UI from '../../components/common';
import {connect} from 'react-redux';
import PaystackWebView from 'react-native-paystack-webview';
import {primaryColor} from '../../components/common/variables';
import {PAYSTACK_PUBLIC_KEY, PAYSTACK_SECRETE_KEY} from '../../constants';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {useMutation} from '@apollo/react-hooks';
import {FUND_WALLET} from '../../apollo/mutations';
import {setWallet} from '../../redux/actions/WalletActions';

const FundWalletScreen = ({
  navigation,
  offline,
  customer,
  route: {params},
  user,
  setWallet,
}) => {
  const [fundWallet, {loading}] = useMutation(FUND_WALLET);

  return (
    <>
      <UI.Loading show={loading} />
      <UI.Layout>
        <PaystackWebView
          paystackKey={PAYSTACK_PUBLIC_KEY}
          paystackSecretKey={PAYSTACK_SECRETE_KEY}
          amount={parseInt(params.amount)}
          billingEmail={user.email}
          billingMobile={customer.phone}
          billingName={`${customer.firstName} ${customer.lastName}`}
          ActivityIndicatorColor={primaryColor}
          onCancel={(e) => {
            ToastAndroid.show(
              'Payment Failed! Please try again later',
              ToastAndroid.LONG,
            );
            navigation.goBack();
          }}
          onSuccess={(e) => {
            fundWallet({
              variables: {
                amount: parseFloat(params.amount),
                reference: e.data.reference,
              },
            })
              .then((res) => {
                setWallet(res.data.fundWallet);
                ToastAndroid.show(
                  'Wallet funding successful!',
                  ToastAndroid.LONG,
                );
                navigation.goBack();
              })
              .catch((e) => {
                ToastAndroid.show(
                  'Unable to verify payment. Please contact support',
                  ToastAndroid.LONG,
                );
              });
          }}
          autoStart
          refNumber={uuidv4()}
        />
      </UI.Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
    customer: state.customer.profile,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, {setWallet})(FundWalletScreen);
