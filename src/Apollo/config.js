// import ApolloClient, { ApolloLink } from 'apollo-boost';
import AsyncStorage from '@react-native-community/async-storage';
import {EMULATOR_API_URL, TOKEN_STORAGE, WS_URL} from '../constants';
import {createUploadLink} from 'apollo-upload-client';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
import {onError} from 'apollo-link-error';
import {ApolloLink, Observable, split} from 'apollo-link';
import {WebSocketLink} from 'apollo-link-ws';
import {getMainDefinition} from 'apollo-utilities';

const request = async (operation) => {
  const token = await AsyncStorage.getItem(TOKEN_STORAGE);
  operation.setContext({
    headers: {
      Authorization: token,
    },
  });
};

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle;
      Promise.resolve(operation)
        .then((oper) => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) {
          handle.unsubscribe();
        }
      };
    }),
);

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const wsLink = new WebSocketLink({
  uri: WS_URL,
  options: async () => {
    // const token = await AsyncStorage.getItem(TOKEN_STORAGE);
    return {
      reconnect: true,
    };
  },
});

const uploadLink = createUploadLink({
  uri: EMULATOR_API_URL,
});

const httpLink = ApolloLink.from([errorLink, requestLink, uploadLink]);

const link = split(
  ({query}) => {
    const {kind, operation} = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
