import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Layout, Text, Icon} from '../components/common';
import Header from '../components/Header';
import {TouchableOpacity} from 'react-native';

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
          <TouchableOpacity activeOpacity={0.7}>
            <Icon name="shopping-bag" size={22} type="Feather" color="#fff" />
          </TouchableOpacity>
        }
      />
      <Layout
        onScrollDown={() => setHideHeader(false)}
        onScrollUp={() => setHideHeader(true)}>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
        <Text size={20}> Categories Screen</Text>
      </Layout>
    </>
  );
};

export default CategoriesScreen;
