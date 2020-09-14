import React, {useState} from 'react';
import axios from 'axios';
import * as UI from '../../../components/common';
import ImagePicker from 'react-native-image-picker';
import {info, lightColor} from '../../../components/common/variables';
import {StyleSheet, View, Image, Alert} from 'react-native';
import {UPLOAD_URL} from '../../../constants';

const CustomerStep2 = ({show, onSubmit, onBack, photo, onPhoto}) => {
  const [loading, setLoading] = useState(false);

  if (!show) {
    return null;
  }

  const options = {
    title: 'Upload Profile Picture',
    takePhotoButtonTitle: 'Launch camera',
    chooseFromLibraryButtonTitle: 'Choose image from gallery',
    storageOptions: {
      skipBackup: true,
      path: 'MyPorts',
    },
  };

  const handleImageUpload = () => {
    ImagePicker.showImagePicker(options, async (response) => {
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

          onPhoto(res.data.data);
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
      <UI.Layout style={styles.container}>
        <View style={styles.pageTitle}>
          <UI.Text h1>Upload A Profile Picture</UI.Text>

          <UI.Text color={info}>
            Click the box below to upload a profile picture. (Optional)
          </UI.Text>
        </View>

        {!photo ? (
          <UI.Clickable
            onClick={() => handleImageUpload()}
            style={styles.imagePicker}>
            <UI.Icon color={lightColor} name="ios-add" size={100} />
          </UI.Clickable>
        ) : (
          <View style={styles.profilePhoto}>
            <Image style={{width: 200, height: 200}} source={{uri: photo}} />
            <UI.Spacer />
            <UI.Link onClick={() => handleImageUpload()}>Change Image</UI.Link>
          </View>
        )}

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
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  pageTitle: {
    marginBottom: 30,
  },
  imagePicker: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: lightColor,
    borderRadius: 5,
    height: 200,
  },
  profilePhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
});

export default CustomerStep2;
