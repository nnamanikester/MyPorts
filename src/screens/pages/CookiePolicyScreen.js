import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout, Clickable, Icon, Text } from '../../components/common';
import Header from '../../components/Header';

const CookiePolicyScreen = ({ navigation }) => {
  return (
    <>
      <Header
        title="Cookie Policy"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Clickable>
        }
      />
      <Layout>
        <View style={styles.container}>
          <Text style={styles.title}> Cookie Policy</Text>
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

export default CookiePolicyScreen;
