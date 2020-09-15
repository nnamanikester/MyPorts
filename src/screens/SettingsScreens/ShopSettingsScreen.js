import React from 'react';
import ImagePicker from 'react-native-image-picker';
import * as UI from '../../components/common';
import {View, StyleSheet, Image, ToastAndroid, Alert} from 'react-native';
import Header from '../../components/Header';
import {lightColor, info, danger} from '../../components/common/variables';
import {connect} from 'react-redux';
import {useMutation} from '@apollo/react-hooks';
import {UPDATE_VENDOR_PROFILE} from '../../apollo/mutations';
import {setVendorProfile} from '../../redux/actions/VendorActions';
import {validateEmail} from '../../utils';
import {imagePickerOptions, UPLOAD_URL} from '../../constants';
import axios from 'axios';

const ShopSettingsScreen = ({
  navigation,
  profile,
  setVendorProfile,
  offline,
}) => {
  const [errors, setErrors] = React.useState({});
  const [name, setName] = React.useState(profile.name);
  const [email, setEmail] = React.useState(profile.email);
  const [phone, setPhone] = React.useState(profile.phone);
  const [location, setLocation] = React.useState(profile.location);
  const [description, setDescription] = React.useState(profile.description);
  const [logo, setLogo] = React.useState(profile.logo);
  const [coverPhoto, setCoverPhoto] = React.useState(profile.coverPhoto);
  const [load, setLoading] = React.useState(false);

  const [updateVendorProfle, {loading}] = useMutation(UPDATE_VENDOR_PROFILE);

  const handleUpdateProfile = () => {
    if (!name) {
      return setErrors({name: 'Shop name cannot be blank!'});
    }
    if (!validateEmail(email)) {
      return setErrors({email: 'Invalid email address!'});
    }
    if (!phone) {
      return setErrors({phone: 'Please provide a contact phone number!'});
    }

    if (!offline) {
      updateVendorProfle({
        variables: {
          id: profile.id,
          name,
          email,
          phone,
          logo,
          coverPhoto,
          location,
          description,
        },
      })
        .then((res) => {
          setVendorProfile(res.data.updateVendorProfile);
          ToastAndroid.show(
            'Profile updated successfully!',
            ToastAndroid.SHORT,
          );
        })
        .catch((err) => {
          ToastAndroid.show(
            'An error occured while trying to update shop details!',
            ToastAndroid.LONG,
          );
          return err;
        });
    } else {
      ToastAndroid.show(
        "Cannot update profile, please check if you're connected",
        ToastAndroid.LONG,
      );
    }
  };

  const handleLogoUpload = () => {
    ImagePicker.showImagePicker(imagePickerOptions, async (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        Alert.alert('Error', `Error: ${response.error}`);
      } else {
        try {
          setLoading(true);
          if (response.fileSize > 1000000) {
            setLoading(false);
            return Alert.alert('Error', 'Image size must be less than 1MB');
          }
          const image = `data:${response.type};base64,${response.data}`;
          const res = await axios.post(`${UPLOAD_URL}/upload-image`, {
            image,
          });

          setLogo(res.data.data);
          setLoading(false);
        } catch (e) {
          Alert.alert('Error', 'Unable to upload image. Please try again.');
          setLoading(false);
        }
      }
    });
  };

  const handleCoverPhotoUpload = () => {
    ImagePicker.showImagePicker(imagePickerOptions, async (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        Alert.alert('Error', `Error: ${response.error}`);
      } else {
        try {
          setLoading(true);
          if (response.fileSize > 1000000) {
            setLoading(false);
            return Alert.alert('Error', 'Image size must be less than 1MB');
          }
          const image = `data:${response.type};base64,${response.data}`;
          const res = await axios.post(`${UPLOAD_URL}/upload-image`, {
            image,
          });

          setCoverPhoto(res.data.data);
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
      <UI.Loading show={loading || load} />
      <Header
        // isCart
        title="Shop Settings"
        headerLeft={
          <UI.Clickable
            style={{flexDirection: 'row'}}
            onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
            <UI.Spacer medium />
            <UI.Spacer />
          </UI.Clickable>
        }
        headerRight={
          <UI.Option
            icon={
              <View style={{flexDirection: 'row'}}>
                <UI.Spacer medium />
                <UI.Icon color="#fff" name="md-more" />
              </View>
            }
            options={[
              {
                label: 'Preview Changes',
                action: () => navigation.navigate('VDShopPreview'),
              },
            ]}
          />
        }
      />
      <UI.Layout>
        <View style={{flex: 1}}>
          <UI.Spacer size={2} />
          <UI.Clickable
            onClick={handleCoverPhotoUpload}
            style={styles.coverImage}>
            {coverPhoto ? (
              <Image
                style={{width: '100%', height: '100%'}}
                source={{uri: coverPhoto}}
              />
            ) : (
              <>
                <UI.Icon color={lightColor} name="ios-add" size={100} />
                <UI.Text color={info}>Cover Photo</UI.Text>
              </>
            )}
          </UI.Clickable>

          <View>
            <UI.Clickable
              onClick={handleLogoUpload}
              style={styles.logoContainer}>
              {logo ? (
                <Image style={styles.logo} source={{uri: logo}} />
              ) : (
                <>
                  <UI.Icon color={lightColor} name="ios-add" size={50} />
                  <UI.Text color={info}>Logo</UI.Text>
                </>
              )}
            </UI.Clickable>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <UI.Text heading> Name</UI.Text>

            <UI.Spacer />

            {errors.name ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <UI.Spacer />
                <UI.Icon
                  size={20}
                  name="ios-close-circle-outline"
                  color={danger}
                />
                <UI.Spacer size={3} />
                <UI.Text color={danger}>{errors.name}</UI.Text>
                <UI.Spacer />
              </View>
            ) : null}

            <UI.TextInput
              onChangeText={(value) => setName(value)}
              value={name}
              placeholder="Enter shop's name"
            />
          </View>

          <View style={styles.inputContainer}>
            <UI.Text heading>Contact Email Address</UI.Text>

            <UI.Spacer />

            {errors.email ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <UI.Spacer />
                <UI.Icon
                  size={20}
                  name="ios-close-circle-outline"
                  color={danger}
                />
                <UI.Spacer size={3} />
                <UI.Text color={danger}>{errors.email}</UI.Text>
                <UI.Spacer />
              </View>
            ) : null}

            <UI.TextInput
              onChangeText={(value) => setEmail(value)}
              value={email}
              keyboardType="email-address"
              placeholder="Enter shop's contact email address"
            />
          </View>

          <View style={styles.inputContainer}>
            <UI.Text heading>Contact Phone</UI.Text>

            <UI.Spacer />

            {errors.phone ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <UI.Spacer />
                <UI.Icon
                  size={20}
                  name="ios-close-circle-outline"
                  color={danger}
                />
                <UI.Spacer size={3} />
                <UI.Text color={danger}>{errors.phone}</UI.Text>
                <UI.Spacer />
              </View>
            ) : null}

            <UI.TextInput
              onChangeText={(value) => setPhone(value)}
              value={phone}
              keyboardType="phone-pad"
              placeholder="Enter shop's contact phone number"
            />
          </View>

          <View style={styles.inputContainer}>
            <UI.Text heading>Location</UI.Text>

            <UI.Spacer />

            <UI.TextInput
              onChangeText={(value) => setLocation(value)}
              value={location}
              placeholder="Enter your shop location"
            />
          </View>

          <View style={styles.inputContainer}>
            <UI.Text heading>Description</UI.Text>

            <UI.Spacer />

            <UI.TextInput
              onChangeText={(value) => setDescription(value)}
              value={description}
              multiline
              maxLength={100}
              placeholder="Enter shop's description"
            />
          </View>

          <View style={styles.inputContainer}>
            <UI.Spacer medium />
            <UI.Button onClick={() => handleUpdateProfile()}>
              <UI.Text color="#fff">Save Changes</UI.Text>
            </UI.Button>
          </View>
        </View>

        <UI.Spacer large />
        <UI.Spacer large />
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  inputContainer: {
    marginBottom: 10,
  },
  coverImage: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: lightColor,
  },
  pageTitle: {
    marginBottom: 30,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  logoContainer: {
    width: 100,
    height: 100,
    marginHorizontal: 30,
    position: 'absolute',
    top: -60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: lightColor,
    borderRadius: 100,
  },
});

const mapStateToProps = (state) => {
  return {
    profile: state.vendor.profile,
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps, {setVendorProfile})(ShopSettingsScreen);
