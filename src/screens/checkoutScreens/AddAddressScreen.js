import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_ADDRESS } from '../../apollo/mutations';

const AddAddressScreen = ({ navigation }) => {
  const [isDefault, setIsDefault] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [lga, setLga] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <>
      <Header
        title="Add New Address"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Clickable>
        }
      />
      <UI.Layout>
        <View style={styles.container}>
          <View>
            <UI.Text h3>Add A New Shipping Address</UI.Text>
            <UI.Text note color="">
              The Fields marked with <UI.Text color="red">*</UI.Text> are
              required
            </UI.Text>
          </View>
          <UI.Spacer medium />

          <View style={styles.inputContainer}>
            <UI.Text heading>
              Full Name <UI.Text color="red">*</UI.Text>
            </UI.Text>
            <UI.Spacer />
            <UI.TextInput
              value={name}
              onChangeText={(value) => setName(value)}
            />
          </View>

          <UI.Spacer medium />
          <View style={styles.inputContainer}>
            <UI.Text heading>
              {' '}
              Street Address <UI.Text color="red">*</UI.Text>
            </UI.Text>
            <UI.Spacer />
            <UI.TextInput
              value={address}
              onChangeText={(value) => setAddress(value)}
            />
          </View>

          <UI.Spacer medium />
          <View style={styles.inputContainer}>
            <UI.Text heading>
              State <UI.Text color="red">*</UI.Text>
            </UI.Text>
            <UI.Spacer />
            <UI.TextInput
              value={state}
              onChangeText={(value) => setState(value)}
            />
          </View>

          <UI.Spacer medium />
          <View style={styles.inputContainer}>
            <UI.Text heading>City</UI.Text>
            <UI.Spacer />
            <UI.TextInput
              value={city}
              onChangeText={(value) => setCity(value)}
            />
          </View>

          <UI.Spacer medium />
          <View style={styles.inputContainer}>
            <UI.Text heading>Lga</UI.Text>
            <UI.Spacer />
            <UI.TextInput value={lga} onChangeText={(value) => setLga(value)} />
          </View>

          <UI.Spacer medium />
          <View style={styles.inputContainer}>
            <UI.Text heading>
              Postal Code <UI.Text color="red">*</UI.Text>
            </UI.Text>
            <UI.Spacer />
            <UI.TextInput
              value={postalCode}
              onChangeText={(value) => setPostalCode(value)}
            />
          </View>

          <UI.Spacer medium />
          <View style={styles.inputContainer}>
            <UI.Text heading>
              Phone <UI.Text color="red">*</UI.Text>
            </UI.Text>
            <UI.Spacer />
            <UI.TextInput
              value={phone}
              onChangeText={(value) => setPhone(value)}
            />
          </View>

          <UI.Spacer medium />
          <View style={styles.inputContainer}>
            <UI.Row>
              <UI.Switch
                onChange={() => setIsDefault(!isDefault)}
                value={isDefault}
                style={{ alignSelf: 'flex-start' }}
              />
              <UI.Spacer medium />
              <UI.Text heading>Set As Default</UI.Text>
            </UI.Row>
          </View>

          <UI.Spacer medium />
          <View>
            <UI.Row style={{ justifyContent: 'space-between' }}>
              <UI.Button>
                <UI.Text color="#fff">Save</UI.Text>
              </UI.Button>
            </UI.Row>
          </View>

          <UI.Spacer medium />
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});

export default AddAddressScreen;
