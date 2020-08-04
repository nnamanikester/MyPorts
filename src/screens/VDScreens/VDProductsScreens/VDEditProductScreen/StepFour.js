import React from 'react';
import * as UI from '../../../../components/common';
import {View} from 'react-native';
import {danger} from '../../../../components/common/variables';

const StepFour = ({
  show,
  onContinue,
  fixedDiscount,
  percentageDiscount,
  shipping,
  price,
  quantity,
  onQuantity,
  onPrice,
  onShipping,
  onFixedDiscount,
  onPercentageDiscount,
}) => {
  const [errors, setErrors] = React.useState({});
  const [addDiscount, setAddDiscount] = React.useState(false);
  const [discountType, setDiscountType] = React.useState(1);

  if (!show) {
    return null;
  }

  const handleFormData = () => {
    if (!quantity) {
      return setErrors({quantity: 'Quantity is required!'});
    }
    if (!price) {
      return setErrors({price: 'Price is required!'});
    }
    if (!shipping) {
      return setErrors({shipping: 'Shipping is required!'});
    }

    return onContinue();
  };

  return (
    <>
      <UI.Text h3>Add Product Pricing</UI.Text>
      <UI.Text color="" note>
        Use the form below to set product quantity and price for each.
      </UI.Text>

      <UI.Spacer medium />

      <View>
        <UI.Text heading>Quantity</UI.Text>
        <UI.Text note color="">
          How many of this product do you have for sale?
        </UI.Text>

        <UI.Spacer />

        {errors.quantity ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <UI.Spacer />
            <UI.Icon size={20} name="ios-close-circle-outline" color={danger} />
            <UI.Spacer size={3} />
            <UI.Text color={danger}>{errors.quantity}</UI.Text>
            <UI.Spacer />
          </View>
        ) : null}

        <UI.TextInput
          value={quantity}
          onChangeText={onQuantity}
          placeholder="Enter quantity"
          keyboardType="number-pad"
        />
      </View>

      <UI.Spacer />

      <View>
        <UI.Text heading>Price (NGN)</UI.Text>
        <UI.Text note color="">
          How much do you sell one of this product?
        </UI.Text>

        <UI.Spacer />

        {errors.price ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <UI.Spacer />
            <UI.Icon size={20} name="ios-close-circle-outline" color={danger} />
            <UI.Spacer size={3} />
            <UI.Text color={danger}>{errors.price}</UI.Text>
            <UI.Spacer />
          </View>
        ) : null}

        <UI.TextInput
          value={price}
          onChangeText={onPrice}
          placeholder="Enter price"
          keyboardType="number-pad"
        />
      </View>

      <UI.Spacer />

      <View>
        <UI.Text heading>Shipping cost (NGN)</UI.Text>
        <UI.Text note color="">
          How much would you charge to ship the products to anywhere Nigeria?
          Enter `0` for free shipping
        </UI.Text>

        <UI.Spacer />

        {errors.shipping ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <UI.Spacer />
            <UI.Icon size={20} name="ios-close-circle-outline" color={danger} />
            <UI.Spacer size={3} />
            <UI.Text color={danger}>{errors.shipping}</UI.Text>
            <UI.Spacer />
          </View>
        ) : null}

        <UI.TextInput
          value={shipping}
          onChangeText={onShipping}
          placeholder="Enter shipping cost"
          keyboardType="number-pad"
        />
      </View>

      <UI.Spacer />

      <View>
        <UI.ListItem
          body={
            <>
              <UI.Text heading>Add Discount</UI.Text>
              <UI.Text note color="">
                Do you have discount for this product?
              </UI.Text>
            </>
          }
          right={
            <View style={{flex: 1, justifyContent: 'center'}}>
              <UI.Switch
                value={addDiscount}
                onChange={() => setAddDiscount(!addDiscount)}
              />
            </View>
          }
        />

        <UI.Spacer />

        {addDiscount && (
          <View>
            <UI.Text heading>Discount</UI.Text>
            <UI.Text note color="">
              Select how you want to apply discount for this product?
            </UI.Text>
            <UI.Spacer />
            <UI.Row>
              <UI.Column size="6">
                <UI.Select
                  type="dropdown"
                  selected={discountType}
                  onChange={(value) => setDiscountType(value)}
                  data={[
                    {label: 'Percentage (%)', value: 1},
                    {label: 'Fixed amount (NGN)', value: 2},
                  ]}
                />
              </UI.Column>
              <UI.Column size="6">
                {discountType === 1 && (
                  <UI.TextInput
                    value={percentageDiscount}
                    onChangeText={onPercentageDiscount}
                    placeholder="Enter percentage discount"
                    keyboardType="number-pad"
                  />
                )}
                {discountType === 2 && (
                  <UI.TextInput
                    value={fixedDiscount}
                    onChangeText={onFixedDiscount}
                    placeholder="Enter fixed amount"
                    keyboardType="number-pad"
                  />
                )}
              </UI.Column>
            </UI.Row>
          </View>
        )}
      </View>

      <UI.Spacer large />

      <UI.Button onClick={() => handleFormData()}>
        <UI.Text color="#fff">Continue</UI.Text>
      </UI.Button>

      <UI.Spacer large />
    </>
  );
};

export default StepFour;
