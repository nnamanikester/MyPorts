import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Text,
  Layout,
  Icon,
  ListItem,
  Spacer,
  TextInput,
  Row,
  Button,
  Divider,
} from '../../components/common';
import Header from '../../components/Header';
import Avater from '../../components/Avatar';
import {female4, female1, female2} from '../../assets/images';
import {info, primaryColor} from '../../components/common/variables';

const CheckoutScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Checkout"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="md-close" color="#fff" />
          </TouchableOpacity>
        }
        headerRight={
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
              activeOpacity={0.7}>
              <Icon name="ios-search" color="#fff" />
            </TouchableOpacity>
          </>
        }
      />
      <Layout>
        <Text>Checkout Screen</Text>
      </Layout>
    </>
  );
};

export default CheckoutScreen;
