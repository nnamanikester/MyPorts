import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text, Layout, Icon, ListItem, Spacer} from '../../components/common';
import Header from '../../components/Header';
import Avater from '../../components/Avatar';
import {female4} from '../../assets/images';

const CartScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Shopping Bag"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.openDrawer()}>
            <Icon name="ios-menu" color="#fff" />
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
        <ListItem
          left={<Avater src={female4} />}
          body={
            <>
              <Text heading>Leather Bag</Text>
              <Spacer />
              <Text note>Color</Text>
              <Text note>Size</Text>
              <Text note>Quantity</Text>
            </>
          }
          right={<Text>NGN 23,500</Text>}
        />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default CartScreen;
