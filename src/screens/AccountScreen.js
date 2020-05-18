import React from 'react';
import {connect} from 'react-redux';
import {logUserOut} from '../redux/actions/AuthActions';
import {Layout, Button, Text, Spacer} from '../components/common';

const AccountScreen = ({navigation, logUserOut}) => {
  return (
    <Layout>
      <Text>Account Screen</Text>
      <Button onClick={() => navigation.navigate('Categories')}>
        <Text style={{color: '#fff'}}>Go Home</Text>
      </Button>
      <Spacer />
      <Button onClick={() => logUserOut()}>
        <Text style={{color: '#fff'}}>Logout</Text>
      </Button>
    </Layout>
  );
};

export default connect(null, {logUserOut})(AccountScreen);
