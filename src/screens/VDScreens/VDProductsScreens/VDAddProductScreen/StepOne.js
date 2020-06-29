import React from 'react';
import ImagePicker from 'react-native-image-picker';
import * as UI from '../../../../components/common';
import { StyleSheet } from 'react-native';
import { grayColor, lightColor } from '../../../../components/common/variables';
import { imagePickerOptions } from '../../../../constants';
import { processImage } from '../../../../utils';

const StepOne = ({ onContinue, show, images, onImages }) => {
  if (!show) return null;

  const handleSelectImage = () => {
    ImagePicker.showImagePicker(imagePickerOptions, (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        alert(`Error: ${response.error}`);
      } else {
        const file = processImage(response);
        // Upload Photo
        // setImages([...images, {imageUrl: 'imageUrl from uploadrd photo'}])
        return onImages(imageUrl);
      }
    });
  };

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

      <UI.Button onClick={onContinue}>
        <UI.Text color="#fff">Continue</UI.Text>
      </UI.Button>

      <UI.Spacer large />
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
