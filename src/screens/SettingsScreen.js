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
} from '../components/common';
import Header from '../components/Header';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {primaryColor, grayColor, info} from '../components/common/variables';

const SettingsScreen = ({navigation}) => {
  const [hideHeader, setHideHeader] = useState(false);
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
        hideHeader={hideHeader}
        title="Privacy and Settings"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.openDrawer()}>
            <Icon name="ios-menu" color="#fff" />
          </TouchableOpacity>
        }
      />
      <Layout
        onScrollDown={() => setHideHeader(false)}
        onScrollUp={() => setHideHeader(true)}
        itemToFloat={1}>
        <View style={styles.container}>
          <Text color={primaryColor} style={styles.title}>
            Account
          </Text>

          <ListItem
            onClick={() => navigation.navigate('Account')}
            body={<Text size={17}>Manage My Account</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
            left={<Icon color={info} name="ios-person" />}
          />
          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>Privacy and Safety</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
            left={<Icon color={info} type="Feather" name="shield" />}
          />
          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>My Balance</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
            left={<Icon color={info} name="ios-card" />}
          />

          <Spacer medium />

          <Text color={primaryColor} style={styles.title}>
            Preferences
          </Text>
          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>Support</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />
          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>Help</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />
          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>FAQ</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer medium />

          <Text color={primaryColor} style={styles.title}>
            Support
          </Text>

          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>Support</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />
          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>Help</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />
          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>FAQ</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />
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

export default SettingsScreen;
