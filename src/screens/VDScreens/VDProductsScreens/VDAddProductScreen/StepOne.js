import React from 'react';
import * as UI from '../../../../components/common';
import { StyleSheet } from 'react-native';
import { grayColor, lightColor } from '../../../../components/common/variables';

const StepOne = ({ onContinue, show }) => {
  if (!show) return null;

  return (
    <>
      <UI.Text h3>Add Product Images</UI.Text>

      <UI.Text color="" note>
        Upload at least 2 images that shows clearly your product.
      </UI.Text>

      <UI.Spacer />

      <UI.Row>
        <UI.Clickable style={styles.imagePlaceholder}></UI.Clickable>

        <UI.Clickable style={styles.imagePlaceholder}></UI.Clickable>

        <UI.Clickable style={styles.addButton}>
          <UI.Icon color={lightColor} size={100} name="ios-add" />
        </UI.Clickable>
      </UI.Row>

      <UI.Spacer large />

      <UI.Button onClick={onContinue}>Continue</UI.Button>
    </>
  );
};

const styles = StyleSheet.create({
  imagePlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: grayColor,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  addButton: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: lightColor,
    borderRadius: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StepOne;
