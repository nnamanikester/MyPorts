import React, { useEffect, useState } from 'react';
import * as UI from '../../components/common';
import { View, StyleSheet, Image } from 'react-native';
import Header from '../../components/Header';
import { lightColor, info } from '../../components/common/variables';
import { connect } from 'react-redux';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { VENDOR_PROFILE } from '../../apollo/queries';
import { UPDATE_VENDOR_PROFILE } from '../../apollo/mutations';
import { setVendorProfile } from '../../redux/actions/VendorActions';
import { validateEmail } from '../../utils';

const ShopSettingsScreen = ({
  navigation,
  profile,
  setVendorProfile,
  offline,
}) => {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [description, setDescription] = useState(profile.description);

  const [vendorProfile, { loading, data, error }] = useLazyQuery(
    VENDOR_PROFILE,
  );
  const [updateVendorProfle, { loading: updateLoading }] = useMutation(
    UPDATE_VENDOR_PROFILE,
  );

  const handleUpdateProfile = () => {
    setSuccess(false);
    if (!name) return setError({ name: 'Shop name cannot be blank!' });
    if (!validateEmail(email))
      return setErrors({ email: 'Invalid email address!' });
    if (!phone)
      return setErrors({ phone: 'Please provide a contact phone number!' });

    if (!offline) {
      updateVendorProfle({
        variables: {
          id: profile.id,
          name,
          email,
          phone,
          description,
        },
      })
        .then((res) => {
          setVendorProfile(res.data.updateVendorProfile);
          setSuccess(true);
        })
        .catch((err) => {
          alert('An error occured while trying to update shop details!');
        });
    } else {
      alert("Cannot update profile, please check if you're connected");
    }
  };

  useEffect(() => {
    if (!offline) {
      if (!data && !error) vendorProfile();
      if (data) {
        setVendorProfile(data.vendorProfile);
      }
      if (error) {
        alert('An error occured trying to load shop details!');
      }
    } else {
      alert("Please check if you're connected to the internet!");
    }
  }, [data, error]);

  return (
    <>
      <UI.Loading show={loading || updateLoading} />
      <Header
        title="Shop Settings"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Clickable>
        }
        headerRight={
          <UI.Option
            icon={<UI.Icon color="#fff" name="md-more" />}
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
        <View style={{ flex: 1 }}>
          <UI.Spacer size={2} />
          <UI.Clickable onClick={() => {}} style={styles.coverImage}>
            {profile.coverPhoto ? (
              <Image
                style={{ width: '100%', height: '100%' }}
                source={{ uri: profile.coverPhoto }}
              />
            ) : (
              <>
                <UI.Icon color={lightColor} name="ios-add" size={100} />
                <UI.Text color={info}>Cover Photo</UI.Text>
              </>
            )}
          </UI.Clickable>

          <View>
            <UI.Clickable onClick={() => {}} style={styles.logoContainer}>
              {profile.logo ? (
                <Image style={styles.logo} source={{ uri: profile.logo }} />
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

            <UI.TextInput
              onChangeText={(value) => setName(value)}
              value={name}
              placeholder="Enter shop's name"
            />
          </View>

          <View style={styles.inputContainer}>
            <UI.Text heading>Contact Email Address</UI.Text>

            <UI.Spacer />

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

            <UI.TextInput
              onChangeText={(value) => setPhone(value)}
              value={phone}
              keyboardType="phone-pad"
              placeholder="Enter shop's contact phone number"
            />
          </View>

          <View style={styles.inputContainer}>
            <UI.Text heading>Description</UI.Text>

            <UI.Spacer />

            <UI.TextInput
              onChangeText={(value) => setDescription(value)}
              value={description}
              placeholder="Enter shop's description"
            />
          </View>

          <View style={styles.inputContainer}>
            <UI.Spacer medium />
            <UI.Button onClick={() => handleUpdateProfile()}>
              Save Changes
            </UI.Button>
          </View>
        </View>

        <UI.Spacer large />
        <UI.Spacer large />
      </UI.Layout>
      {success && (
        <UI.Toast
          timeout={3000}
          onTimeout={() => {
            setSuccess(false);
          }}
          message="Profile updated successfully!"
        />
      )}
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

export default connect(mapStateToProps, { setVendorProfile })(
  ShopSettingsScreen,
);