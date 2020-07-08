import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Layout,
  Icon,
  Text,
  Button,
  TextInput,
  Spacer,
  Switch,
  Clickable,
  Row,
} from '../../components/common';
import Header from '../../components/Header';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_ADDRESS } from '../../apollo/mutations';

const AddAddressScreen = ({ navigation }) => {
  const [isDefault, setIsDefault] = useState(false);

  return (
    <>
      <Header
        title="Add New Address"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Clickable>
        }
      />
      <Layout>
        <View style={styles.container}>
          <View>
            <Text h3>Add A New Shipping Address</Text>
            <Text note color="">
              The Fields marked with <Text color="red">*</Text> are required
            </Text>
          </View>
          <Spacer medium />

          <View style={styles.inputContainer}>
            <Text heading>
              Full Name <Text color="red">*</Text>
            </Text>
            <Spacer />
            <TextInput />
          </View>

          <Spacer medium />
          <View style={styles.inputContainer}>
            <Text heading>
              {' '}
              Street Address <Text color="red">*</Text>
            </Text>
            <Spacer />
            <TextInput />
          </View>

          <Spacer medium />
          <View style={styles.inputContainer}>
            <Text heading>
              State <Text color="red">*</Text>
            </Text>
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
            <Text heading>Lga</Text>
            <Spacer />
            <TextInput />
          </View>

          <Spacer medium />
          <View style={styles.inputContainer}>
            <Text heading>
              Postal Code <Text color="red">*</Text>
            </Text>
            <Spacer />
            <TextInput />
          </View>

          <Spacer medium />
          <View style={styles.inputContainer}>
            <Text heading>
              Phone <Text color="red">*</Text>
            </Text>
            <Spacer />
            <TextInput />
          </View>

          <Spacer medium />
          <View style={styles.inputContainer}>
            <Row>
              <Switch
                onChange={() => setIsDefault(!isDefault)}
                value={isDefault}
                style={{ alignSelf: 'flex-start' }}
              />
              <Spacer medium />
              <Text heading>Set As Default</Text>
            </Row>
          </View>

          <Spacer medium />
          <View>
            <Row style={{ justifyContent: 'space-between' }}>
              <Button>
                <Text color="#fff">Save</Text>
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
