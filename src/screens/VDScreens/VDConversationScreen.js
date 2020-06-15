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
          <Clickable
            activeOpacity={0.95}
            onLongPress={() => alert('long pressed')}
            style={styles.chatBox}>
            <View style={styles.chatLeft}>
              <>
                <Text style={styles.textLeft}>
                  Hello Sir, like I said, i wanted to buy the slippers, but the
                  money seems to bbe very high.
                </Text>
                <Text style={styles.timeLeft}>12:45pm</Text>
              </>
            </View>
          </Clickable>
          <Clickable
            activeOpacity={0.95}
            onLongPress={() => alert('long pressed')}
            style={styles.chatBox}>
            <View style={styles.chatRight}>
              <>
                <Text style={styles.textRight}>
                  I will see what I can do about it. But honestly, it's not
                  within my powers for now.
                </Text>
                <Text style={styles.timeRight}>12:46pm</Text>
              </>
            </View>
          </Clickable>
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
  chatBox: {
    marginBottom: 5,
  },
  chatLeft: {
    backgroundColor: primaryColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    maxWidth: '80%',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  textLeft: {
    fontSize: 14,
    lineHeight: 16,
    color: '#fff',
  },
  chatRight: {
    borderColor: primaryColor,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    maxWidth: '80%',
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  textRight: {
    fontSize: 14,
    lineHeight: 16,
  },
  timeLeft: {
    fontSize: 11,
    color: '#444',
    lineHeight: 11,
    alignSelf: 'flex-end',
    marginTop: 3,
  },
  timeRight: {
    fontSize: 11,
    color: info,
    marginTop: 3,
    lineHeight: 11,
  },
});

export default VDConversationScreen;
