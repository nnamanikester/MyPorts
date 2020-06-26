import React from 'react';
import * as UI from '../../../components/common';
import { View, StyleSheet, Image } from 'react-native';
import {
  info,
  lightColor,
  primaryColor,
} from '../../../components/common/variables';
import { connect } from 'react-redux';

const VDShopSettingsScreen = ({ vendorProfile, navigation }) => {
  return (
    <>
      <UI.Layout>
        <View style={styles.container}>
          <UI.ListItem
            onClick={() => navigation.navigate('AccountSettings')}
            body={<UI.Text size={17}>Account Settings</UI.Text>}
            right={<UI.Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <UI.Spacer />

          <UI.ListItem
            onClick={() => navigation.navigate('ShopSettings')}
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
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    vendorProfile: state.vendor.profile,
  };
};

export default connect(mapStateToProps)(VDShopSettingsScreen);
