import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Thunk from 'redux-thunk';
import reducers from './redux/reducers';
import NavigationFlows from './NavigationFlows';
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from './apollo/config';
import {primaryColor} from './components/common/variables';
import {Platform, StatusBar, View, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(Thunk));

  SplashScreen.show();
  // React.useEffect(() => {
  // }, []);

  return (
    <>
      <View style={styles.statusBar}>
        <StatusBar
          translucent
          backgroundColor={primaryColor}
          barStyle="light-content"
        />
      </View>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <NavigationFlows />
        </Provider>
      </ApolloProvider>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default App;
