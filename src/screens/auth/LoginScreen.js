import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { SIGNIN } from '../../apollo/mutations';
import { validateEmail } from '../../utils';
import {
  logInCustomer,
  skipAuthentication,
} from '../../redux/actions/AuthActions';
import * as UI from '../../components/common';
import { info, primaryColor } from '../../components/common/variables';

const LoginScreen = ({ logInCustomer, skipAuthentication, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const [signin, { loading, data, error, called }] = useMutation(SIGNIN, {
    variables: {
      email,
      password,
    },
  });

  const handleSignin = () => {
    if (!validateEmail(email))
      return setErrors({ email: 'Invalid email address!' });
    if (!password) return setErrors({ password: 'Password cannot be empty!' });
    return signin({
      variables: {
        email,
        password,
      },
    });
  };

  if (data) {
    AsyncStorage.setItem('@myports/token', data.signin.token);
  }

  if (error) setErrors({ message: error.message });

  return (
    <>
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

              <UI.TextInput
                placeholder="******"
                password
                autoCapitalize="none"
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
            </View>

            <UI.Spacer medium />

            <View>
              <UI.Button
                type={loading ? 'disabled' : ''}
                onClick={() => handleSignin()}>
                <UI.Spinner area={30} tint={primaryColor} show={loading} />
                {loading ? null : <UI.Text color="#fff">Login</UI.Text>}
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

export default connect(null, { logInCustomer, skipAuthentication })(
  LoginScreen,
);
