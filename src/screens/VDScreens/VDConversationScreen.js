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
          <Message message="Hello" time="12:45pm" sent right />
          <Message message="What's up?" time="12:46pm" sent />
          <Message
            message="I'm fine. I wanted to ask if you can do me a favor."
            time="12:47pm"
            sent
            right
          />
          <Message
            message="Ok dear. Say it, I'm all ears."
            time="12:48pm"
            sent
          />
          <Message
            message="Alright thanks. Please, I need 2k urgently... Please!!! it's really holding me on my neck right now."
            time="12:49pm"
            sent
            right
          />
          <Message message="Ok bye!" time="12:50pm" sent />
          <Message message="Hello!" time="12:51pm" right />
          <Message message="Are you there?" time="12:52pm" right />
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
