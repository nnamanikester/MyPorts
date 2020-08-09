import React, {useState, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import * as UI from '../../components/common';
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

  useMemo(() => {
    return;
  }, []);

  return (
    <>
      <UI.Loading show={loading} />
      <Header
        title="Shipping Details"
        headerLeft={
          <UI.Clickable onPress={() => navigation.goBack()}>
            <UI.Icon name="md-close" color="#fff" />
          </UI.Clickable>
        }
        headerRight={
          <>
            <UI.Clickable onClick={() => navigation.navigate('Search')}>
              <UI.Icon name="ios-search" color="#fff" />
            </UI.Clickable>
          </>
        }
      />
      <UI.Layout>
        <UI.Spacer medium />
        <View style={styles.container}>
          <UI.Text heading>
            Order number is -{' '}
            <UI.Text heading color={primaryColor}>
              389yH658300
            </UI.Text>
          </UI.Text>

          <UI.Spacer medium />

          <UI.Text heading>Shipping Details</UI.Text>

          <UI.Divider />

          {!newAddress && (
            <>
              <UI.ListItem
                marked={true}
                left={<UI.Icon name="ios-pin" color={info} />}
                body={
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <UI.Text heading>Tiana Rosser</UI.Text>
                    </View>
                    <UI.Text>
                      Suit 13 Romchi plaza, oneday road, Awkunanaw, Enugu, Enugu
                      State.
                    </UI.Text>
                    <UI.Text>Nigeria</UI.Text>
                    <UI.Text>400252</UI.Text>
                  </>
                }
              />
            </>
          )}

          <UI.Spacer />

          {!newAddress && (
            <UI.Link onClick={() => setNewAddress(true)}>
              Change Address
            </UI.Link>
          )}

          {newAddress && (
            <View>
              <UI.Spacer medium />
              <UI.Text heading>Full Name</UI.Text>
              <UI.Spacer />
              <UI.TextInput />

              <UI.Spacer medium />
              <UI.Text heading> Street Address</UI.Text>
              <UI.Spacer />
              <UI.TextInput />

              <UI.Spacer medium />
              <UI.Text heading>State</UI.Text>
              <UI.Spacer />
              <UI.TextInput />

              <UI.Spacer medium />
              <UI.Text heading>City</UI.Text>
              <UI.Spacer />
              <UI.TextInput />

              <UI.Spacer medium />
              <UI.Text heading>Postal Code</UI.Text>
              <UI.Spacer />
              <UI.TextInput />

              <UI.Spacer medium />
              <UI.Text heading>Phone</UI.Text>
              <UI.Spacer />
              <UI.TextInput />

              <UI.Spacer medium />
              <UI.Button onClick={() => setNewAddress(false)}>
                <UI.Text color="#fff">Save</UI.Text>
              </UI.Button>
            </View>
          )}

          <UI.Spacer large />

          <UI.Button
            onClick={() => continueToPayment()}
            type={newAddress ? 'disabled' : ''}>
            <UI.Text color="#fff">Continue to Payment</UI.Text>
          </UI.Button>
        </View>
        <UI.Spacer large />
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default CheckoutScreen;
