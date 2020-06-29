import React from 'react';
import * as UI from '../../../../components/common';
import Header from '../../../../components/Header';
import { View, StyleSheet } from 'react-native';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';

const VDAddProductScreen = ({ navigation }) => {
  const [step, setStep] = React.useState(1);

  const handleCreateProduct = () => {
    return;
  };

  return (
    <>
      <Header
        title="Create Product"
        headerLeft={
          <>
            <UI.Clickable onClick={() => navigation.goBack()}>
              <UI.Icon color="#fff" name="ios-arrow-back" />
            </UI.Clickable>
          </>
        }
      />
      <UI.Layout>
        <View style={styles.container}>
          <UI.Spacer medium />

          <UI.Pagination currentPage={step} pages={[1, 2, 3, 4, 5]} />

          <UI.Spacer medium />

          <StepOne onContinue={() => setStep(step + 1)} show={step === 1} />
          <StepTwo onContinue={() => setStep(step + 1)} show={step === 2} />
          <StepThree onContinue={() => setStep(step + 1)} show={step === 3} />
          <StepFour onContinue={() => setStep(step + 1)} show={step === 4} />
          <StepFive onFinish={() => handleCreateProduct()} show={step === 5} />
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
