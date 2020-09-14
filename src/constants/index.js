// HTTP/WS URLS
export const BASE_URL = '//myports-api.herokuapp.com';
export const API_URL = `https:${BASE_URL}/api`;
export const WS_URL = `ws:${BASE_URL}/subscription`;
export const EMULATOR_WS_URL = 'ws://myports-api.herokuapp.com/subscription';
export const EMULATOR_API_URL = 'https://myports-api.herokuapp.com/api';
export const UPLOAD_URL = 'https://myports.co/api';
// export const EMULATOR_WS_URL = 'ws://192.168.43.164:4000/subscription';
// export const EMULATOR_API_URL = 'http://192.168.43.164:4000/api';
// export const UPLOAD_URL = 'http://192.168.43.164:4000/api';

// PAYSTACK
export const PAYSTACK_PUBLIC_KEY =
  'pk_test_24cc03b9f161d1d69c537068affbb394fe5e2140';
export const PAYSTACK_SECRETE_KEY =
  'sk_test_1a65c42fc5d93e4fcb6a67dcdb960ad1adb56185';

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
