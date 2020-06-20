import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useMutation } from '@apollo/react-hooks';
import { connect } from 'react-redux';
import {
  skipAuthentication,
  logInCustomer,
  logInVendor,
} from '../../redux/actions/AuthActions';
import * as UI from '../../components/common';
import { info, primaryColor } from '../../components/common/variables';
import { SIGNUP } from '../../apollo/mutations';

const RegisterScreen = ({ skipAuthentication, navigation, logInCustomer }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signup, { loading, data, error }] = useMutation(SIGNUP, {
    variables: {
      username,
      email,
      password,
    },
  });

  const handleSignup = () => {};

  return (
    <>
      <UI.Layout>
        <View style={styles.header}>
          <UI.Clickable onClick={() => skipAuthentication()}>
            <UI.Icon name="md-close" />
          </UI.Clickable>
          <UI.Link onClick={() => navigation.navigate('Login')}>
            Sign In
          </UI.Link>
        </View>

        <View style={styles.layout}>
          <View style={styles.pageTitle}>
            <UI.Text h1>Create An Account</UI.Text>

            <UI.Text color={info}>
              Get started by creating an account with us
            </UI.Text>
          </View>

          <View style={styles.form}>
            <UI.Spacer medium />

            <View style={styles.inputContainer}>
              <UI.Text heading>Username</UI.Text>

              <UI.Spacer />

              <UI.TextInput
                autoCapitalize="none"
                autoFocus
                placeholder="Johndoe"
                value={username}
                onChangeText={(value) => setUsername(value)}
              />
            </View>

            <UI.Spacer medium />

            <View style={styles.inputContainer}>
              <UI.Text heading>Email Address</UI.Text>

              <UI.Spacer />

              <UI.TextInput
                keyboardType="email-address"
                placeholder="user@email.com"
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
                autoCapitalize="none"
                placeholder="******"
                password
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
            </View>

            <UI.Spacer medium />

            <View>
              <UI.Button onClick={() => logInCustomer()}>
                <UI.Text color="#fff">Register</UI.Text>
              </UI.Button>
            </View>

            <UI.Spacer large />
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
  form: {},
  pageTitle: {
    marginBottom: 30,
  },
});

export default connect(null, {
  logInVendor,
  logInCustomer,
  skipAuthentication,
})(RegisterScreen);
