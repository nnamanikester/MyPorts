import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Layout, Icon, Spacer, Text} from '../../components/common';
import Header from '../../components/Header';
import {bag1, shoe1, female4, male1} from '../../assets/images';
import {grayColor} from '../../components/common/variables';

const VendorShopScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Shop and Smile"
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
            <Spacer medium />
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
              activeOpacity={0.7}>
              <Icon name="ios-search" color="#fff" />
            </TouchableOpacity>
          </>
        }
      />
      <Layout style={styles.layout}>
        <View style={styles.header}>
          <View>
            <Image style={styles.coverImage} source={female4} />
          </View>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={male1} />
          </View>
        </View>
        <View style={styles.container}>
          <Text>Vendor Shop Screen</Text>
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 200,
  },
  layout: {
    paddingHorizontal: 0,
  },
  container: {
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: grayColor,
  },
  logoContainer: {
    width: 80,
    height: 80,
    marginLeft: 30,
    position: 'relative',
    top: -30,
    elevation: 5,
  },
});

export default VendorShopScreen;
