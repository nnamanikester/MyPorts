import {ReactNativeFile} from 'extract-files';

export const processImage = (photo) => {
  return new ReactNativeFile({
    uri: photo.uri,
    type: photo.type,
    name: photo.fileName,
  });
};
