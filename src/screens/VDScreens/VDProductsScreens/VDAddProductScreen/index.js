import React from 'react';
import * as UI from '../../../../components/common';
import Header from '../../../../components/Header';
import { View, StyleSheet } from 'react-native';
import StepOne from './StepOne';

const VDAddProductScreen = () => {
  const [step, setStep] = React.useState(1);

  return (
    <>
      <Header
        title="Create Product"
        headerLeft={<UI.Icon color="#fff" name="ios-arrow-back" />}
      />
      <UI.Layout>
        <View style={styles.container}>
          <UI.Spacer medium />

          <UI.Pagination
            clickableButtons
            currentPage={step}
            pages={[1, 2, 3, 4, 5]}
          />

          <UI.Spacer medium />

          <StepOne onContinue={() => setStep(step + 1)} show={step === 1} />
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});

export default VDAddProductScreen;
