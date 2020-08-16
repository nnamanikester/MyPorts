import React from 'react';
import * as UI from '../../components/common';
import {View, StyleSheet, Alert} from 'react-native';
import {useMutation} from '@apollo/react-hooks';
import {UPDATE_USER_PASSWORD} from '../../apollo/mutations';
import {connect} from 'react-redux';
import ScreenHeaderWithoutRightIcon from '../../components/ScreenHeaderWithoutRightIcons';
import {danger} from '../../components/common/variables';

const ChangePasswordScreen = ({navigation, offline}) => {
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [success, setSuccess] = React.useState(false);

  const [updatePassword, {loading, error}] = useMutation(UPDATE_USER_PASSWORD);

  React.useEffect(() => {
    if (error) {
      Alert.alert('Error', error.graphQLErrors[0].message);
    }
  }, [error]);

  const handleChangePassword = () => {
    if (!oldPassword) {
      return setErrors({oPassword: 'Please enter your old password!'});
    }
    if (!newPassword) {
      return setErrors({nPassword: 'Please enter your new password!'});
    }
    if (!confirmPassword) {
      return setErrors({cPassword: 'Please confirm your new password!'});
    }
    if (!checkPasswordMatch) {
      return setErrors({cPassword: 'Passwords do not match!'});
    }
    if (!offline) {
      updatePassword({variables: {oldPassword, newPassword}}).then((res) => {
        setSuccess(true);
      });
    } else {
      Alert.alert('Error', "Please check if you're connected to the internet!");
    }
  };

  // Check if passwords match
  const checkPasswordMatch = (value) => {
    setConfirmPassword(value);
    setErrors({});
    if (value !== newPassword) {
      setErrors({cPassword: 'Passwords do not match!'});
      return false;
    }
    return true;
  };

  return (
    <>
      <UI.Loading show={loading} />

      <ScreenHeaderWithoutRightIcon
        navigation={navigation}
        title="Change Password"
        icon="back"
      />

      <UI.Layout>
        <View style={styles.container}>
          <UI.Text heading>Use this form to change your password.</UI.Text>
          <UI.Text note>Enter your old password for authorization.</UI.Text>

          <UI.Spacer large />

          <View style={styles.inputContainer}>
            <UI.Text heading>Old Password</UI.Text>

            <UI.Spacer />

            {errors.oPassword ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <UI.Spacer />
                <UI.Icon
                  size={20}
                  name="ios-close-circle-outline"
                  color={danger}
                />
                <UI.Spacer size={3} />
                <UI.Text color={danger}>{errors.oPassword}</UI.Text>
                <UI.Spacer />
              </View>
            ) : null}

            <UI.TextInput
              onChangeText={(value) => setOldPassword(value)}
              value={oldPassword}
              password
              autoFocus
              placeholder="Enter old password"
            />
          </View>

          <UI.Spacer medium />

          <View style={styles.inputContainer}>
            <UI.Text heading>New Password</UI.Text>

            <UI.Spacer />

            {errors.nPassword ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <UI.Spacer />
                <UI.Icon
                  size={20}
                  name="ios-close-circle-outline"
                  color={danger}
                />
                <UI.Spacer size={3} />
                <UI.Text color={danger}>{errors.nPassword}</UI.Text>
                <UI.Spacer />
              </View>
            ) : null}

            <UI.TextInput
              onChangeText={(value) => setNewPassword(value)}
              value={newPassword}
              password
              placeholder="Enter new password"
            />
          </View>

          <UI.Spacer medium />

          <View style={styles.inputContainer}>
            <UI.Text heading>Confirm New Password</UI.Text>

            <UI.Spacer />

            {errors.cPassword ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <UI.Spacer />
                <UI.Icon
                  size={20}
                  name="ios-close-circle-outline"
                  color={danger}
                />
                <UI.Spacer size={3} />
                <UI.Text color={danger}>{errors.cPassword}</UI.Text>
                <UI.Spacer />
              </View>
            ) : null}

            <UI.TextInput
              onChangeText={(value) => checkPasswordMatch(value)}
              value={confirmPassword}
              password
              placeholder="Confirm your new password"
            />
          </View>

          <UI.Spacer large />

          <UI.Button onClick={() => handleChangePassword()}>
            <UI.Text color="#fff">Save Changes</UI.Text>
          </UI.Button>

          <UI.Spacer large />
        </View>
      </UI.Layout>

      {success && (
        <UI.Toast
          message="Password updated successfully!"
          timeout={3000}
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
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps)(ChangePasswordScreen);
