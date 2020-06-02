import React from 'react';
import {
  Layout,
  Button,
  ListItem,
  Icon,
  Text,
  Spacer,
  Row,
  TextInput,
} from '../../components/common';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {info} from '../../components/common/variables';

const ChangeEmailAddressScreen = ({navigation, logUserOut}) => {
  return (
    <>
      <Header
        title="Change Email Address"
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
          <Text heading>Use this form to change your email address.</Text>
          <Text note>
            You will need to confirm your new address in an email we will send
            you.
          </Text>

          <Spacer large />

          <View style={styles.inputContainer}>
            <Text heading>Current Email Address</Text>
            <Spacer />
            <TextInput type="disabled" value="Nnamanikester@gmail.com" />
          </View>

          <Spacer medium />

          <View style={styles.inputContainer}>
            <Text heading>New Email Address</Text>
            <Spacer />
            <TextInput placeholder="Enter email address" />
          </View>

          <Spacer medium />

          <View style={styles.inputContainer}>
            <Text heading>Confirm Email Address</Text>
            <Spacer />
            <TextInput placeholder="Confirm new email address" />
          </View>

          <Spacer large />

          <Button>
            <Text color="#fff">Save Changes</Text>
          </Button>
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

export default ChangeEmailAddressScreen;
