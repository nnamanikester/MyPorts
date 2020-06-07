import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout, Icon, Text, Clickable } from '../../components/common';
import Header from '../../components/Header';

const HelpScreen = ({ navigation }) => {
  return (
    <>
      <Header
        title="Help"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Clickable>
        }
      />
      <Layout>
        <View style={styles.container}>
          <Text style={styles.title}> Help</Text>
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

export default HelpScreen;
