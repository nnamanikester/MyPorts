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
  Badge,
  Clickable,
} from '../../components/common';
import { primaryColor, lightColor } from '../../components/common/variables';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import { female4 } from '../../assets/images';

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
        <View style={styles.container}>
          <View style={styles.profilePhoto}>
            <Avatar size={100} rounded src={female4} />
            <Text heading>John Kester</Text>
            <Link onClick={() => navigation.navigate('UpdateProfile')}>
              Edit Profile
            </Link>
          </View>

          <Spacer medium />

          <Card>
            <Row
              style={{
                justifyContent: 'center',
                flex: 1,
              }}>
              <Column style={styles.column} size="3">
                <Clickable style={{ alignItems: 'center' }}>
                  <Icon color={primaryColor} size={40} name="ios-bookmark" />
                  <Text bold>300</Text>
                </Clickable>
              </Column>
              <Column style={styles.column} size="3">
                <Clickable style={{ alignItems: 'center' }}>
                  <Icon color={primaryColor} size={40} name="ios-time" />
                  <Text bold>12</Text>
                </Clickable>
              </Column>
              <Column style={styles.column} size="3">
                <Clickable style={{ alignItems: 'center' }}>
                  <Icon color={primaryColor} size={40} name="ios-star" />
                  <Text bold>33</Text>
                </Clickable>
              </Column>
              <Column style={styles.column} size="3">
                <Clickable style={{ alignItems: 'center' }}>
                  <Icon
                    color={primaryColor}
                    type="FontAwesome"
                    size={40}
                    name="comments"
                  />
                  <Text bold>23</Text>
                </Clickable>
              </Column>
            </Row>
          </Card>
        </View>
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
