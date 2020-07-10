import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Layout, Icon, Text, Clickable} from '../../components/common';
import Header from '../../components/Header';

const PickupPolicyScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Pickup Policy"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Clickable>
        }
      />
      <Layout>
        <View style={styles.container}>
          <Text style={styles.title}> Pickup Policy</Text>
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

export default PickupPolicyScreen;
