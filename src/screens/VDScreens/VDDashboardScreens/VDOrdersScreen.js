import React from 'react';
import {
  Text,
  Layout,
  Icon,
  ListItem,
  Avatar,
  Spacer,
} from '../../../components/common';
import { View, StyleSheet } from 'react-native';
import {
  primaryColor,
  success,
  danger,
  warning,
  info,
} from '../../../components/common/variables';
import { food3 } from '../../../assets/images';

const VDAccountSettingsScreen = ({ navigation }) => {
  return (
    <>
      <Layout>
        <Spacer />
        <ListItem
          marked
          onClick={() => navigation.navigate('VDOrderDetails')}
          left={<Avatar medium rounded src={food3} />}
          body={
            <>
              <Text heading>Order No 9875934734</Text>
              <Text numberOfLines={1} color="" note>
                Enugu, John Kester.
              </Text>
            </>
          }
          right={
            <View style={{ justifyContent: 'center', flex: 1 }}>
              <Text color={success} note style={styles.status}>
                New
              </Text>
            </View>
          }
        />
        <Spacer />
        <ListItem
          onClick={() => navigation.navigate('VDOrderDetails')}
          left={<Avatar medium rounded src={food3} />}
          body={
            <>
              <Text color={info} heading>
                Order No 9875934734
              </Text>
              <Text numberOfLines={1} color="" note>
                Benin, Ben Kennedy.
              </Text>
            </>
          }
          right={
            <View style={{ justifyContent: 'center', flex: 1 }}>
              <Text color={danger} note style={styles.status}>
                Cancelled
              </Text>
            </View>
          }
        />
        <Spacer />
        <ListItem
          onClick={() => navigation.navigate('VDOrderDetails')}
          left={<Avatar medium rounded src={food3} />}
          body={
            <>
              <Text color={info} heading>
                Order No 9875934734
              </Text>
              <Text numberOfLines={1} color="" note>
                Lagos, Mary Chucks.
              </Text>
            </>
          }
          right={
            <View style={{ justifyContent: 'center', flex: 1 }}>
              <Text color="" note style={styles.status}>
                Delivered
              </Text>
            </View>
          }
        />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  listIcon: {
    backgroundColor: primaryColor,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  status: {
    textAlign: 'center',
    lineHeight: 15,
    fontWeight: '700',
  },
});

export default VDAccountSettingsScreen;
