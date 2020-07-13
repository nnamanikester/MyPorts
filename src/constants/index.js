// HTTP/WS URLS
export const BASE_URL = 'http://localhost:4000';
export const API_URL = `${BASE_URL}/api`;
export const EMULATOR_API_URL = 'http://10.0.2.2:4000/api';

// STORAGE KEYS
export const TOKEN_STORAGE = '@myports/token';
export const USER_STORAGE = '@myports/user';

// OTHERS
export const imagePickerOptions = {
  title: 'Upload Profile Picture',
  takePhotoButtonTitle: 'Launch camera',
  chooseFromLibraryButtonTitle: 'Choose image from gallery',
  storageOptions: {
    skipBackup: true,
    path: 'MyPorts',
  },
};
