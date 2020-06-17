import React from 'react';
import { View, StyleSheet } from 'react-native';
import { chip, visa, masterCard } from '../assets/icons';
import { info } from './common/variables';
import { Card, Text, Spacer, Avatar } from './common';

const WalletCard = ({ cardNo, name, balance }) => {
  return (
    <Card style={styles.creditCard}>
      <View style={styles.creditCardHeader}>
        <Avatar src={chip} />
        <Avatar src={visa} />
      </View>
      <Spacer medium />
      <View style={styles.creditCardBody}>
        <Text color="#fff" h1>
          {cardNo}
        </Text>
      </View>
      <Spacer medium />
      <View style={styles.creditCardFooter}>
        <View>
          <Text note color={info}>
            Card Name
          </Text>
          <Text color="#fff">{name}</Text>
        </View>
        <View>
          <Text note color={info}>
            Balance
          </Text>
          <Text color="#fff">NGN {balance}</Text>
        </View>
        <View>
          <Avatar medium src={masterCard} />
        </View>
      </View>
      <View>
        <Text size={10} color={info}>
          NB: This card can only be used to make purchases on this platform
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
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

export default WalletCard;
