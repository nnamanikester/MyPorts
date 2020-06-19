import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import reducers from './redux/reducers';
import NavigationFlows from './NavigationFlows';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo/config';

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
