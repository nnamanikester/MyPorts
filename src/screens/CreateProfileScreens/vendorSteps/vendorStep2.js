import React from 'react';
import * as UI from '../../../components/common';
import ImagePicker from 'react-native-image-picker';
import {info, lightColor} from '../../../components/common/variables';
import {StyleSheet, View, Image, Alert} from 'react-native';
import {imagePickerOptions, UPLOAD_URL} from '../../../constants';
import axios from 'axios';

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
  location,
  onLocation,
}) => {
  const [loading, setLoading] = React.useState(false);

  if (!show) {
    return null;
  }

  const handleLogoUpload = () => {
    ImagePicker.showImagePicker(imagePickerOptions, async (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        Alert.alert('Error', `Error: ${response.error}`);
      } else {
        try {
          setLoading(true);
          const image = `data:${response.type};base64,${response.data}`;
          const res = await axios.post(`${UPLOAD_URL}/upload-image`, {
            image,
          });

          onLogo(res.data.data);
          setLoading(false);
        } catch (e) {
          Alert.alert('Error', 'Unable to upload image. Please try again.');
          setLoading(false);
        }
      }
    });
  };

  const handleCoverPhotoUpload = () => {
    ImagePicker.showImagePicker(imagePickerOptions, async (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        Alert.alert('Error', `Error: ${response.error}`);
      } else {
        try {
          setLoading(true);
          const image = `data:${response.type};base64,${response.data}`;
          const res = await axios.post(`${UPLOAD_URL}/upload-image`, {
            image,
          });

          onCoverPhoto(res.data.data);
          setLoading(false);
        } catch (e) {
          Alert.alert('Error', 'Unable to upload image. Please try again.');
          setLoading(false);
        }
      }
    });
  };

  return (
    <>
      <UI.Loading show={loading} />
      <UI.Layout style={{paddingHorizontal: 10, paddingTop: 10}}>
        <View style={styles.pageTitle}>
          <UI.Text h1>Complete Your Shop Profile</UI.Text>

          <UI.Text color={info}>
            Fill the form below to complete your shop profile information.
          </UI.Text>
        </View>

        <UI.Clickable
          onClick={() => handleCoverPhotoUpload()}
          style={styles.coverImage}>
          {coverPhoto ? (
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: coverPhoto}}
            />
          ) : (
            <>
              <UI.Icon color={lightColor} name="ios-add" size={100} />
              <UI.Text color={info}>Cover Photo</UI.Text>
            </>
          )}
        </UI.Clickable>

        <View>
          <UI.Clickable
            onClick={() => handleLogoUpload()}
            style={styles.logoContainer}>
            {logo ? (
              <Image style={styles.logo} source={{uri: logo}} />
            ) : (
              <>
                <UI.Icon color={lightColor} name="ios-add" size={50} />
                <UI.Text color={info}>Logo</UI.Text>
              </>
            )}
          </UI.Clickable>
        </View>

        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <UI.Text heading>
              Location <UI.Text color="red">*</UI.Text>
            </UI.Text>

            <UI.Spacer />

            <UI.TextInput
              placeholder="123 Street, State."
              value={location}
              onChangeText={onLocation}
            />
          </View>

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
            <UI.Row style={{justifyContent: 'space-between'}}>
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
          <UI.Spacer medium />
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
  pageTitle: {
    marginBottom: 30,
    paddingHorizontal: 10,
    marginTop: 20,
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
