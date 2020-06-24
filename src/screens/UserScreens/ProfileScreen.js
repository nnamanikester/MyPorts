import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as UI from '../../components/common';
import { primaryColor } from '../../components/common/variables';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import { female4 } from '../../assets/images';
import UserComments from './ProfileTabs/UserComments';
import UserReviews from './ProfileTabs/UserReviews';
import { profilePhoto } from '../../assets/images';
import { connect } from 'react-redux';

const ProfileScreen = ({ navigation, customer }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header
        isCart
        title="Profile"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Clickable>
        }
        headerRight={
          <>
            <UI.Clickable onClick={() => navigation.navigate('Cart')}>
              <UI.Icon
                name="shopping-bag"
                size={22}
                type="Feather"
                color="#fff"
              />
            </UI.Clickable>
            <UI.Spacer medium />
            <UI.Clickable onClick={() => navigation.navigate('Search')}>
              <UI.Icon name="ios-search" color="#fff" />
            </UI.Clickable>
          </>
        }
      />
      <UI.Layout>
        <UI.Spacer medium />

        <View style={styles.container}>
          {/* USER PROFILE PICTURE AND NAME */}
          <View style={styles.profilePhoto}>
            <Avatar
              size={100}
              rounded
              src={customer.photo ? { uri: customer.photo } : profilePhoto}
            />

            <UI.Text heading>John Kester</UI.Text>

            <UI.Link onClick={() => navigation.navigate('UpdateProfile')}>
              Edit Profile
            </UI.Link>
          </View>

          <UI.Spacer medium />

          <UI.Row
            style={{
              justifyContent: 'center',
              flex: 1,
            }}>
            <UI.Column style={styles.column} size="4">
              <UI.Clickable
                onClick={() => navigation.navigate('SavedItems')}
                style={{ alignItems: 'center' }}>
                <UI.Icon color={primaryColor} size={30} name="ios-bookmark" />
                <UI.Text>300</UI.Text>
              </UI.Clickable>
            </UI.Column>

            <UI.Column style={styles.column} size="4">
              <View style={{ alignItems: 'center' }}>
                <UI.Icon color={primaryColor} size={30} name="ios-card" />
                <UI.Text>NGN 1,200</UI.Text>
              </View>
            </UI.Column>

            <UI.Column style={styles.column} size="4">
              <UI.Clickable
                onClick={() => navigation.navigate('Orders')}
                style={{ alignItems: 'center' }}>
                <UI.Icon color={primaryColor} size={30} name="ios-time" />
                <UI.Text>12</UI.Text>
              </UI.Clickable>
            </UI.Column>
          </UI.Row>

          <UI.Spacer />
        </View>

        <UI.TopTab
          screens={[
            { name: 'Reviews', component: UserReviews },
            { name: 'Comments', component: UserComments },
          ]}
        />

        <UI.Spacer large />
        <UI.Spacer large />
        <UI.Spacer large />
      </UI.Layout>
      <UI.Loading show={loading} />
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

const mapStateToProps = (state) => {
  return {
    customer: state.customer.profile,
  };
};

export default connect(mapStateToProps)(ProfileScreen);
