import React from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {Layout, Text, Spacer, Icon} from '../components/common';
import Header from '../components/Header';
import {female4, bag1} from '../assets/images';

const SingleProductScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Water Proof Watch"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </TouchableOpacity>
        }
        headerRight={
          <>
            <TouchableOpacity activeOpacity={0.7}>
              <Icon name="shopping-bag" size={22} type="Feather" color="#fff" />
            </TouchableOpacity>
            <Spacer />
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
              activeOpacity={0.7}>
              <Icon name="ios-search" color="#fff" />
            </TouchableOpacity>
          </>
        }
      />
      <Layout>
        <View>
          <Image style={styles.featured} source={bag1} />
        </View>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
        <Text size={30}>single Product</Text>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  featured: {
    width: '100%',
    height: 300,
  },
});

export default SingleProductScreen;
