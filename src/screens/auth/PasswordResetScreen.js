import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Layout,
  Text,
  Button,
  Link,
  TextInput,
  Spacer,
} from '../../components/common';
import {info} from '../../components/common/variables';

const PasswordResetScreen = ({navigation}) => {
  return (
    <>
      <Layout>
        <View style={styles.header} />
        <View style={styles.layout}>
          <View style={styles.pageTitle}>
            <Text h1>Password Reset</Text>
            <Text color={info}>
              Enter your email address in the box below. An email address
              containing information on how to reset your password will be sent.
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
            <View>
              <Button>
                <Text color="#fff">Reset</Text>
              </Button>
            </View>
            <Spacer medium />
            <View style={styles.passwordResetContainer}>
              <Link onClick={() => navigation.navigate('Login')}>
                Back to Login
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

export default PasswordResetScreen;
