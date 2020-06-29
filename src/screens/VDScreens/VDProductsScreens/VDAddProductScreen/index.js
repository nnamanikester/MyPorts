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

  // STEP 2
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState(null);

  // STEP 3
  const [specifications, setSpecifications] = React.useState([]);

  // STEP 4
  const [quantity, setQuantity] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [shipping, setShipping] = React.useState('');
  const [fixedDiscount, setFixedDiscount] = React.useState('');
  const [percentageDiscount, setPercentageDiscount] = React.useState('');

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

          <StepTwo
            category={category}
            description={description}
            name={name}
            onDescription={(value) => setDescription(value)}
            onCategory={(value) => setCategory(value)}
            onName={(value) => setName(value)}
            onContinue={() => setStep(step + 1)}
            show={step === 2}
          />

          <StepThree
            specifications={specifications}
            onAddSpec={(spec, value) =>
              setSpecifications([
                ...specifications,
                { specification: spec, value },
              ])
            }
            onContinue={() => setStep(step + 1)}
            show={step === 3}
          />

          <StepFour
            quantity={quantity}
            price={price}
            shipping={shipping}
            fixedDiscount={fixedDiscount}
            percentageDiscount={percentageDiscount}
            onQuantity={(value) => setQuantity(value)}
            onFixedDiscount={(value) => setFixedDiscount(value)}
            onPercentageDiscount={(value) => setPercentageDiscount(value)}
            onPrice={(value) => setPrice(value)}
            onShipping={(value) => setShipping(value)}
            onContinue={() => setStep(step + 1)}
            show={step === 4}
          />

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
