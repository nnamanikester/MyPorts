import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://10.0.2.2:5000',
});
