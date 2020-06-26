import React from 'react';
import * as UI from '../../components/common';
import { View, StyleSheet, Image } from 'react-native';

const ShopSettingsScreen = ({ navigation }) => {
  return (
    <>
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
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
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
export default ShopSettingsScreen;
