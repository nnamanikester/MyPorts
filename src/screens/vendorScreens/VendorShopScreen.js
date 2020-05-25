import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Layout, Row, Icon, Spacer, Text} from '../../components/common';
import Header from '../../components/Header';
import {bag1, shoe1, female4, male1} from '../../assets/images';
import {grayColor, info} from '../../components/common/variables';

const VendorShopScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Tiana Rosser"
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
          <Row>
            <View>
              <View style={styles.logoContainer}>
                <Image style={styles.logo} source={male1} />
              </View>
            </View>
            <View style={styles.shopDetails}>
              <Spacer />
              <Text style={styles.shopTitle}> Tiana Rosser</Text>
              <Spacer />
              <Text style={styles.shopDescription}>
                I was part of something special. Eventually, you do.
              </Text>
            </View>
          </Row>
        </View>
        <View style={styles.container}>
          <Text h3>Vendor Shop Screen</Text>
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
    marginHorizontal: 30,
    position: 'relative',
    top: -30,
    elevation: 5,
  },
  shopTitle: {
    fontFamily: 'SFPD-regular',
    fontSize: 20,
  },
  shopDetails: {
    overflow: 'hidden',
    width: '60%',
  },
  shopDescription: {
    color: info,
    paddingLeft: 10,
  },
});

export default VendorShopScreen;
