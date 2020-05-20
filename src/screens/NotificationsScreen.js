import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity} from 'react-native';
import {Layout, Icon, Text} from '../components/common';
import Header from '../components/Header';

const NotificationsScreen = ({navigation}) => {
  const [hideHeader, setHideHeader] = useState(false);
  return (
    <>
      <Header
        hideHeader={hideHeader}
        title="Notifications"
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
        onScrollUp={() => setHideHeader(true)}
        itemToFloat={1}>
        <Text size={20}>Notifications Screen</Text>
      </Layout>
    </>
  );
};

export default NotificationsScreen;
