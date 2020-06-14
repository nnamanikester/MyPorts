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
import { primaryColor, grayColor } from '../../components/common/variables';
import Header from '../../components/Header';
import { food3 } from '../../assets/images';

const VDConversationScreen = () => {
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
      <Layout></Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default VDConversationScreen;
