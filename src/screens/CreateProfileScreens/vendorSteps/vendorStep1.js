import React from 'react';
import * as UI from '../../../components/common';
import {danger, info} from '../../../components/common/variables';
import {StyleSheet, View} from 'react-native';
import {validateEmail} from '../../../utils';

const VendorStep1 = ({
  show,
  onNext,
  onBack,
  onShopName,
  onEmail,
  onPhone,
  shopName,
  email,
  phone,
}) => {
  const [error, setError] = React.useState(null);
  if (!show) {
    return null;
  }

  const handleNext = () => {
    setError(null);
    if (!shopName || !email || !phone) {
      return setError('All fields marked with * are required!');
    }
    if (!validateEmail(email)) {
      return setError('Invalid email address!');
    }
    return onNext();
  };

  return (
    <>
      <UI.Layout style={styles.container}>
        <View style={styles.pageTitle}>
          <UI.Text h1>Complete Your Shop Profile</UI.Text>

          <UI.Text color={info}>
            Fill the form below to complete your shop profile information.
          </UI.Text>
        </View>
        <View style={styles.inputContainer}>
          <UI.Text heading>
            Shop name <UI.Text color="red">*</UI.Text>
          </UI.Text>

          <UI.Spacer />

          <UI.TextInput
            placeholder="My Shop"
            value={shopName}
            onChangeText={onShopName}
          />
        </View>
        <View style={styles.inputContainer}>
          <UI.Text heading>
            Shop email address <UI.Text color="red">*</UI.Text>
          </UI.Text>

          <UI.Spacer />

          <UI.TextInput
            placeholder="myshopemail@email.com"
            value={email}
            onChangeText={onEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <UI.Text heading>
            Contact phone <UI.Text color="red">*</UI.Text>
          </UI.Text>

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

export default VendorStep1;
