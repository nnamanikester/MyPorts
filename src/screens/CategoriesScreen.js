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
        hideHeader={hideHeader}
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
      <Layout
        onScrollDown={() => setHideHeader(false)}
        onScrollUp={() => setHideHeader(true)}>
        <View style={styles.container}>
          <Spacer medium />
          <Category title="Women" image={female1} subtitle="346 Items" />
          <Category title="Men" image={female2} subtitle="465 Items" />
          <Category title="Kids" image={female3} subtitle="753 Items" />
          <Category title="Cars" image={male1} subtitle="4387 Items" />
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
