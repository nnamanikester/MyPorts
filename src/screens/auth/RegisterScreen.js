import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  skipAuthentication,
  logInCustomer,
  logInVendor,
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
import { info, primaryColor } from '../../components/common/variables';

const RegisterScreen = ({
  skipAuthentication,
  navigation,
  logInCustomer,
  logInVendor,
}) => {
  return (
    <>
      <Layout>
        <View style={styles.header}>
          <Clickable onClick={() => skipAuthentication()}>
            <Icon name="md-close" />
          </Clickable>
          <Link onClick={() => navigation.navigate('Login')}>Sign In</Link>
        </View>
        <View style={styles.layout}>
          <View style={styles.pageTitle}>
            <Text h1>Create An Account</Text>
            <Text color={info}>Get started by creating an account with us</Text>
          </View>
          <View style={styles.form}>
            <Spacer medium />
            <View style={styles.inputContainer}>
              <Text heading>Username</Text>
              <Spacer />
              <TextInput autoFocus placeholder="Johndoe" />
            </View>
            <Spacer medium />
            <View style={styles.inputContainer}>
              <Text heading>Email Address</Text>
              <Spacer />
              <TextInput
                keyboardType="email-address"
                placeholder="user@email.com"
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
                <Text color="#fff">Register</Text>
              </Button>
              <Spacer />
              <Button type="ghost" onClick={() => logInVendor()}>
                <Text color={primaryColor}>Register as a vendor</Text>
              </Button>
            </View>
            <Spacer large />
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
