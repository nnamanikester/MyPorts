import React, { useState } from 'react';
import * as UI from '../../../components/common';
import ImagePicker from 'react-native-image-picker';
import {
  info,
  lightColor,
  grayColor,
} from '../../../components/common/variables';
import { StyleSheet, View, Image } from 'react-native';
import { female1 } from '../../../assets/images';

const VendorStep2 = ({
  show,
  onSubmit,
  onBack,
  onLogo,
  logo,
  coverPhoto,
  onCoverPhoto,
  description,
  onDescription,
}) => {
  if (!show) return null;
  const [error, setError] = useState(null);

  const options = {
    title: 'Upload Profile Picture',
    takePhotoButtonTitle: 'Launch camera',
    chooseFromLibraryButtonTitle: 'Choose image from gallery',
    storageOptions: {
      skipBackup: true,
      path: 'MyPorts',
    },
  };

  const handleLogoUpload = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        setError(`Error: ${response.error}`);
      } else {
        const source = { uri: response.uri };
        return onLogo(source);
      }
    });
  };

  const handleCoverPhotoUpload = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        setError(`Error: ${response.error}`);
      } else {
        const source = { uri: response.uri };
        return onCoverPhoto(source);
      }
    });
  };

  return (
    <>
      <UI.Layout style={{ paddingHorizontal: 10, paddingTop: 10 }}>
        <UI.Clickable
          onClick={() => handleCoverPhotoUpload()}
          style={styles.coverImage}>
          {coverPhoto ? (
            <Image
              style={{ width: '100%', height: '100%' }}
              source={coverPhoto}
            />
          ) : (
            <UI.Icon color={lightColor} name="ios-add" size={100} />
          )}
        </UI.Clickable>

        <View>
          <UI.Clickable
            onClick={() => handleLogoUpload()}
            style={styles.logoContainer}>
            {logo ? (
              <Image style={styles.logo} source={logo} />
            ) : (
              <UI.Icon color={lightColor} name="ios-add" size={50} />
            )}
          </UI.Clickable>
        </View>

        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <UI.Text heading>Shop Description</UI.Text>

            <UI.Spacer />

            <UI.TextInput
              placeholder="Deals on wears imports..."
              value={description}
              onChangeText={onDescription}
              multiline
              maxLength={100}
            />
          </View>

          <UI.Spacer large />

          <View style={styles.inputContainer}>
            <UI.Row style={{ justifyContent: 'space-between' }}>
              <UI.Button
                showIconDivider
                type="outline"
                size="small"
                onClick={onBack}
                iconLeft={<UI.Icon name="ios-arrow-back" />}>
                <UI.Text>Back</UI.Text>
              </UI.Button>

              <UI.Button
                showIconDivider
                size="small"
                onClick={onSubmit}
                iconRight={<UI.Icon color="#fff" name="ios-arrow-forward" />}>
                <UI.Text color="#fff">Finish</UI.Text>
              </UI.Button>
            </UI.Row>
          </View>
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  inputContainer: {
    marginBottom: 10,
  },
  coverImage: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: lightColor,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  logoContainer: {
    width: 100,
    height: 100,
    marginHorizontal: 30,
    position: 'absolute',
    top: -60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: lightColor,
    borderRadius: 100,
  },
});

export default VendorStep2;
