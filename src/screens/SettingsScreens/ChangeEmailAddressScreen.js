import React, { useState } from 'react';
import * as UI from '../../components/common';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { validateEmail } from '../../utils';
import { danger } from '../../components/common/variables';
import { VALIDATE_EMAIL, VALIDATE_PASSWORD } from '../../apollo/queries';

const ChangeEmailAddressScreen = ({ navigation, offline, user }) => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');

  const [callValidateEmail, { data: emailData }] = useLazyQuery(VALIDATE_EMAIL);
  const [validatePassword, { data: passwordData }] = useLazyQuery(
    VALIDATE_PASSWORD,
  );

  const handleUpdateEmail = () => {
    setErrors({});
    if (!confirmEmail) {
      return setErrors({
        ...errors,
        confirmEmail: 'Please confirm email address',
      });
    }
    if (!checkPassword()) return;
    console.log('Success!');
  };

  const checkPassword = () => {
    setErrors({});

    validatePassword({ variables: { password } });

    if (passwordData && passwordData.validatePassword) {
      return true;
    }

    setErrors({ password: 'Incorrect password!' });

    return false;
  };

  // Called when the email textinput is burred
  const checkEmail = () => {
    setErrors({});

    if (!validateEmail(email)) {
      return setErrors({ ...errors, email: 'Invalid email address!' });
    }

    callValidateEmail({ variables: { email } });

    if (emailData && emailData.validateEmail) {
      return setErrors({ email: 'Email already in use by another user!' });
    }
  };

  // Called onChangeText of confirmEmail textinput.
  const checkEmailMatch = (value) => {
    setErrors({});
    setConfirmEmail(value);
    if (email !== value)
      return setErrors({ ...errors, emailMatch: 'Emails do not match!' });
  };

  return (
    <>
      <Header
        title="Change Email Address"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Clickable>
        }
      />
      <UI.Layout>
        <View style={styles.container}>
          <UI.Text heading>Use this form to change your email address.</UI.Text>
          <UI.Text note>
            You will need to confirm your new address in an email we will send
            you.
          </UI.Text>

          <UI.Spacer large />

          <View style={styles.inputContainer}>
            <UI.Text heading>Current Email Address</UI.Text>
            <UI.Spacer />
            <UI.TextInput type="disabled" value={user.email} />
          </View>

          <UI.Spacer medium />

          <View style={styles.inputContainer}>
            <UI.Text heading>New Email Address</UI.Text>

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
              value={email}
              onChangeText={(value) => setEmail(value)}
              onBlur={() => checkEmail()}
              autoFocus
              placeholder="Enter email address"
            />
          </View>

          <UI.Spacer medium />

          <View style={styles.inputContainer}>
            <UI.Text heading>Confirm Email Address</UI.Text>

            <UI.Spacer />

            {errors.confirmEmail ? (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <UI.Spacer />
                <UI.Icon
                  size={20}
                  name="ios-close-circle-outline"
                  color={danger}
                />
                <UI.Spacer size={3} />
                <UI.Text color={danger}>{errors.confirmEmail}</UI.Text>
                <UI.Spacer />
              </View>
            ) : null}

            {errors.emailMatch ? (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <UI.Spacer />
                <UI.Icon
                  size={20}
                  name="ios-close-circle-outline"
                  color={danger}
                />
                <UI.Spacer size={3} />
                <UI.Text color={danger}>{errors.emailMatch}</UI.Text>
                <UI.Spacer />
              </View>
            ) : null}

            <UI.TextInput
              value={confirmEmail}
              onChangeText={(value) => checkEmailMatch(value)}
              placeholder="Confirm new email address"
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
              value={password}
              onChangeText={(value) => setPassword(value)}
              password
              placeholder="Enter your password"
            />
          </View>

          <UI.Spacer large />

          <UI.Button onClick={() => handleUpdateEmail()}>
            <UI.Text color="#fff">Save Changes</UI.Text>
          </UI.Button>

          <UI.Spacer large />
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
});

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(ChangeEmailAddressScreen);
