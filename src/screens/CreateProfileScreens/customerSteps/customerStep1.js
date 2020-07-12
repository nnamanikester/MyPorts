import React, {useState} from 'react';
import * as UI from '../../../components/common';
import {danger, info} from '../../../components/common/variables';
import {StyleSheet, View} from 'react-native';

const CustomerStep1 = ({
  show,
  onNext,
  onBack,
  onFirstName,
  onLastName,
  onPhone,
  firstName,
  lastName,
  phone,
}) => {
  const [error, setError] = useState(null);
  if (!show) {
    return null;
  }

  const handleNext = () => {
    setError(null);
    if (!firstName || !lastName) {
      return setError('All fields marked with * are required!');
    }
    return onNext();
  };

  return (
    <>
      <UI.Layout style={styles.container}>
        <View style={styles.pageTitle}>
          <UI.Text h1>Complete Your Profile</UI.Text>

          <UI.Text color={info}>
            Fill the form below to complete your profile.
          </UI.Text>
        </View>
        <View style={styles.inputContainer}>
          <UI.Text heading>
            First name <UI.Text color="red">*</UI.Text>
          </UI.Text>

          <UI.Spacer />

          <UI.TextInput
            placeholder="John"
            value={firstName}
            onChangeText={onFirstName}
          />
        </View>
        <View style={styles.inputContainer}>
          <UI.Text heading>
            Last name <UI.Text color="red">*</UI.Text>
          </UI.Text>

          <UI.Spacer />

          <UI.TextInput
            placeholder="Doe"
            value={lastName}
            onChangeText={onLastName}
          />
        </View>
        <View style={styles.inputContainer}>
          <UI.Text heading>Phone</UI.Text>

          <UI.Spacer />

          <UI.TextInput
            keyboardType="phone-pad"
            placeholder="+2348012345678"
            value={phone}
            onChangeText={onPhone}
          />
        </View>

        {error ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <UI.Spacer medium />
            <UI.Icon size={20} name="ios-close-circle-outline" color={danger} />
            <UI.Spacer size={3} />
            <UI.Text color={danger}>{error}</UI.Text>
          </View>
        ) : null}

        <UI.Spacer medium />

        <View style={styles.inputContainer}>
          <UI.Row style={{justifyContent: 'space-between'}}>
            <UI.Button
              showIconDivider
              type="outline"
              size="small"
              onClick={onBack}
              iconLeft={<UI.Icon name="ios-arrow-back" />}>
              <UI.Text>Back</UI.Text>
            </UI.Button>

            <UI.Button
              showIconDivider
              size="small"
              onClick={() => handleNext()}
              iconRight={<UI.Icon color="#fff" name="ios-arrow-forward" />}>
              <UI.Text color="#fff">Continue</UI.Text>
            </UI.Button>
          </UI.Row>
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

export default CustomerStep1;
