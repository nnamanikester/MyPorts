import React from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import {useMutation} from '@apollo/react-hooks';
import {UPDATE_ADDRESS} from '../../apollo/mutations';
import {connect} from 'react-redux';

const EditAddressScreen = ({
  navigation,
  offline,
  customer,
  route: {params},
}) => {
  const {a} = params;
  const [isDefault, setIsDefault] = React.useState(a.default ? true : false);
  const [name, setName] = React.useState(a.name);
  const [address, setAddress] = React.useState(a.address);
  const [state, setState] = React.useState(a.state);
  const [city, setCity] = React.useState(a.city);
  const [lga, setLga] = React.useState(a.lga);
  const [postalCode, setPostalCode] = React.useState(a.postalCode);
  const [phone, setPhone] = React.useState(a.phone);
  const [errors, setErrors] = React.useState('');

  const [updateAddress, {loading}] = useMutation(UPDATE_ADDRESS, {
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

  const handleUpdateAddress = () => {
    setErrors('');
    if (!name || !address || !state || !postalCode || !phone) {
      return setErrors('All fields marked with * are required!');
    }
    if (!offline) {
      updateAddress()
        .then((res) => {
          ToastAndroid.show(
            'Address updated successfully!',
            ToastAndroid.SHORT,
          );
          navigation.goBack();
        })
        .catch((e) => {
          ToastAndroid.show(
            'Error updating your address. Please, try again!',
            ToastAndroid.SHORT,
          );
        });
    }
  };

  return (
    <>
      <UI.Loading show={loading} />
      <Header
        title="Edit Address"
        headerLeft={
          <UI.Clickable
            style={{flexDirection: 'row'}}
            onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
            <UI.Spacer medium horizontal />
          </UI.Clickable>
        }
      />
      <UI.Layout>
        <View style={styles.container}>
          <View>
            <UI.Text h3>Update Shipping Address</UI.Text>
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
                style={{alignSelf: 'flex-start'}}
              />
              <UI.Spacer medium />
              <UI.Text heading>Set As Default</UI.Text>
            </UI.Row>
          </View>

          <UI.Spacer />

          {errors ? <UI.Text color="red">{errors}</UI.Text> : null}

          <UI.Spacer />

          <View>
            <UI.Row style={{justifyContent: 'space-between'}}>
              <UI.Button onClick={() => handleUpdateAddress()}>
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
