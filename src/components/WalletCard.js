import React from 'react';
import {View, StyleSheet} from 'react-native';
import {chip, logo} from '../assets/icons';
import {grayColor, primaryColor} from './common/variables';
import {Card, Text, Spacer, Avatar} from './common';

const WalletCard = ({cardNo, name, balance}) => {
  return (
    <Card style={styles.creditCard}>
      <View style={styles.creditCardHeader}>
        <Avatar src={chip} />
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
          <Text note color={grayColor}>
            Card Name
          </Text>
          <Text bold color="#fff">
            {name}
          </Text>
        </View>
        <View>
          <Text note color={grayColor}>
            Balance
          </Text>
          <Text bold color="#fff">
            {balance}
          </Text>
        </View>
        <View>
          <Avatar medium src={logo} />
        </View>
      </View>
      <View>
        <Text size={10} color={grayColor}>
          NB: This card can only be used to make purchases on this platform
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  creditCard: {
    backgroundColor: primaryColor,
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
