import React from 'react';
import {
  Text,
  Layout,
  ListItem,
  Icon,
  Spacer,
  Avatar,
  FAB,
  Badge,
} from '../../../components/common';
import { food3, image9, shoe3 } from '../../../assets/images';
import { StyleSheet, View } from 'react-native';
import {
  success,
  danger,
  primaryColor,
} from '../../../components/common/variables';

const VDMessagingScreen = ({ navigation }) => {
  return (
    <>
      <Layout>
        <ListItem
          onClick={() => navigation.navigate('VDConversation')}
          left={<Avatar medium rounded src={food3} />}
          body={
            <>
              <Text heading>John Kester</Text>
              <Text numberOfLines={1} color={primaryColor} note>
                How much can I get the shoes?
              </Text>
            </>
          }
          right={
            <View style={{ justifyContent: 'space-between' }}>
              <Text color={success} note style={styles.status}>
                Active
              </Text>
            </View>
          }
        />
        <ListItem
          onClick={() => navigation.navigate('VDConversation')}
          left={<Avatar medium rounded src={shoe3} />}
          body={
            <>
              <Text heading>Martin Luther</Text>
              <Text numberOfLines={1} color="" note>
                I want you to make it 300 naira na, so that i can invite others.
              </Text>
            </>
          }
          right={
            <View style={{ justifyContent: 'space-between' }}>
              <Text color={danger} note style={styles.status}>
                Closed
              </Text>
            </View>
          }
        />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  status: {
    textAlign: 'center',
    lineHeight: 15,
    fontWeight: '700',
  },
});

export default VDMessagingScreen;
