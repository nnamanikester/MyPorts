import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {Login} from '../../redux/actions/AuthActions';

const LoginScreen = ({Login}) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={() => Login()} />
    </View>
  );
};

export default connect(null, {Login})(LoginScreen);
