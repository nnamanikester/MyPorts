import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Layout,
  Icon,
  ListItem,
  Text,
  Link,
  Spacer,
} from '../../components/common';
import Header from '../../components/Header';
import {primaryColor, grayColor, info} from '../../components/common/variables';

const ManageAddressesScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Manage Addresses"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </TouchableOpacity>
        }
        headerRight={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('AddAddress')}>
            <Icon name="md-add" color="#fff" />
          </TouchableOpacity>
        }
      />
      <Layout>
        <View style={styles.container}>
          <ListItem
            left={<Icon name="ios-pin" color={info} />}
            body={
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text heading>John Kester</Text>
                  <Link>
                    <Icon name="ios-flag" color={primaryColor} size={16} />
                    {'  '}
                    Default
                  </Link>
                </View>
                <Text>
                  Suit 13 Romchi plaza, oneday road, Awkunanaw, Enugu, Enugu
                  State.
                </Text>
                <Text>Nigeria</Text>
                <Text>400252</Text>
              </>
            }
          />
          <ListItem
            onClick={() => navigation.navigate('EditAddress')}
            left={<Icon name="ios-pin" color={info} />}
            body={
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text heading>John Kester</Text>
                </View>
                <Text>
                  Suit 13 Romchi plaza, oneday road, Awkunanaw, Enugu, Enugu
                  State.
                </Text>
                <Text>Nigeria</Text>
                <Text>400252</Text>
              </>
            }
          />
          <ListItem
            onClick={() => navigation.navigate('EditAddress')}
            left={<Icon name="ios-pin" color={info} />}
            body={
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text heading>John Kester</Text>
                </View>
                <Text>
                  Suit 13 Romchi plaza, oneday road, Awkunanaw, Enugu, Enugu
                  State.
                </Text>
                <Text>Nigeria</Text>
                <Text>400252</Text>
              </>
            }
          />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});

export default ManageAddressesScreen;
