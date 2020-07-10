import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_ADDRESS } from '../../apollo/mutations';
import { connect } from 'react-redux';

const EditAddressScreen = ({
  navigation,
  offline,
  customer,
  route: { params },
}) => {
  const { a } = params;
  const [isDefault, setIsDefault] = React.useState(false);
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');
  const [lga, setLga] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const [updateAddress, { loading }] = useMutation(UPDATE_ADDRESS, {
    variables: {
      id: a.id,
      customerId: customer.id,
      name,
      address,
      state,
      city,
      lga,
      postalCode,
      phone,
      isDefault,
    },
  });

  return (
    <>
      <UI.Loading show={loading} />
      <Header
        title="Edit Address"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arUI.row-back" color="#fff" />
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
              keyboardType="phone-pad"
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
              <UI.Button onClick={() => handleCreateAddress()}>
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

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
    customer: state.customer.profile,
  };
};

export default connect(mapStateToProps)(EditAddressScreen);
