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

const ChangePasswordScreen = ({navigation, logUserOut}) => {
  return (
    <>
      <Header
        title="Change Password"
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
          <Text heading>Use this form to change your password.</Text>
          <Text note>Enter your old password for authorization.</Text>

          <Spacer large />

          <View style={styles.inputContainer}>
            <Text heading>Old Password</Text>
            <Spacer />
            <TextInput password autoFocus placeholder="Enter old password" />
          </View>

          <Spacer medium />

          <View style={styles.inputContainer}>
            <Text heading>New Password</Text>
            <Spacer />
            <TextInput password placeholder="Enter new password" />
          </View>

          <Spacer medium />

          <View style={styles.inputContainer}>
            <Text heading>Confirm New Password</Text>
            <Spacer />
            <TextInput password placeholder="Confirm your new password" />
          </View>

          <Spacer large />

          <Button>
            <Text color="#fff">Save Changes</Text>
          </Button>

          <Spacer large />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
});

export default ChangePasswordScreen;
