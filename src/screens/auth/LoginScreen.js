import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  logInCustomer,
  skipAuthentication,
} from '../../redux/actions/AuthActions';
import {
  Layout,
  Icon,
  Text,
  Button,
  Link,
  TextInput,
  Spacer,
  Clickable,
} from '../../components/common';
import { info } from '../../components/common/variables';

const LoginScreen = ({ logInCustomer, skipAuthentication, navigation }) => {
  return (
    <>
      <Layout>
        <View style={styles.header}>
          <Clickable onClick={() => skipAuthentication()}>
            <Icon name="md-close" />
          </Clickable>
          <Link onClick={() => navigation.navigate('Register')}>Sign Up</Link>
        </View>
        <View style={styles.layout}>
          <View style={styles.pageTitle}>
            <Text h1>Sign In</Text>
            <Text color={info}>
              Signing up or login to see our top picks for you.
            </Text>
          </View>
          <View style={styles.form}>
            <Spacer medium />
            <View style={styles.inputContainer}>
              <Text heading>Email Address</Text>
              <Spacer />
              <TextInput
                keyboardType="email-address"
                placeholder="user@email.com"
                autoFocus
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <Spacer medium />
            <View style={styles.inputContainer}>
              <Text heading>Password</Text>
              <Spacer />
              <TextInput placeholder="******" password />
            </View>
            <Spacer medium />
            <View>
              <Button onClick={() => logInCustomer()}>
                <Text color="#fff">Login</Text>
              </Button>
            </View>
            <Spacer medium />
            <View style={styles.passwordResetContainer}>
              <Link onClick={() => navigation.navigate('PasswordReset')}>
                Forgot Password?
              </Link>
            </View>
          </View>
        </View>
      </Layout>
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
