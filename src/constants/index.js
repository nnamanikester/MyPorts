// HTTP/WS URLS
export const BASE_URL = '//myports-api.herokuapp.com';
export const API_URL = `https:${BASE_URL}/api`;
export const WS_URL = `ws:${BASE_URL}/subscription`;
export const EMULATOR_WS_URL = 'ws://myports-api.herokuapp.com/subscription';
export const EMULATOR_API_URL = 'https://myports-api.herokuapp.com/api';
export const UPLOAD_URL = 'https://myports.destreetboard.com/api';

// STORAGE KEYS
export const TOKEN_STORAGE = '@myports/token';
export const USER_STORAGE = '@myports/user';
export const CART_STORAGE = '@myports/cart';

// OTHERS
export const imagePickerOptions = {
  title: 'Upload Image',
  takePhotoButtonTitle: 'Launch camera',
  chooseFromLibraryButtonTitle: 'Choose image from gallery',
  storageOptions: {
    skipBackup: true,
    path: 'MyPorts',
  },
};
