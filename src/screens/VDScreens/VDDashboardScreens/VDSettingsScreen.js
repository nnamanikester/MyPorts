import React from 'react';
import * as UI from '../../../components/common';
import { View, StyleSheet, Image } from 'react-native';
import {
  info,
  lightColor,
  primaryColor,
} from '../../../components/common/variables';
import { connect } from 'react-redux';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const VDShopSettingsScreen = ({ vendorProfile, navigation }) => {
  return (
    <>
      <UI.Layout>
        {/* <View style={{ flex: 1 }}>
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
        </View> */}
        <View style={styles.container}>
          <UI.ListItem
            onClick={() => navigation.navigate('AccountSettings')}
            body={<UI.Text size={17}>Account Settings</UI.Text>}
            right={<UI.Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <UI.Spacer />

          <UI.ListItem
            onClick={() => navigation.navigate('AccountSettings')}
            body={<UI.Text size={17}>Shop Settings</UI.Text>}
            right={<UI.Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <UI.Spacer />

          <UI.ListItem
            onClick={() => navigation.navigate('AccountSettings')}
            body={<UI.Text size={17}>Get Verified</UI.Text>}
            right={<UI.Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <UI.Spacer />

          <UI.ListItem
            onClick={() => navigation.navigate('ManageWallets')}
            body={<UI.Text size={17}>Manage Wallet</UI.Text>}
            right={<UI.Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <UI.Spacer medium />

          <UI.Text color={primaryColor} style={styles.title}>
            About
          </UI.Text>

          <UI.Spacer />

          <UI.ListItem
            onClick={() => navigation.navigate('About')}
            body={<UI.Text size={17}>About Us</UI.Text>}
            right={<UI.Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <UI.Spacer />

          <UI.ListItem
            onClick={() => navigation.navigate('LegalAndTerms')}
            body={<UI.Text size={17}>Legal and Terms</UI.Text>}
            right={<UI.Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <UI.Spacer />

          <UI.ListItem
            onClick={() => navigation.navigate('FAQ')}
            body={<UI.Text size={17}>FAQ</UI.Text>}
            right={<UI.Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <UI.Spacer medium />

          <UI.Text color={primaryColor} style={styles.title}>
            Help & feedback
          </UI.Text>

          <UI.Spacer />

          <UI.ListItem
            onClick={() => navigation.navigate('ContactSupport')}
            body={<UI.Text size={17}>Contact Support</UI.Text>}
            right={<UI.Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <UI.Spacer />

          <UI.ListItem
            onClick={() => navigation.navigate('ContactSupport')}
            body={
              <>
                <UI.Text size={17}>Have an Idea?</UI.Text>
                <UI.Text note>Suggest a feature</UI.Text>
              </>
            }
            right={
              <UI.Icon
                size={20}
                type="FontAwesome"
                color={info}
                name="external-link"
              />
            }
          />

          <UI.Spacer />

          <UI.ListItem
            onClick={() => navigation.navigate('ContactSupport')}
            body={
              <>
                <UI.Text size={17}>Enjoying our app?</UI.Text>
                <UI.Text note>Rate it</UI.Text>
              </>
            }
            right={
              <UI.Icon
                size={20}
                type="FontAwesome"
                color={info}
                name="external-link"
              />
            }
          />

          <UI.Spacer medium />

          <UI.Text color={primaryColor} style={styles.title}>
            Connect
          </UI.Text>

          <UI.ListItem
            onClick={() => {}}
            body={<UI.Text size={17}>Follow us on Twitter</UI.Text>}
            right={
              <UI.Icon
                size={20}
                type="FontAwesome"
                color={info}
                name="external-link"
              />
            }
          />

          <UI.Spacer />

          <UI.ListItem
            onClick={() => {}}
            body={<UI.Text size={17}>Like us on Facebook</UI.Text>}
            right={
              <UI.Icon
                size={20}
                type="FontAwesome"
                color={info}
                name="external-link"
              />
            }
          />

          <UI.Spacer />

          <UI.ListItem
            onClick={() => {}}
            body={<UI.Text size={17}>Follow us on Instagram</UI.Text>}
            right={
              <UI.Icon
                size={20}
                type="FontAwesome"
                color={info}
                name="external-link"
              />
            }
          />

          <UI.Spacer />

          <UI.Spacer medium />

          <View>
            <UI.Text size={20}>Version</UI.Text>
            <UI.Text note>1.0.0 Beta.</UI.Text>
          </View>

          <UI.Spacer large />
          <UI.Spacer large />
          <View style={styles.inputContainer}>
            <UI.TextInput />
          </View>
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
              <SkeletonPlaceholder.Item
                width={60}
                height={60}
                borderRadius={50}
              />
              <SkeletonPlaceholder.Item marginLeft={20}>
                <SkeletonPlaceholder.Item
                  width={120}
                  height={20}
                  borderRadius={4}
                />
                <SkeletonPlaceholder.Item
                  marginTop={6}
                  width={80}
                  height={20}
                  borderRadius={4}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
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

const mapStateToProps = (state) => {
  return {
    vendorProfile: state.vendor.profile,
  };
};

export default connect(mapStateToProps)(VDShopSettingsScreen);
