import React from 'react';
import ImagePicker from 'react-native-image-picker';
import * as UI from '../../../../components/common';
import {StyleSheet, Image, Alert} from 'react-native';
import {
  grayColor,
  lightColor,
  primaryColor,
} from '../../../../components/common/variables';
import {imagePickerOptions} from '../../../../constants';
import {processImage} from '../../../../utils';
import axios from 'axios';
import {useMutation} from '@apollo/react-hooks';
import {SINGLE_UPLOAD} from '../../../../apollo/mutations';

const StepOne = ({onContinue, show, images, onImages, onImageClick}) => {
  if (!show) {
    return null;
  }

  const [singleUpload, {loading}] = useMutation(SINGLE_UPLOAD);

  // const [loading, setLoading] = React.useState(false);

  const handleSelectImage = () => {
    ImagePicker.showImagePicker(imagePickerOptions, (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        Alert.alert('Error', response.error);
      } else {
        // const data = processImage(response);

        const formData = new FormData();
        formData.append('image', 'Name');
        // formData.append('image', {
        //   uri: response.uri,
        //   type: response.type,
        //   name: response.fileName,
        // });
        // setLoading(true);

        singleUpload({
          variables: {
            file: {
              uri: response.uri,
              type: response.type,
              name: response.fileName,
              upload_preset: 'myports',
            },
          },
        })
          .then((res) => {
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });

        // const file = processImage(data)
        // axios
        //   .post('https://myports.destreetboard.com/api/upload-image', formData)
        //   .then((res) => {
        //     // onImages(res.secure_url);
        //     console.log(res);
        //     setLoading(false);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     setLoading(false);
        //     Alert.alert('Error', 'An Error Occured While Uploading');
        //   });
      }
    });
  };

  return (
    <>
      <UI.Loading show={loading} />
      <UI.Text h3>Add Product Images</UI.Text>

      <UI.Text color="" note>
        Upload at least 2 images that shows clearly your product.
      </UI.Text>

      <UI.Spacer medium />

      <UI.Row>
        {images.map((image, index) => (
          <UI.Clickable
            onClick={() => onImageClick(image)}
            key={`${image.url + index}`}
            style={styles.imagePlaceholder}>
            <UI.Icon
              style={styles.close}
              size={35}
              name="md-close"
              color={primaryColor}
            />
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={{uri: image.url}}
            />
          </UI.Clickable>
        ))}

        <UI.Clickable
          onClick={() => handleSelectImage()}
          style={styles.addButton}>
          <UI.Icon color={lightColor} size={100} name="ios-add" />
        </UI.Clickable>
      </UI.Row>

      <UI.Spacer large />

      <UI.Button
        onClick={() => {
          if (images.length < 2) {
            return Alert.alert('Info', 'Please upload at least two images');
          }
          onContinue();
        }}>
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
  close: {
    position: 'absolute',
    zIndex: 9,
    right: 0,
    paddingRight: 7,
  },
});

export default StepOne;
