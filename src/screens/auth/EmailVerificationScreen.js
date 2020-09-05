import React from 'react';
import {View, StyleSheet, Alert, ToastAndroid, Keyboard} from 'react-native';
import * as UI from '../../components/common';
import {
  info,
  primaryColor,
  danger,
  success as successColor,
  textColor,
} from '../../components/common/variables';
import {connect} from 'react-redux';
import {useMutation} from '@apollo/react-hooks';
import {VERIFY_EMAIL, RESEND_CODE} from '../../apollo/mutations';
import {setStorage} from '../../redux/actions/AuthActions';
import {TOKEN_STORAGE, USER_STORAGE} from '../../constants';
import AsyncStorage from '@react-native-community/async-storage';

const EmailVerificationScreen = ({navigation, setStorage, offline}) => {
  const [code, setCode] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState({});

  const [verifyEmail, {loading}] = useMutation(VERIFY_EMAIL);
  const [resendCode, {loading: resendLoading}] = useMutation(RESEND_CODE);

  const handleSubmitCode = (value) => {
    Keyboard.dismiss();
    setError(false);
    verifyEmail({variables: {code: value}})
      .then(async (res) => {
        setSuccess(true);
        const user = res.data.verifyEmail;
        const token = await AsyncStorage.getItem(TOKEN_STORAGE);
        await AsyncStorage.setItem(
          USER_STORAGE,
          JSON.stringify({...user, status: 1}),
        );
        setStorage(user, token);
        setData({user, token});
      })
      .catch((e) => {
        setError(true);
      });
  };

  React.useMemo(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
        setStorage({}, data.token);
      }, 3000);
    }
  }, [success]);

  return (
    <>
      <UI.Alert
        showBg
        success
        header="Email Verified Successfully!"
        message="You will need to login again to continue"
        show={success}
      />

      <UI.Loading show={loading || resendLoading} />

      <UI.Layout>
        <View style={styles.header} />
        <View style={styles.layout}>
          <View style={styles.pageTitle}>
            <UI.Text h1>Email Verification</UI.Text>
            <UI.Text color={info}>
              We have sent a six unique code to the email you used for
              registration. Please Input the code below to confirm your email.
              Make sure you check your spam folder.
            </UI.Text>
          </View>
          <View style={styles.form}>
            <UI.Spacer medium />

            <View style={styles.inputContainer}>
              <UI.Text heading>Verification Code</UI.Text>

              <UI.Spacer medium />

              <UI.PinInput
                // autoFocus={false}
                value={code}
                onChangeText={(code) => {
                  setError(false);
                  setCode(code);
                }}
                numbersOnly={false}
                keyboardType="default"
                onFinish={handleSubmitCode}
                length={6}
                cellStyle={{
                  borderColor: error
                    ? danger
                    : success
                    ? successColor
                    : textColor,
                }}
              />

              <UI.Spacer large />

              <UI.Button
                onClick={() => {
                  resendCode()
                    .then(() => {
                      ToastAndroid.show(
                        'Email sent successfully! Check you inbox',
                        ToastAndroid.LONG,
                      );
                    })
                    .catch(() => {
                      Alert.alert('Message', 'Email not sent. Try again');
                    });
                }}
                type="outline">
                <UI.Text color={primaryColor}>Resend Code</UI.Text>
              </UI.Button>
            </View>
          </View>
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  inputContainer: {},
  passwordResetContainer: {
    alignItems: 'center',
  },
  form: {},
  pageTitle: {
    marginBottom: 50,
  },
});

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps, {
  setStorage,
})(EmailVerificationScreen);
