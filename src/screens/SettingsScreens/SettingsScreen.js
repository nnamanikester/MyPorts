import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  Layout,
  Modal,
  Text,
  Icon,
  Spacer,
  ListItem,
  Button,
  Row,
} from '../../components/common';
import Header from '../../components/Header';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {primaryColor, info} from '../../components/common/variables';
import {logUserOut} from '../../redux/actions/AuthActions';

const SettingsScreen = ({navigation, logUserOut}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal show={showModal}>
        <Text heading>Do you agree with the terms and conditions?</Text>
        <Spacer size={20} />
        <Row>
          <Button onClick={() => setShowModal(false)} size="small" type="ghost">
            No
          </Button>
          <Spacer />
          <Button onClick={() => setShowModal(false)} size="small">
            <Text color="#fff">Yes</Text>
          </Button>
        </Row>
      </Modal>
      <Header
        title="Privacy and Settings"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.openDrawer()}>
            <Icon name="ios-menu" color="#fff" />
          </TouchableOpacity>
        }
      />
      <Layout>
        <View style={styles.container}>
          <Text color={primaryColor} style={styles.title}>
            Account
          </Text>

          <ListItem
            onClick={() => navigation.navigate('AccountSettings')}
            body={<Text size={17}>Account Settings</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>Notification Settings</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>Email Settings</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>Manage Addresses</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>Manage Payments</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer medium />

          <Text color={primaryColor} style={styles.title}>
            Support
          </Text>
          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>Legal and Terms</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>Help</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>FAQ</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer medium />

          <Text color={primaryColor} style={styles.title}>
            Preferences
          </Text>
          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>Data Control</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => logUserOut()}
            body={<Text size={17}>Logout</Text>}
            right={<Icon size={20} color={info} name="ios-power" />}
          />

          <Spacer large />
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
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
});

export default connect(null, {logUserOut})(SettingsScreen);
