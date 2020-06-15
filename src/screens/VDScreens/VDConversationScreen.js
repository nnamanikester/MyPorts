import React from 'react';
import {
  Text,
  Layout,
  Spacer,
  Clickable,
  Icon,
  Avatar,
} from '../../components/common';
import { View, StyleSheet, Image } from 'react-native';
import {
  primaryColor,
  grayColor,
  info,
} from '../../components/common/variables';
import Header from '../../components/Header';
import Message from '../../components/Message';
import { food3 } from '../../assets/images';

const VDConversationScreen = ({ navigation }) => {
  return (
    <>
      <Header
        title="John Kester"
        headerLeft={
          <Clickable
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
            <Spacer />
            <Avatar src={food3} rounded />
          </Clickable>
        }
        headerRight={<View></View>}
      />
      <Layout>
        <View style={styles.container}>
          <Message />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingTop: 10,
  },
});

export default VDConversationScreen;
