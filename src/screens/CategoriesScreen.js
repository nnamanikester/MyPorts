import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Layout,
  Clickable,
  Spacer,
  Icon,
  Row,
  Column,
} from '../components/common';
import Header from '../components/Header';
import Category from '../components/Category';
import { StyleSheet, Image, View } from 'react-native';
import { female1, female2, female3, male1 } from '../assets/images';

const CategoriesScreen = ({ navigation }) => {
  const [hideHeader, setHideHeader] = useState(false);

  return (
    <>
      <Header
        isCart
        title="Categories"
        headerLeft={
          <Clickable onClick={() => navigation.openDrawer()}>
            <Icon name="ios-menu" color="#fff" />
          </Clickable>
        }
        headerRight={
          <>
            <Clickable onClick={() => navigation.navigate('Cart')}>
              <Icon name="shopping-bag" size={22} type="Feather" color="#fff" />
            </Clickable>
            <Spacer medium />
            <Clickable onClick={() => navigation.navigate('Search')}>
              <Icon name="ios-search" color="#fff" />
            </Clickable>
          </>
        }
      />
      <Layout>
        <View style={styles.container}>
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
    paddingHorizontal: 5,
  },
});

export default CategoriesScreen;
