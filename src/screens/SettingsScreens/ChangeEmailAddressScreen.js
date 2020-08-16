import React, {useState, useEffect} from 'react';
import * as UI from '../../components/common';
import {View, StyleSheet, Alert} from 'react-native';
import {connect} from 'react-redux';
import {useMutation} from '@apollo/react-hooks';
import {validateEmail} from '../../utils';
import {danger} from '../../components/common/variables';
import {UPDATE_USER_EMAIL} from '../../apollo/mutations';
import {setStorage} from '../../redux/actions/AuthActions';
import AsyncStorage from '@react-native-community/async-storage';
import ScreenHeaderWithoutRightIcon from '../../components/ScreenHeaderWithoutRightIcons';
import {TOKEN_STORAGE, USER_STORAGE} from '../../constants';

const ChangeEmailAddressScreen = ({navigation, offline, user, setStorage}) => {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');

  const [updateUserEmail, {loading, error: updateError}] = useMutation(
    UPDATE_USER_EMAIL,
  );

  useEffect(() => {
    if (updateError && updateError.graphQLErrors) {
      Alert.alert('Error', updateError.graphQLErrors[0].message);
    }
  }, [updateError]);

  // Handle the update email validations and processes.
  const handleUpdateEmail = () => {
    setErrors({});

    // Validate email format
    if (!validateEmail(email)) {
      return setErrors({...errors, email: 'Invalid email address!'});
    }

    // Check if confirm email is not null
    if (!confirmEmail) {
      return setErrors({
        ...errors,
        confirmEmail: 'Please confirm email address',
      });
    }

    // Check if confirm email matches email.
    if (!checkEmailMatch(confirmEmail)) {
      return setErrors({...errors, emailMatch: 'Emails do not match!'});
    }

    // Update email.
    if (!offline) {
      updateUserEmail({variables: {email, password}})
        .then(async (res) => {
          const token = await AsyncStorage.getItem(TOKEN_STORAGE);
          const user = await AsyncStorage.setItem(
            USER_STORAGE,
            JSON.stringify(res.data.updateUserEmail),
          );
          setStorage(user, token);
          setSuccess(true);
        })
        .catch((err) => console.log(err));
    } else {
      Alert.alert(
        'Error',
        'Cannot update email!. \nPlease check if you are connected to the internet.',
      );
    }
  };

  // Called onChangeText of confirmEmail textinput.
  const checkEmailMatch = (value) => {
    setErrors({});
    setConfirmEmail(value);
    if (email !== confirmEmail) {
      setErrors({...errors, emailMatch: 'Emails do not match!'});
      return false;
    }
    return true;
  };

  return (
    <>
      <UI.Loading show={loading} />
      <ScreenHeaderWithoutRightIcon
        navigation={navigation}
        title="Change Email Address"
        icon="back"
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
              value={email}
              onChangeText={(value) => setEmail(value)}
              autoFocus
              placeholder="Enter email address"
            />
          </View>

          <UI.Spacer medium />

          <View style={styles.inputContainer}>
            <UI.Text heading>Confirm Email Address</UI.Text>

            <UI.Spacer />

            {errors.confirmEmail ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
      {success && (
        <UI.Toast
          message={
            'Email updated successfully! \nPlease check your email inbox for confirmation!'
          }
          timeout={5000}
          onTimeout={() => setSuccess(false)}
        />
      )}
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

export default connect(mapStateToProps, {setStorage})(ChangeEmailAddressScreen);
