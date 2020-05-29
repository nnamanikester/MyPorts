import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Layout, Icon, ListItem} from '../../components/common';
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
      />
      <Layout>
        <View style={styles.container}></View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});

export default AddAddressScreen;
