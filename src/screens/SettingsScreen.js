import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {Logout} from '../redux/actions/AuthActions';

const SettingsScreen = ({Logout}) => {
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button title="Logout" onPress={() => Logout()} />
    </View>
  );
};

export default connect(null, {Logout})(SettingsScreen);
