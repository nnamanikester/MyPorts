import React, {useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import * as UI from '../../components/common';
import {View, StyleSheet, ToastAndroid, Alert} from 'react-native';
import Avatar from '../../components/Avatar';
import {profilePhoto} from '../../assets/images';
import {connect} from 'react-redux';
import {checkNetworkStatus} from '../../redux/actions/NetworkActions';
import {setCustomerProfile} from '../../redux/actions/CustomerActions';
import {useMutation} from '@apollo/react-hooks';
import ScreenHeaderWithoutRightIcon from '../../components/ScreenHeaderWithoutRightIcons';
import {UPDATE_CUSTOMER} from '../../apollo/mutations';
import {imagePickerOptions, UPLOAD_URL} from '../../constants';
import axios from 'axios';

const days = [
  {label: '', value: ''},
  {label: '1', value: 1},
  {label: '2', value: 2},
  {label: '3', value: 3},
  {label: '4', value: 4},
  {label: '5', value: 5},
  {label: '6', value: 6},
  {label: '7', value: 7},
  {label: '8', value: 8},
  {label: '9', value: 9},
  {label: '10', value: 10},
  {label: '11', value: 11},
  {label: '12', value: 12},
  {label: '13', value: 13},
  {label: '14', value: 14},
  {label: '15', value: 15},
  {label: '16', value: 16},
  {label: '17', value: 17},
  {label: '18', value: 18},
  {label: '19', value: 19},
  {label: '20', value: 20},
  {label: '21', value: 21},
  {label: '22', value: 22},
  {label: '23', value: 23},
  {label: '24', value: 24},
  {label: '25', value: 25},
  {label: '26', value: 26},
  {label: '27', value: 27},
  {label: '28', value: 28},
  {label: '29', value: 29},
  {label: '30', value: 30},
  {label: '31', value: 31},
];
const months = [
  {label: '', value: ''},
  {label: 'January', value: 1},
  {label: 'February', value: 2},
  {label: 'March', value: 3},
  {label: 'April', value: 4},
  {label: 'May', value: 5},
  {label: 'June', value: 6},
  {label: 'July', value: 7},
  {label: 'August', value: 8},
  {label: 'September', value: 9},
  {label: 'Octobre', value: 10},
  {label: 'November', value: 11},
  {label: 'December', value: 12},
];

const genders = [
  {label: '', value: ''},
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
];

const UpdateProfileScreen = ({
  navigation,
  customer,
  offline,
  checkNetworkStatus,
  setCustomerProfile,
}) => {
  const [firstName, setFirstName] = useState(customer.firstName);
  const [lastName, setLastName] = useState(customer.lastName);
  const [phone, setPhone] = useState(customer.phone);
  const [birthMonth, setBirthMonth] = useState(customer.birthMonth);
  const [birthDay, setBirthDay] = useState(customer.birthDay);
  const [gender, setGender] = useState(customer.gender);
  const [photo, setPhoto] = useState(customer.photo);
  const [loading, setLoading] = useState(false);
  console.log(customer);

  const [updateCustomer, {loading: updateLoading}] = useMutation(
    UPDATE_CUSTOMER,
  );

  const handleCustomerUpdate = () => {
    checkNetworkStatus();
    if (!offline) {
      updateCustomer({
        variables: {
          id: customer.id,
          firstName,
          lastName,
          phone,
          birthMonth,
          birthDay,
          gender,
          photo,
        },
      })
        .then((res) => {
          setCustomerProfile(res.data.updateCustomer);
          ToastAndroid.show(
            'Profile updated successfully!',
            ToastAndroid.SHORT,
          );
        })
        .catch(() => {
          ToastAndroid.show('Unable to update profile!', ToastAndroid.SHORT);
        });
    }
  };

  const handleImageUpload = () => {
    ImagePicker.showImagePicker(imagePickerOptions, async (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        Alert.alert('Error', `Error: ${response.error}`);
      } else {
        try {
          setLoading(true);
          console.log(response.fileSize);

          if (response.fileSize > 1000000) {
            setLoading(false);
            return Alert.alert('Error', 'Image must not be more than 1MB.');
          }
          const image = `data:${response.type};base64,${response.data}`;
          const res = await axios.post(`${UPLOAD_URL}/upload-image`, {
            image,
          });

          setPhoto(res.data.data);
          setLoading(false);
        } catch (e) {
          Alert.alert('Error', 'Unable to upload image. Please try again.');
          setLoading(false);
        }
      }
    });
  };

  return (
    <>
      <UI.Loading show={loading || updateLoading} />

      <ScreenHeaderWithoutRightIcon
        navigation={navigation}
        title="Update Profile"
        icon="back"
      />

      <UI.Layout>
        <View style={styles.container}>
          <View style={styles.profilePhoto}>
            <Avatar
              size={100}
              rounded
              src={photo ? {uri: photo} : profilePhoto}
            />
            <UI.Link onClick={handleImageUpload}>Upload Photo</UI.Link>
          </View>

          <UI.Spacer large />

          <View style={styles.inputContainer}>
            <UI.Text heading>First Name</UI.Text>
            <UI.Spacer />
            <UI.TextInput
              onChangeText={(value) => setFirstName(value)}
              value={firstName}
              placeholder="Enter first name"
            />
          </View>

          <UI.Spacer medium />

          <View style={styles.inputContainer}>
            <UI.Text heading>Last Name</UI.Text>
            <UI.Spacer />
            <UI.TextInput
              onChangeText={(value) => setLastName(value)}
              value={lastName}
              placeholder="Enter last name"
            />
          </View>

          <UI.Spacer medium />

          <View style={styles.inputContainer}>
            <UI.Text heading>Phone Number</UI.Text>
            <UI.Spacer />
            <UI.TextInput
              onChangeText={(value) => setPhone(value)}
              value={phone}
              placeholder="Enter phone number"
            />
          </View>

          <UI.Spacer medium />

          <View style={styles.inputContainer}>
            <UI.Text heading>Birthday</UI.Text>

            <UI.Spacer />

            <UI.Row style={{justifyContent: 'space-between'}}>
              <UI.Column size="6">
                <UI.Text heading>Month</UI.Text>

                <UI.Spacer />

                <UI.Select
                  style={{width: '95%'}}
                  type="dropdown"
                  data={months}
                  onChange={(value) => setBirthMonth(value)}
                  selected={birthMonth}
                />
              </UI.Column>

              <UI.Column size="6">
                <UI.Text heading>Day</UI.Text>

                <UI.Spacer />
                <UI.Select
                  onChange={(value) => setBirthDay(value)}
                  selected={birthDay}
                  type="dropdown"
                  data={days}
                />
              </UI.Column>
            </UI.Row>
          </View>

          <UI.Spacer medium />

          <View style={styles.inputContainer}>
            <UI.Text heading>Gender</UI.Text>
            <UI.Spacer />
            <UI.Select
              onChange={(value) => setGender(value)}
              selected={gender}
              type="dropdown"
              data={genders}
            />
          </View>

          <UI.Spacer large />

          <UI.Button onClick={() => handleCustomerUpdate()}>
            <UI.Text color="#fff">Save Changes</UI.Text>
          </UI.Button>

          <UI.Spacer large />
        </View>
      </UI.Layout>
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

const mapStateToProps = (state) => {
  return {
    customer: state.customer.profile,
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps, {
  checkNetworkStatus,
  setCustomerProfile,
})(UpdateProfileScreen);
