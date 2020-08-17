import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useMutation} from '@apollo/react-hooks';
import {connect} from 'react-redux';
import {skipAuthentication, setStorage} from '../../redux/actions/AuthActions';
import * as UI from '../../components/common';
import {info, danger} from '../../components/common/variables';
import {SIGNUP} from '../../apollo/mutations';
import {validateEmail} from '../../utils';
import {TOKEN_STORAGE, USER_STORAGE} from '../../constants';
import AsyncStorage from '@react-native-community/async-storage';

const RegisterScreen = ({skipAuthentication, navigation, setStorage}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [signup] = useMutation(SIGNUP);

  // Handles Sognup and form validations
  const handleSignup = () => {
    setErrors({});
    setLoading(true);

    if (!username) {
      return setErrors({username: 'Username is required!'});
    }
    if (username.length < 3) {
      return setErrors({
        username: 'Username cannot be less than 3 characters!',
      });
    }
    if (!validateEmail(email)) {
      return setErrors({email: 'Invalid email address!'});
    }
    if (!password) {
      return setErrors({password: 'Password is required'});
    }

    return signup({
      variables: {
        username,
        email,
        password,
      },
    })
      .then(async (res) => {
        const {token, user} = res.data.signup;

        await AsyncStorage.setItem(TOKEN_STORAGE, token);
        await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));

        setStorage(user, token);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErrors({graphQL: err.graphQLErrors, network: err.networkError});
      });
  };

  return (
    <>
      <UI.Loading show={loading} />
      <UI.Layout>
        <View style={styles.header}>
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

              {errors.username ? (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <UI.Spacer />
                  <UI.Icon
                    size={20}
                    name="ios-close-circle-outline"
                    color={danger}
                  />
                  <UI.Spacer size={3} />
                  <UI.Text color={danger}>{errors.username}</UI.Text>
                  <UI.Spacer />
                </View>
              ) : null}

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
                autoCapitalize="none"
                placeholder="******"
                password
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
            </View>

            <UI.Spacer medium />

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

            <View>
              <UI.Button onClick={() => handleSignup()}>
                <UI.Text color="#fff">Register</UI.Text>
              </UI.Button>
            </View>

            <UI.Spacer large />
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
  form: {},
  pageTitle: {
    marginBottom: 30,
  },
});

export default connect(null, {
  setStorage,
  skipAuthentication,
})(RegisterScreen);
