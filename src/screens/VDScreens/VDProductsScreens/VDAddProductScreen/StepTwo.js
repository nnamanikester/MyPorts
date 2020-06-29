import React from 'react';
import * as UI from '../../../../components/common';
import { StyleSheet, View } from 'react-native';
import {
  grayColor,
  lightColor,
  danger,
} from '../../../../components/common/variables';

const StepTwo = ({ show, onContinue }) => {
  if (!show) return null;
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const validateInputs = () => {
    setErrors({});
    if (!name) {
      return setErrors({
        name: "You're required to provide a name for our product!",
      });
    }
    if (!description) {
      return setErrors({ desc: "You're required to describe your product!" });
    }

    return onContinue();
  };

  return (
    <>
      <UI.Text h3>Add Product Info</UI.Text>
      <UI.Text note>
        Fill the form below to tell your customers about your product.
      </UI.Text>

      <UI.Spacer medium />

      <UI.Text heading>Product name</UI.Text>
      <UI.Text note>Tell your customers the name of your product.</UI.Text>
      <UI.Spacer />

      {errors.name ? (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <UI.Spacer />
          <UI.Icon size={20} name="ios-close-circle-outline" color={danger} />
          <UI.Spacer size={3} />
          <UI.Text color={danger}>{errors.name}</UI.Text>
          <UI.Spacer />
        </View>
      ) : null}

      <UI.TextInput
        onChangeText={(value) => setName(value)}
        value={name}
        placeholder="Enter product name"
      />

      <UI.Spacer />

      <UI.Text heading>Product Description</UI.Text>
      <UI.Text note>Describe your product here.</UI.Text>
      <UI.Spacer />

      {errors.desc ? (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <UI.Spacer />
          <UI.Icon size={20} name="ios-close-circle-outline" color={danger} />
          <UI.Spacer size={3} />
          <UI.Text color={danger}>{errors.desc}</UI.Text>
          <UI.Spacer />
        </View>
      ) : null}

      <UI.TextInput
        value={description}
        onChangeText={(value) => setDescription(value)}
        placeholder="Enter product description"
        style={{ height: 150 }}
        multiline
      />

      <UI.Spacer large />

      <UI.Button onClick={() => validateInputs()}>Continue</UI.Button>
    </>
  );
};

export default StepTwo;
