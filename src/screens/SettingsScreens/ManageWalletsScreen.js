import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Layout,
  Icon,
  Clickable,
  Card,
  Button,
  Text,
  Spacer,
  Avatar,
} from '../../components/common';
import Header from '../../components/Header';
import { chip, visa, masterCard } from '../../assets/icons';
import { Image } from 'react-native';
import { info } from '../../components/common/variables';

const ManageAddressesScreen = ({ navigation }) => {
  return (
    <>
      <Header
        title="Manage Wallets"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Clickable>
        }
        headerRight={
          <Clickable onClick={() => navigation.navigate('AddAddress')}>
            <Icon name="md-add" color="#fff" />
          </Clickable>
        }
      />
      <Layout>
        <View style={styles.container}>
          <Card style={styles.creditCard}>
            <View style={styles.creditCardHeader}>
              <Avatar src={chip} />
              <Avatar src={visa} />
            </View>
            <Spacer medium />
            <View style={styles.creditCardBody}>
              <Text color="#fff" h1>
                5683{'   '}8747{'   '}8475
              </Text>
            </View>
            <Spacer medium />
            <View style={styles.creditCardFooter}>
              <View>
                <Text note color={info}>
                  Card Name
                </Text>
                <Text color="#fff">Tiana Rosser</Text>
              </View>
              <View>
                <Text note color={info}>
                  Balance
                </Text>
                <Text color="#fff">NGN 32,500</Text>
              </View>
              <View>
                <Avatar medium src={masterCard} />
              </View>
            </View>
            <View>
              <Text size={10} color={info}>
                NB: This card can only be used to make purchases on this
                platform
              </Text>
            </View>
          </Card>
          <Button>
            <Text color="#fff">Fund Wallet</Text>
          </Button>
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
  creditCard: {
    backgroundColor: '#151522',
    padding: 20,
  },
  creditCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  creditCardBody: {
    alignItems: 'center',
  },
  creditCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ManageAddressesScreen;
