import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Text,
  Layout,
  Icon,
  ListItem,
  Spacer,
  TextInput,
  Alert,
  Loading,
  Button,
} from '../../components/common';
import Header from '../../components/Header';
import {info, primaryColor} from '../../components/common/variables';

const PaymentScreen = ({navigation}) => {
  const [newAddress, setNewAddress] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

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
      <Alert
        show={alert}
        header="Payment Failed! "
        error
        buttonText="Review Payment"
        message={
          'You have made your first payment. \n Would you like to review the product you ordered?'
        }
      />
      <Header
        title="Payment"
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

          <Button
            onClick={() => setAlert(true)}
            type={newAddress ? 'disabled' : ''}>
            <Text color="#fff">Confirm Payment</Text>
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

export default PaymentScreen;
