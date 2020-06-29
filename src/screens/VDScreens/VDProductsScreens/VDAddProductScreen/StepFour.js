import React from 'react';
import * as UI from '../../../../components/common';
import { View } from 'react-native';

const StepFour = ({ show, onContinue }) => {
  if (!show) return null;

  const [addDiscount, setAddDiscount] = React.useState(false);

  const handleFormData = () => {
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
        <UI.TextInput placeholder="Enter quantity" keyboardType="number-pad" />
      </View>

      <UI.Spacer />

      <View>
        <UI.Text heading>Price (NGN)</UI.Text>
        <UI.Text note color="">
          How much do you sell one of this product?
        </UI.Text>
        <UI.Spacer />
        <UI.TextInput placeholder="Enter price" keyboardType="number-pad" />
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
            <View style={{ flex: 1, justifyContent: 'center' }}>
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
                  data={[
                    { label: 'Percentage (%)', value: 2 },
                    { label: 'Fixed amount (NGN)', value: 1 },
                  ]}
                />
              </UI.Column>
              <UI.Column size="6">
                <UI.TextInput
                  placeholder="Enter discount"
                  keyboardType="number-pad"
                />
              </UI.Column>
            </UI.Row>
          </View>
        )}
      </View>

      <UI.Spacer large />

      <UI.Button onClick={() => handleFormData()}>Continue</UI.Button>

      <UI.Spacer large />
    </>
  );
};

export default StepFour;
