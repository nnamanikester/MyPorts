import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Layout, Icon} from '../../components/common';
import Header from '../../components/Header';

const AddAddressScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Add New Address"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </TouchableOpacity>
        }
        headerRight={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('AddAddress')}>
            <Icon name="md-add" color="#fff" />
          </TouchableOpacity>
        }
      />
      <Layout></Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default AddAddressScreen;
