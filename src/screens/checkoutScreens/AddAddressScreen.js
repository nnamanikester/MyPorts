import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Layout,
  Icon,
  Text,
  Button,
  TextInput,
  Spacer,
  Switch,
  Row,
} from '../../components/common';
import Header from '../../components/Header';
import {info} from '../../components/common/variables';

const AddAddressScreen = ({navigation}) => {
  const [defaultAddress, setDefaultAddress] = useState(false);

  return (
    <>
      <Header
        title="Add New Address"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </TouchableOpacity>
        }
      />
      <Layout>
        <View style={styles.container}>
          <Spacer medium />
          <View style={styles.inputContainer}>
            <Text heading>Full Name</Text>
            <Spacer />
            <TextInput />
          </View>

          <Spacer medium />
          <View style={styles.inputContainer}>
            <Text heading> Street Address</Text>
            <Spacer />
            <TextInput />
          </View>

          <Spacer medium />
          <View style={styles.inputContainer}>
            <Text heading>State</Text>
            <Spacer />
            <TextInput />
          </View>

          <Spacer medium />
          <View style={styles.inputContainer}>
            <Text heading>City</Text>
            <Spacer />
            <TextInput />
          </View>

          <Spacer medium />
          <View style={styles.inputContainer}>
            <Text heading>Postal Code</Text>
            <Spacer />
            <TextInput />
          </View>

          <Spacer medium />
          <View style={styles.inputContainer}>
            <Text heading>Phone</Text>
            <Spacer />
            <TextInput />
          </View>

          <Spacer medium />
          <View style={styles.inputContainer}>
            <Row>
              <Switch
                onChange={() => setDefaultAddress(!defaultAddress)}
                value={defaultAddress}
                style={{alignSelf: 'flex-start'}}
              />
              <Spacer medium />
              <Text heading>Set As Default</Text>
            </Row>
          </View>

          <Spacer medium />
          <View>
            <Row style={{justifyContent: 'space-between'}}>
              <Button>
                <Text color="#fff">Save</Text>
              </Button>
              <Spacer />
              <Button type="ghost">
                <Text>Delete</Text>
              </Button>
            </Row>
          </View>

          <Spacer medium />
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
});

export default AddAddressScreen;
