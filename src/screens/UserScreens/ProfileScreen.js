import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
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
  Button,
  Clickable,
  TopTab,
} from '../../components/common';
import { primaryColor, lightColor } from '../../components/common/variables';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import { female4 } from '../../assets/images';
import UserComments from './ProfileTabs/UserComments';
import UserReviews from './ProfileTabs/UserReviews';

const ProfileScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header
        isCart
        title="Profile"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
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
        <Spacer medium />

        <View style={styles.container}>
          <View style={styles.profilePhoto}>
            <Avatar size={100} rounded src={female4} />
            <Text heading>John Kester</Text>
            <Link onClick={() => navigation.navigate('UpdateProfile')}>
              Edit Profile
            </Link>
          </View>

          <Spacer medium />

          <Row
            style={{
              justifyContent: 'center',
              flex: 1,
            }}>
            <Column style={styles.column} size="4">
              <Clickable
                onClick={() => navigation.navigate('SavedItems')}
                style={{ alignItems: 'center' }}>
                <Icon color={primaryColor} size={30} name="ios-bookmark" />
                <Text>300</Text>
              </Clickable>
            </Column>

            <Column style={styles.column} size="4">
              <View style={{ alignItems: 'center' }}>
                <Icon color={primaryColor} size={30} name="ios-card" />
                <Text>NGN 1,200</Text>
              </View>
            </Column>

            <Column style={styles.column} size="4">
              <Clickable
                onClick={() => navigation.navigate('Orders')}
                style={{ alignItems: 'center' }}>
                <Icon color={primaryColor} size={30} name="ios-time" />
                <Text>12</Text>
              </Clickable>
            </Column>
          </Row>

          <Spacer />
        </View>

        <TopTab
          screens={[
            { name: 'Reviews', component: UserReviews },
            { name: 'Comments', component: UserComments },
          ]}
        />

        <Spacer large />
        <Spacer large />
        <Spacer large />
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
  },
});

export default ProfileScreen;
