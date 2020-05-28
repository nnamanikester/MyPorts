import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Layout, Icon, Text} from '../../components/common';
import Header from '../../components/Header';

const LawEnforcementPolicyScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Law Enforcement Policy"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </TouchableOpacity>
        }
      />
      <Layout>
        <View style={styles.container}>
          <Text style={styles.title}> Law Enforcement Policy</Text>
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
});

export default LawEnforcementPolicyScreen;
