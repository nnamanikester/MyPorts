import React from 'react';
import * as UI from '../../../../components/common';
import Header from '../../../../components/Header';
import {View, StyleSheet, Alert, ToastAndroid} from 'react-native';
import {UPDATE_PRODUCT} from '../../../../apollo/mutations/product';
import {useMutation} from '@apollo/react-hooks';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import {connect} from 'react-redux';

const VDEditProductScreen = ({navigation, offline, route: {params}}) => {
  const {product} = params;

  const [updateProduct, {loading}] = useMutation(UPDATE_PRODUCT);

  const [step, setStep] = React.useState(1);

  // STEP 1
  const [images, setImages] = React.useState([...product.images]);

  // STEP 2
  const [name, setName] = React.useState(product.name);
  const [description, setDescription] = React.useState(product.description);
  const [category, setCategory] = React.useState(product.category.id);

  // STEP 3
  const [specifications, setSpecifications] = React.useState([
    ...product.specifications,
  ]);

  // STEP 4
  const [quantity, setQuantity] = React.useState(`${product.quantity}`);
  const [price, setPrice] = React.useState(`${product.price}`);
  const [shipping, setShipping] = React.useState(`${product.shipping}`);
  const [fixedDiscount, setFixedDiscount] = React.useState(
    product.fixedDiscount ? `${product.fixedDiscount}` : product.fixedDiscount,
  );
  const [percentageDiscount, setPercentageDiscount] = React.useState(
    product.percentageDiscount
      ? `${product.percentageDiscount}`
      : product.percentageDiscount,
  );

  const handleUpdateProduct = () => {
    if (!offline) {
      updateProduct({
        variables: {
          where: {
            id: product.id,
          },
          data: {
            name,
            description,
            category: {
              connect: {
                id: category,
              },
            },
            images: {
              create: images.map((im) => ({url: im.url})),
            },
            specifications: {
              create: specifications.map((s) => ({
                value: s.value,
                specification: s.specification,
              })),
            },
            quantity: parseInt(quantity),
            price: parseFloat(price),
            shipping: parseFloat(shipping),
            fixedDiscount: parseFloat(fixedDiscount),
            percentageDiscount: parseInt(percentageDiscount),
          },
        },
      })
        .then((res) => {
          ToastAndroid.show('Product Updated Successfully!', ToastAndroid.LONG);
          navigation.goBack();
        })
        .catch(() => {
          Alert.alert('Error!', 'Unable to update product. Please try again!');
        });
    } else {
      Alert.alert(
        'Network Error!',
        "Please check if you're connected to the internet",
      );
    }
  };

  return (
    <>
      <UI.Loading show={loading} />
      <Header
        title="Update Product"
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
            onFinish={() => handleUpdateProduct()}
            show={step === 5}
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

export default connect(mapStateToProps)(VDEditProductScreen);
