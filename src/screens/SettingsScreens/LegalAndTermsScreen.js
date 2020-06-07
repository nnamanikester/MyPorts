import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Layout,
  Text,
  Icon,
  Spacer,
  ListItem,
  Clickable,
} from '../../components/common';
import Header from '../../components/Header';
import { StyleSheet, View } from 'react-native';
import { info } from '../../components/common/variables';

const LegalAndTermsScreen = ({ navigation }) => {
  return (
    <>
      <Header
        title="Legal and Terms"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Clickable>
        }
      />
      <Layout>
        <View style={styles.container}>
          <ListItem
            onClick={() => navigation.navigate('TermsOfUse')}
            body={<Text size={17}>Terms of Use</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('PrivacyPolicy')}
            body={<Text size={17}>Privacy Policy</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('CommunityGuidelines')}
            body={<Text size={17}>Community Guideliens</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('CustomerTaxPolicy')}
            body={<Text size={17}>Customer Tax Policy</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('CookiePolicy')}
            body={<Text size={17}>Cookie Policy</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('LawEnforcementPolicy')}
            body={<Text size={17}>Law Enforcement Policy</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('AccessibilityStatement')}
            body={<Text size={17}>Accessibility Statement</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('ReturnPolicy')}
            body={<Text size={17}>Return Policy</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer />

          <ListItem
            onClick={() => navigation.navigate('PickupPolicy')}
            body={<Text size={17}>Pickup Policy</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

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

export default LegalAndTermsScreen;
