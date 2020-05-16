import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {logUserOut} from '../redux/actions/AuthActions';

const AccountScreen = ({navigation, logUserOut}) => {
  return (
    <View>
      <Text>Account Screen</Text>
      <Button title="Go " onPress={() => navigation.navigate('Home')} />
      <Button title="Logout" onPress={() => logUserOut()} />
    </View>
  );
};

export default connect(null, {logUserOut})(AccountScreen);
