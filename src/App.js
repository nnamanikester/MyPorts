import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import reducers from './redux/reducers';
import NavigationFlows from './NavigationFlows';
import { ApolloProvider } from '@apollo/react-hooks';
// import { client } from './apollo/config';
import ApolloClient from 'apollo-boost';
import AsyncStorage from '@react-native-community/async-storage';
import { emulatorApiUrl } from './config';

async function getToken() {
  return await AsyncStorage.getItem('token');
}

export const client = new ApolloClient({
  uri: emulatorApiUrl,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJja2JtZTZhd2I1c25yMDk2OHVmd2t6MmF1IiwiaWF0IjoxNTkyNjQxNjAyfQ.4lE326QrXTjXVOzGD8-NMgCGrDeNUiP3sOdxHQgZCj4',
  },
});

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(Thunk));

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationFlows />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
