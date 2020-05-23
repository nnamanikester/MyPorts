import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  Layout,
  Spacer,
  Text,
  Icon,
  ListItem,
  Avatar,
} from '../components/common';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {female1, female2, female3, male1} from '../assets/images';

const SearchScreen = ({navigation}) => {
  const [hideHeader, setHideHeader] = useState(false);

  return (
    <>
      <Header
        hideHeader={hideHeader}
        title="Search"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" size={25} color="#fff" />
          </TouchableOpacity>
        }
        headerRight={
          <>
            <TouchableOpacity activeOpacity={0.7}>
              <Icon name="shopping-bag" size={22} type="Feather" color="#fff" />
            </TouchableOpacity>
          </>
        }
      />
      <Layout
        onScrollDown={() => setHideHeader(false)}
        onScrollUp={() => setHideHeader(true)}
        itemToFloat={1}>
        <View style={styles.searchBar}>
          <SearchBar placeholder="What are you looking for?" />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

export default SearchScreen;
