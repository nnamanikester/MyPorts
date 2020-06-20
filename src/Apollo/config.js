import ApolloClient from 'apollo-boost';
import AsyncStorage from '@react-native-community/async-storage';

async function getToken() {
  return await AsyncStorage.getItem('token');
}

export const client = new ApolloClient({
  uri: 'http://10.0.2.2:5000',
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});
