import React from 'react';
import * as UI from '../../components/common';
import {info} from '../../components/common/variables';
import {StyleSheet, View} from 'react-native';

const CreateProfileInitial = ({show, onCustomer, onVendor}) => {
  if (!show) {
    return null;
  }

  // CHECK FOR EMAIL VERIFICARTION VEFOR RENDERING MAIN SCREEN

  return (
    <>
      <UI.Layout style={styles.container}>
        <View style={styles.pageTitle}>
          <UI.Text h1>Few More Steps To Go!</UI.Text>

          <UI.Text color={info}>
            Let's get you started. Follow the below instructions to complete
            your profile.
          </UI.Text>
        </View>

        <View>
          <UI.Text heading>Continue as a Buyer</UI.Text>
          <UI.Text note color="">
            Are you interested in buying goods in bulk from our amazing Vendors?
            We got you covered!
          </UI.Text>
          <UI.Spacer />

          <UI.Button onClick={onCustomer}>
            <UI.Text color="#fff">Setup a buyer profile</UI.Text>
          </UI.Button>
        </View>

        <UI.Spacer medium />

        <View>
          <UI.Text heading>Continue as a Vendor</UI.Text>
          <UI.Text note color="">
            Are you a Wholesaler or an Importer looking to sell your products
            through myports? We have buyers waiting for your amazing products
            already.
          </UI.Text>
          <UI.Spacer />

          <UI.Button onClick={onVendor}>
            <UI.Text color="#fff">Setup a vendor profile</UI.Text>
          </UI.Button>
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  pageTitle: {
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 10,
  },
});

export default CreateProfileInitial;
