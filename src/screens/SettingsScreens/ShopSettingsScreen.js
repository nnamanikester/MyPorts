import React from 'react';
import * as UI from '../../components/common';
import { View, StyleSheet, Image } from 'react-native';
import Header from '../../components/Header';
import { lightColor, info } from '../../components/common/variables';
import { connect } from 'react-redux';

const ShopSettingsScreen = ({ navigation, vendorProfile }) => {
  return (
    <>
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
            {vendorProfile.coverPhoto ? (
              <Image
                style={{ width: '100%', height: '100%' }}
                source={{ uri: vendorProfile.coverPhoto }}
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
              {vendorProfile.logo ? (
                <Image
                  style={styles.logo}
                  source={{ uri: vendorProfile.logo }}
                />
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

            <UI.TextInput placeholder="Enter shop's name" />
          </View>

          <View style={styles.inputContainer}>
            <UI.Text heading>Contact Email Address</UI.Text>

            <UI.Spacer />

            <UI.TextInput
              keyboardType="email-address"
              placeholder="Enter shop's contact email address"
            />
          </View>

          <View style={styles.inputContainer}>
            <UI.Text heading>Contact Phone</UI.Text>

            <UI.Spacer />

            <UI.TextInput
              keyboardType="phone-pad"
              placeholder="Enter shop's contact phone number"
            />
          </View>

          <View style={styles.inputContainer}>
            <UI.Text heading>Description</UI.Text>

            <UI.Spacer />

            <UI.TextInput placeholder="Enter shop's description" />
          </View>

          <View style={styles.inputContainer}>
            <UI.Spacer medium />
            <UI.Button>Save Changes</UI.Button>
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
    vendorProfile: state.vendor.profile,
  };
};

export default connect(mapStateToProps)(ShopSettingsScreen);
