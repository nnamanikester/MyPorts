import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {logUserOut} from '../redux/actions/AuthActions';

const SettingsScreen = ({logUserOut}) => {
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button title="Logout" onPress={() => logUserOut()} />
    </View>
  );
};

export default connect(null, {logUserOut})(SettingsScreen);
