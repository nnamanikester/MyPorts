import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Layout, Icon, Text, ListItem, Spacer} from '../components/common';
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
        <View style={styles.container}>
          <Text style={styles.title}>Offers</Text>
          <Spacer medium />
          <ListItem
            right={<Text note>2 minutes ago</Text>}
            body={
              <>
                <Text heading>McDonald’s</Text>
                <Text>Your order has been shipped into your address</Text>
              </>
            }
            left={
              <Image
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 50,
                }}
                source={require('../assets/images/Img-Male-08.png')}
              />
            }
          />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
});

export default NotificationsScreen;
