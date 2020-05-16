import React, {useEffect, useState} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Thunk from 'redux-thunk';
import reducers from './redux/reducers';
import NavigationFlows from './NavigationFlows';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(Thunk));

  return (
    <Provider store={store}>
      <NavigationFlows />
    </Provider>
  );
};

export default App;
