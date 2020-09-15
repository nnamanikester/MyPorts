import React from 'react';
import * as UI from '../../../../components/common';
import Header from '../../../../components/Header';
import {View, StyleSheet, Alert} from 'react-native';
import {CREATE_PRODUCT} from '../../../../apollo/mutations/product';
import {useMutation} from '@apollo/react-hooks';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import {connect} from 'react-redux';

const VDAddProductScreen = ({navigation, offline}) => {
  const [createProduct, {loading, error}] = useMutation(CREATE_PRODUCT);

  const [step, setStep] = React.useState(1);

  // STEP 1
  const [images, setImages] = React.useState([]);

  // STEP 2
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState(null);

  // STEP 3
  const [specifications, setSpecifications] = React.useState([]);

  // STEP 4
  const [quantity, setQuantity] = React.useState(null);
  const [price, setPrice] = React.useState(null);
  const [shipping, setShipping] = React.useState(null);
  const [fixedDiscount, setFixedDiscount] = React.useState(null);
  const [percentageDiscount, setPercentageDiscount] = React.useState(null);

  React.useEffect(() => {
    if (error) {
      Alert.alert('Error', 'Unable to create product. Please try again!');
    }
  }, [error]);

  const handleCreateProduct = () => {
    if (!offline) {
      createProduct({
        variables: {
          name,
          description,
          category,
          images,
          specifications,
          quantity: parseInt(quantity),
          price: parseFloat(price),
          shipping: parseFloat(shipping),
          fixedDiscount: parseFloat(fixedDiscount),
          percentageDiscount: parseInt(percentageDiscount),
          status: 1,
        },
      }).then((res) => {
        navigation.goBack();
      });
    } else {
      Alert.alert(
        'Network Error!',
        "Please check if you're connected to the internet",
      );
    }
  };

  const handleSaveForLater = () => {
    if (!offline) {
      createProduct({
        variables: {
          name,
          description,
          category,
          images,
          specifications,
          quantity: parseInt(quantity),
          price: parseFloat(price),
          shipping: parseFloat(shipping),
          fixedDiscount: parseFloat(fixedDiscount),
          percentageDiscount: parseInt(percentageDiscount),
          status: 0,
        },
      }).then((res) => {
        console.log(res.data.createProduct);
        navigation.goBack();
      });
    } else {
      Alert.alert('Error', "Please check if you're connected to the internet");
    }
  };

  return (
    <>
      <UI.Loading show={loading} />
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

          <StepOne
            images={images}
            onImageClick={(image) =>
              setImages(images.filter((img) => img !== image))
            }
            onImages={(url) => setImages([...images, {url}])}
            onContinue={() => setStep(step + 1)}
            show={step === 1}
          />

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
                {specification: spec, value},
              ])
            }
            onRemoveItem={(i) =>
              setSpecifications(
                specifications.filter((_, index) => i !== index),
              )
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

          <StepFive
            images={images}
            description={description}
            category={category}
            name={name}
            specifications={specifications}
            quantity={quantity}
            price={price}
            shipping={shipping}
            fixedDiscount={fixedDiscount}
            percentageDiscount={percentageDiscount}
            onFinish={() => handleCreateProduct()}
            show={step === 5}
            onSaveDraft={() => handleSaveForLater()}
          />
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

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps)(VDAddProductScreen);
