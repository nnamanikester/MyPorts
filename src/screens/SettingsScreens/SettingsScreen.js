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
import ScreenHeaderWithoutRightIcon from '../../components/ScreenHeaderWithoutRightIcons';
import {StyleSheet, View, Linking} from 'react-native';
import {primaryColor, info} from '../../components/common/variables';
import {logUserOut} from '../../redux/actions/AuthActions';

const SettingsScreen = ({navigation}) => {
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

      <ScreenHeaderWithoutRightIcon
        navigation={navigation}
        title="Privacy and Settings"
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
            onClick={() => navigation.navigate('NotificationSettings')}
            body={<Text size={17}>Notification Settings</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('EmailSettings')}
            body={<Text size={17}>Email Settings</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('ManageAddresses')}
            body={<Text size={17}>Manage Addresses</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('ManageWallets')}
            body={<Text size={17}>Manage Wallet</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer medium />

          <Text color={primaryColor} style={styles.title}>
            About
          </Text>

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('About')}
            body={<Text size={17}>About Us</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('LegalAndTerms')}
            body={<Text size={17}>Legal and Terms</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('FAQ')}
            body={<Text size={17}>FAQ</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer medium />

          <Text color={primaryColor} style={styles.title}>
            Help & feedback
          </Text>

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('ContactSupport')}
            body={<Text size={17}>Contact Support</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('ContactSupport')}
            body={
              <>
                <Text size={17}>Have an Idea?</Text>
                <Text note>Suggest a feature</Text>
              </>
            }
            right={
              <Icon
                size={20}
                type="FontAwesome"
                color={info}
                name="external-link"
              />
            }
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('ContactSupport')}
            body={
              <>
                <Text size={17}>Enjoying our app?</Text>
                <Text note>Rate it</Text>
              </>
            }
            right={
              <Icon
                size={20}
                type="FontAwesome"
                color={info}
                name="external-link"
              />
            }
          />

          <Spacer medium />

          <Text color={primaryColor} style={styles.title}>
            Connect
          </Text>

          <ListItem
            onClick={() => Linking.openURL('https://twitter.com/destreetboard')}
            body={<Text size={17}>Follow us on Twitter</Text>}
            right={
              <Icon
                size={20}
                type="FontAwesome"
                color={info}
                name="external-link"
              />
            }
          />

          <Spacer />

          <ListItem
            onClick={() =>
              Linking.openURL('https://facebook.com/destreetboard')
            }
            body={<Text size={17}>Like us on Facebook</Text>}
            right={
              <Icon
                size={20}
                type="FontAwesome"
                color={info}
                name="external-link"
              />
            }
          />

          <Spacer />

          <ListItem
            onClick={() =>
              Linking.openURL('https://instagram.com/destreetboard')
            }
            body={<Text size={17}>Follow us on Instagram</Text>}
            right={
              <Icon
                size={20}
                type="FontAwesome"
                color={info}
                name="external-link"
              />
            }
          />

          <Spacer />

          <Spacer medium />

          <View>
            <Text size={20}>Version</Text>
            <Text note>1.0.0 Beta</Text>
          </View>

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
