import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Layout, Text, Spacer, Icon, Card} from '../components/common';
import Header from '../components/Header';
import Category from '../components/Category';
import {TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import {female1, female2, female3, male1} from '../assets/images';

const CategoriesScreen = ({navigation}) => {
  const [hideHeader, setHideHeader] = useState(false);

  return (
    <>
      <Header
        isCart
        title="Categories"
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
              onPress={() => navigation.navigate('Cart')}
              activeOpacity={0.7}>
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
      <Layout>
        <View style={styles.container}>
          <Spacer medium />
          <Category
            onClick={() => navigation.navigate('ProductsByCategory')}
            title="Women"
            image={female1}
            subtitle="346 Items"
          />
          <Category
            onClick={() => navigation.navigate('ProductsByCategory')}
            title="Men"
            image={female2}
            subtitle="465 Items"
          />
          <Category
            onClick={() => navigation.navigate('ProductsByCategory')}
            title="Kids"
            image={female3}
            subtitle="753 Items"
          />
          <Category
            onClick={() => navigation.navigate('ProductsByCategory')}
            title="Cars"
            image={male1}
            subtitle="4387 Items"
          />
          <Spacer size={50} />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default CategoriesScreen;
