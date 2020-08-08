import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyAH__dN3RDEVP4eEP4EbcpQrMwYlIcmtF8',
  authDomain: 'dsb-myports.firebaseapp.com',
  databaseURL: 'https://dsb-myports.firebaseio.com',
  storageBucket: 'dsb-myports.appspot.com',
  projectId: 'dsb-myports',
  messagingSenderId: '300874185049',
  appId: '1:300874185049:web:2ad4721978ab116e00f448',
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket

const storage = firebase.storage();

export {storage};
