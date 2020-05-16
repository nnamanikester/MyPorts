import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {logUserIn} from '../../redux/actions/AuthActions';

const LoginScreen = ({logUserIn}) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={() => logUserIn()} />
    </View>
  );
};

export default connect(null, {logUserIn})(LoginScreen);
