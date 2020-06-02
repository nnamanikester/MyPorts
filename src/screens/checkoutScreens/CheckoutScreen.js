import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Text,
  Layout,
  Icon,
  ListItem,
  Spacer,
  TextInput,
  Loading,
  Button,
  Divider,
  Link,
} from '../../components/common';
import Header from '../../components/Header';
import {info, primaryColor} from '../../components/common/variables';

const CheckoutScreen = ({navigation}) => {
  const [newAddress, setNewAddress] = useState(false);
  const [loading, setLoading] = useState(false);

  const continueToPayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Payment');
    }, 3000);
  };

  return (
    <>
      <Loading show={loading} />
      <Header
        title="Shipping Details"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="md-close" color="#fff" />
          </TouchableOpacity>
        }
        headerRight={
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
              activeOpacity={0.7}>
              <Icon name="ios-search" color="#fff" />
            </TouchableOpacity>
          </>
        }
      />
      <Layout>
        <Spacer medium />
        <View style={styles.container}>
          <Text heading>
            Order number is -{' '}
            <Text heading color={primaryColor}>
              389yH658300
            </Text>
          </Text>

          <Spacer medium />

          <Text heading>Shipping Details</Text>

          <Divider />

          {!newAddress && (
            <ListItem
              left={<Icon name="ios-pin" color={info} />}
              body={
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text heading>Tiana Rosser</Text>
                    <Link onClick={() => navigation.navigate('EditAddress')}>
                      <Icon name="md-create" color={primaryColor} size={16} />
                      {'  '}
                      EDIT
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
          )}

          <Spacer />

          {!newAddress && (
            <Link onClick={() => setNewAddress(true)}>Use Another Address</Link>
          )}

          {newAddress && (
            <View>
              <Spacer medium />
              <Text heading>Full Name</Text>
              <Spacer />
              <TextInput />

              <Spacer medium />
              <Text heading> Street Address</Text>
              <Spacer />
              <TextInput />

              <Spacer medium />
              <Text heading>State</Text>
              <Spacer />
              <TextInput />

              <Spacer medium />
              <Text heading>City</Text>
              <Spacer />
              <TextInput />

              <Spacer medium />
              <Text heading>Postal Code</Text>
              <Spacer />
              <TextInput />

              <Spacer medium />
              <Text heading>Phone</Text>
              <Spacer />
              <TextInput />

              <Spacer medium />
              <Button onClick={() => setNewAddress(false)}>
                <Text color="#fff">Save</Text>
              </Button>
            </View>
          )}

          <Spacer large />

          <Button
            onClick={() => continueToPayment()}
            type={newAddress ? 'disabled' : ''}>
            <Text color="#fff">Continue to Payment</Text>
          </Button>
        </View>
        <Spacer large />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default CheckoutScreen;
