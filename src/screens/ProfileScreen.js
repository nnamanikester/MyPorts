import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Text,
  Layout,
  Link,
  Icon,
  Spacer,
  Loading,
  Card,
  Row,
  Column,
  Badge,
} from '../components/common';
import { primaryColor } from '../components/common/variables';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import { female4 } from '../assets/images';

const ProfileScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header
        isCart
        title="Profile"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
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
          <View style={styles.profilePhoto}>
            <Avatar size={100} rounded src={female4} />
            <Link onClick={() => navigation.navigate('UpdateProfile')}>
              Edit Profile
            </Link>
          </View>

          <Spacer large />

          <Card style={{ height: 200 }}>
            <Row
              style={{
                justifyContent: 'space-between',
              }}>
              <Column style={styles.column} size="6">
                <TouchableOpacity activeOpacity={0.7}>
                  <Icon name="ios-search" />
                  <Text note>Saved Items</Text>
                </TouchableOpacity>
              </Column>
              <Column style={styles.column} size="6">
                <TouchableOpacity activeOpacity={0.7}>
                  <Icon name="ios-search" />
                  <Text note>Order History</Text>
                </TouchableOpacity>
              </Column>
              <Column style={styles.column} size="6">
                <TouchableOpacity activeOpacity={0.7}>
                  <Icon name="ios-search" />
                  <Text note>Reviews</Text>
                </TouchableOpacity>
              </Column>
              <Column style={styles.column} size="6">
                <TouchableOpacity activeOpacity={0.7}>
                  <Icon name="ios-search" />
                  <Text note>Comments</Text>
                </TouchableOpacity>
              </Column>
            </Row>
          </Card>
        </View>
      </Layout>
      <Loading show={loading} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  profilePhoto: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
});

export default ProfileScreen;
