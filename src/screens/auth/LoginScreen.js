import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { SIGNIN } from '../../apollo/mutations';
import { validateEmail } from '../../utils';
import {
  skipAuthentication,
  setStorage,
} from '../../redux/actions/AuthActions';
import * as UI from '../../components/common';
import { info, primaryColor, danger } from '../../components/common/variables';

const LoginScreen = ({ setStorage, skipAuthentication, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const [signin, { loading, data, error }] = useMutation(SIGNIN, {
    variables: {
      email,
      password,
    },
  });

  const handleSignin = () => {
    setErrors({});

    if (!validateEmail(email)) {
      setIsLoading(false);
      return setErrors({ email: 'Invalid email address!' });
    }
    if (!password) {
      setIsLoading(false);
      return setErrors({ password: 'Password cannot be empty!' });
    }

    return signin({
      variables: {
        email,
        password,
      },
    });
  };

  const setData = async (token, user) => {
    await AsyncStorage.setItem('@myports/token', token);
    await AsyncStorage.setItem('@myports/user', JSON.stringify(user));
    setStorage(user, token);
  };

  if (data) {
    const { token, user } = data.signin;
    setData(token, user);
  }

  return (
    <>
      <UI.Loading show={loading} />
      <UI.Layout>
        <View style={styles.header}>
          <UI.Clickable onClick={() => skipAuthentication()}>
            <UI.Icon name="md-close" />
          </UI.Clickable>
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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

            <UI.Spacer medium />

            {error ? (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <UI.Spacer />
                <UI.Icon
                  size={20}
                  name="ios-close-circle-outline"
                  color={danger}
                />
                <UI.Spacer size={3} />
                <UI.Text color={danger}>Email or passsword Incorrect</UI.Text>
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
    justifyContent: 'space-between',
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

export default connect(null, {
  skipAuthentication,
  setStorage,
})(LoginScreen);
