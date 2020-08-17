import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {useMutation} from '@apollo/react-hooks';
import {SIGNIN} from '../../apollo/mutations';
import {validateEmail} from '../../utils';
import {skipAuthentication, setStorage} from '../../redux/actions/AuthActions';
import {checkNetworkStatus} from '../../redux/actions/NetworkActions';
import * as UI from '../../components/common';
import NetworkErrorIndicator from '../../components/NetworkErrorIndicator';
import {info, danger} from '../../components/common/variables';
import {TOKEN_STORAGE, USER_STORAGE} from '../../constants';

const LoginScreen = ({
  setStorage,
  checkNetworkStatus,
  skipAuthentication,
  navigation,
  offline,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const [signin, {loading, data}] = useMutation(SIGNIN, {
    errorPolicy: 'ignore',
  });

  useEffect(() => {
    checkNetworkStatus();
  });

  // A function called when the loin button is clicked
  const handleSignin = () => {
    setErrors({});
    checkNetworkStatus();

    if (!validateEmail(email)) {
      return setErrors({email: 'Invalid email address!'});
    }

    if (!password) {
      return setErrors({password: 'Password cannot be empty!'});
    }

    if (offline) {
      return;
    }

    return signin({
      variables: {
        email,
        password,
      },
    }).catch((err) => {
      setErrors({graphQL: err.graphQLErrors, network: err.networkError});
    });
  };

  // Setting user and token to async storage
  const setData = async (token, user) => {
    await AsyncStorage.setItem(TOKEN_STORAGE, token);
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
    setStorage(user, token);
  };

  // Checking if data is returned after signin and setting the data
  if (data) {
    const {token, user} = data.signin;
    setData(token, user);
  }

  return (
    <>
      <NetworkErrorIndicator
        onRetry={() => checkNetworkStatus()}
        show={offline}
      />
      <UI.Loading show={loading} />
      <UI.Layout>
        <View style={styles.header}>
          <UI.Link onClick={() => navigation.navigate('Register')}>
            Sign Up
          </UI.Link>
        </View>

        <View style={styles.layout}>
          <View style={styles.pageTitle}>
            <UI.Text h1>Sign In</UI.Text>

            <UI.Text color={info}>
              Signing up or login to see our top picks for you.
            </UI.Text>
          </View>

          <View style={styles.form}>
            <UI.Spacer medium />

            <View style={styles.inputContainer}>
              <UI.Text heading>Email Address</UI.Text>

              <UI.Spacer />

              {errors.email ? (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <UI.Spacer />
                  <UI.Icon
                    size={20}
                    name="ios-close-circle-outline"
                    color={danger}
                  />
                  <UI.Spacer size={3} />
                  <UI.Text color={danger}>{errors.email}</UI.Text>
                  <UI.Spacer />
                </View>
              ) : null}

              <UI.TextInput
                keyboardType="email-address"
                placeholder="user@email.com"
                autoFocus
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
            </View>

            <UI.Spacer medium />

            <View style={styles.inputContainer}>
              <UI.Text heading>Password</UI.Text>

              <UI.Spacer />

              {errors.password ? (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <UI.Spacer />
                  <UI.Icon
                    size={20}
                    name="ios-close-circle-outline"
                    color={danger}
                  />
                  <UI.Spacer size={3} />
                  <UI.Text color={danger}>{errors.password}</UI.Text>
                  <UI.Spacer />
                </View>
              ) : null}

              <UI.TextInput
                placeholder="******"
                password
                autoCapitalize="none"
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
            </View>

            <UI.Spacer />

            {errors.graphQL ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <UI.Spacer />
                <UI.Icon
                  size={20}
                  name="ios-close-circle-outline"
                  color={danger}
                />
                <UI.Spacer size={3} />
                <UI.Text color={danger}>{errors.graphQL[0].message}</UI.Text>
                <UI.Spacer />
              </View>
            ) : null}

            <UI.Spacer />
            <View>
              <UI.Button onClick={() => handleSignin()}>
                <UI.Text color="#fff">Login</UI.Text>
              </UI.Button>
            </View>

            <UI.Spacer medium />

            <View style={styles.passwordResetContainer}>
              <UI.Link onClick={() => navigation.navigate('PasswordReset')}>
                Forgot Password?
              </UI.Link>
            </View>
          </View>
        </View>
      </UI.Layout>

      {errors.network && (
        <UI.Toast
          message={
            'Network Error: Check your network connection and try again!'
          }
          onTimeout={() => setErrors({...errors, network: null})}
        />
      )}
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
  skipAuthentication,
  setStorage,
  checkNetworkStatus,
})(LoginScreen);
