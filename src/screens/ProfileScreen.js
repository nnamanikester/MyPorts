import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Layout, Loading} from '../components/common';
import {primaryColor} from '../components/common/variables';

const ProfileScreen = () => {
  return (
    <>
      <Layout>
        <Text>Profile Screen</Text>
      </Layout>
      <Loading show />
    </>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
