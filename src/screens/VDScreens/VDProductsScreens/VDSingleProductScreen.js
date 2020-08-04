import React from 'react';
import {View, StyleSheet, Image, Alert, ToastAndroid} from 'react-native';
import * as UI from '../../../components/common';
import {primaryColor} from '../../../components/common/variables';
import Header from '../../../components/Header';
import Swiper from 'react-native-swiper';
import {formatMoney} from '../../../utils';
import {DELETE_PRODUCT, UPDATE_PRODUCT} from '../../../apollo/mutations';
import {useMutation} from '@apollo/react-hooks';

const VDSingleProductScreen = ({navigation, route: {params}}) => {
  const {product} = params;
  const [deleteProduct, {loading: deleteLoading}] = useMutation(
    DELETE_PRODUCT,
    {
      variables: {
        id: product.id,
      },
    },
  );

  const [updateProduct, {loading}] = useMutation(UPDATE_PRODUCT);

  const handleDeleteProduct = () => {
    Alert.alert('Warning!', 'Are you sure you want to delete this product?', [
      {
        text: 'DELETE',
        onPress: () =>
          deleteProduct()
            .then(() => {
              ToastAndroid.show(
                'Product Deleted Successfully!',
                ToastAndroid.SHORT,
              );
              navigation.goBack();
            })
            .catch(() => {
              ToastAndroid.show(
                'Unable to delete product at this time. Please try again!',
                ToastAndroid.SHORT,
              );
            }),
      },
      {text: 'Cancel'},
    ]);
  };

  const handleUpdateProductStatus = (status) => {
    updateProduct({
      variables: {
        where: {
          id: product.id,
        },
        data: {
          status,
        },
      },
    })
      .then((res) => {
        ToastAndroid.show('Status Updated Successfully!', ToastAndroid.LONG);
        navigation.goBack();
      })
      .catch(() => {
        Alert.alert(
          'Error!',
          'Unable to update product status. Please try again!',
        );
      });
  };

  return (
    <>
      <UI.Loading show={deleteLoading || loading} />
      <Header
        title={product.name}
        headerLeft={
          <>
            <UI.Clickable onClick={() => navigation.goBack()}>
              <UI.Icon color="#fff" name="ios-arrow-back" />
            </UI.Clickable>
          </>
        }
        headerRight={
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <UI.Clickable
              onClick={() => navigation.navigate('VDEditProduct', {product})}>
              <UI.Icon size={25} name="md-create" color="#fff" />
            </UI.Clickable>
            <UI.Spacer size={12} />
            <UI.Clickable onClick={() => handleDeleteProduct()}>
              <UI.Icon size={25} name="md-trash" color="#fff" />
            </UI.Clickable>
            <UI.Spacer size={12} />
            <UI.Option
              options={[
                {
                  label: product.status === 1 ? 'Revert to draft' : 'Publish',
                  action: () => {
                    return handleUpdateProductStatus(
                      product.status === 1 ? 0 : 1,
                    );
                  },
                },
                {
                  label: 'Edit',
                  action: () => navigation.navigate('VDEditProduct', {product}),
                },
                {
                  label: 'Delete',
                  action: () => handleDeleteProduct(),
                },
              ]}
              icon={<UI.Icon name="ios-more" color="#fff" />}
            />
          </View>
        }
      />
      <UI.Layout>
        <>
          <UI.Spacer medium />

          <Swiper animated autoplayTimeout={5} height={250} loop autoplay>
            {product &&
              product.images.map((image, index) => (
                <View key={`${image.url + index}`}>
                  <Image
                    style={{width: '100%', height: '100%', borderRadius: 5}}
                    source={{uri: image.url}}
                  />
                </View>
              ))}
          </Swiper>

          <View style={styles.titleContainer}>
            <UI.Text style={styles.category} heading>
              {product.category.name}
            </UI.Text>
          </View>

          <UI.Spacer />

          <UI.Text size={18}>{product && product.name}</UI.Text>

          <View>
            <UI.Accordion initialIndex={0}>
              <UI.AccordionItem headerText="Description">
                <UI.Text>{product && product.description}</UI.Text>
              </UI.AccordionItem>

              {product && product.specifications && (
                <UI.AccordionItem headerText="Item Specifications">
                  {product.specifications.map((spec, index) => (
                    <UI.ListItem
                      key={`${spec.specification + index}`}
                      left={<UI.Text heading>{spec.specification}</UI.Text>}
                      body={<UI.Text>{spec.value}</UI.Text>}
                    />
                  ))}
                </UI.AccordionItem>
              )}

              <UI.AccordionItem headerText="Item Details">
                <UI.ListItem
                  left={<UI.Text heading>Quantity</UI.Text>}
                  right={<UI.Text>{product && product.quantity}</UI.Text>}
                />
                <UI.ListItem
                  left={<UI.Text heading>Price for 1</UI.Text>}
                  right={
                    <UI.Text>{`${formatMoney(
                      product && product.price,
                    )}`}</UI.Text>
                  }
                />
                <UI.ListItem
                  left={<UI.Text heading>Shipping Cost</UI.Text>}
                  right={
                    <UI.Text>
                      {product.shipping == 0
                        ? 'Free'
                        : `${formatMoney(product && product.shipping)}`}
                    </UI.Text>
                  }
                />
                {product.fixedDiscount ? (
                  <UI.ListItem
                    left={<UI.Text heading>Discount</UI.Text>}
                    right={
                      <UI.Text>{`${formatMoney(
                        product && product.fixedDiscount,
                      )}`}</UI.Text>
                    }
                  />
                ) : null}
                {product && product.percentageDiscount ? (
                  <UI.ListItem
                    left={<UI.Text heading>Discount</UI.Text>}
                    right={
                      <UI.Text>{`${product.percentageDiscount}%`}</UI.Text>
                    }
                  />
                ) : null}
              </UI.AccordionItem>
            </UI.Accordion>
          </View>
        </>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  category: {
    position: 'absolute',
    right: 10,
    backgroundColor: primaryColor,
    paddingHorizontal: 5,
    top: 30,
    color: '#fff',
    textTransform: 'uppercase',
  },
  titleContainer: {
    position: 'absolute',
    height: 250,
    width: '100%',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingRight: 70,
  },
});

export default VDSingleProductScreen;
