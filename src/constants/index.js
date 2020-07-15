// HTTP/WS URLS
export const BASE_URL = '//localhost:4000';
export const API_URL = `http:${BASE_URL}/api`;
export const WS_URL = `ws:${BASE_URL}/api`;
export const EMULATOR_API_URL = 'http://192.168.43.164:4000/api';

// STORAGE KEYS
export const TOKEN_STORAGE = '@myports/token';
export const USER_STORAGE = '@myports/user';
export const CART_STORAGE = '@myports/cart';

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
