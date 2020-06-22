import ApolloClient from 'apollo-boost';
import AsyncStorage from '@react-native-community/async-storage';
import { emulatorApiUrl } from '../config';

async function getToken() {
  return await AsyncStorage.getItem('token');
}

export const client = new ApolloClient({
  uri: emulatorApiUrl,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});
