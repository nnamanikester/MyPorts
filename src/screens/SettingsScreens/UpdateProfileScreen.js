import React from 'react';
import {
  Layout,
  Button,
  Icon,
  Text,
  Spacer,
  Row,
  TextInput,
  Select,
  Column,
  Link,
  Clickable,
} from '../../components/common';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import { female4 } from '../../assets/images';

const days = [
  { label: '', value: '' },
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '10', value: 10 },
  { label: '11', value: 11 },
  { label: '12', value: 12 },
  { label: '13', value: 13 },
  { label: '14', value: 14 },
  { label: '15', value: 15 },
  { label: '16', value: 16 },
  { label: '17', value: 17 },
  { label: '18', value: 18 },
  { label: '19', value: 19 },
  { label: '20', value: 20 },
  { label: '21', value: 21 },
  { label: '22', value: 22 },
  { label: '23', value: 23 },
  { label: '24', value: 24 },
  { label: '25', value: 25 },
  { label: '26', value: 26 },
  { label: '27', value: 27 },
  { label: '28', value: 28 },
  { label: '29', value: 29 },
  { label: '30', value: 30 },
  { label: '31', value: 31 },
];
const months = [
  { label: '', value: '' },
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'Octobre', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 },
];

const gender = [
  { label: '', value: '' },
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];

const UpdateProfileScreen = ({ navigation, logUserOut }) => {
  return (
    <>
      <Header
        title="Update Pofile"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Clickable>
        }
      />
      <Layout>
        <View style={styles.container}>
          <View style={styles.profilePhoto}>
            <Avatar size={100} rounded src={female4} />
            <Link>Upload Photo</Link>
          </View>

          <Spacer large />

          <View style={styles.inputContainer}>
            <Text heading>First Name</Text>
            <Spacer />
            <TextInput placeholder="Enter first name" />
          </View>

          <Spacer medium />

          <View style={styles.inputContainer}>
            <Text heading>Last Name</Text>
            <Spacer />
            <TextInput placeholder="Enter last name" />
          </View>

          <Spacer medium />

          <View style={styles.inputContainer}>
            <Text heading>Phone Number</Text>
            <Spacer />
            <TextInput placeholder="Enter phone number" />
          </View>

          <Spacer medium />

          <View style={styles.inputContainer}>
            <Text heading>Birthday</Text>
            <Spacer />
            <Row style={{ justifyContent: 'space-between' }}>
              <Column size="6">
                <Text heading>Month</Text>
                <Spacer />
                <Select
                  style={{ width: '95%' }}
                  type="dropdown"
                  data={months}
                />
              </Column>
              <Column size="6">
                <Text heading>Day</Text>
                <Spacer />
                <Select type="dropdown" data={days} />
              </Column>
            </Row>
          </View>

          <Spacer medium />

          <View style={styles.inputContainer}>
            <Text heading>Gender</Text>
            <Spacer />
            <Select type="dropdown" data={gender} />
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
  },
  profilePhoto: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UpdateProfileScreen;
