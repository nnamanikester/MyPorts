import React, {useState} from 'react';
import {connect} from 'react-redux';
import {logUserOut} from '../../redux/actions/AuthActions';
import {
  Layout,
  Button,
  ListItem,
  Icon,
  Text,
  Spacer,
  Modal,
  Row,
} from '../../components/common';
import Permissions from '../../components/Permissions';
import {View, StyleSheet} from 'react-native';
import ScreenHeaderWithoutRightIcon from '../../components/ScreenHeaderWithoutRightIcons';
import {info} from '../../components/common/variables';

const AccountScreen = ({navigation, logUserOut}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ScreenHeaderWithoutRightIcon
        navigation={navigation}
        title="Account Settings"
        icon="back"
      />

      <Layout>
        <View style={styles.container}>
          <Permissions.Customer>
            <ListItem
              onClick={() => navigation.navigate('UpdateProfile')}
              body={<Text size={17}>Update Profile</Text>}
              right={<Icon size={20} color={info} name="ios-arrow-forward" />}
            />

            <Spacer />
          </Permissions.Customer>

          <ListItem
            onClick={() => navigation.navigate('ChangeEmailAddress')}
            body={<Text size={17}>Change Email Address</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('ChangePassword')}
            body={<Text size={17}>Change Password</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => setShowModal(true)}
            body={<Text size={17}>Deactivate Account</Text>}
          />
        </View>
      </Layout>

      <Modal show={showModal}>
        <Text h2>Are You Sure?</Text>
        <Spacer />
        <Text>Do you really want to deactivate your account?</Text>
        <Spacer size={20} />
        <Row style={{paddingHorizontal: 20}}>
          <Button onClick={() => setShowModal(false)}>
            <Text color="#fff">Yes</Text>
          </Button>
          <Spacer />
          <Button onClick={() => setShowModal(false)} type="ghost">
            No
          </Button>
        </Row>
      </Modal>
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

export default connect(null, {logUserOut})(AccountScreen);
