import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { setStorage } from './redux/actions/AuthActions';
import MainFlow from './navigation/MainFlow';
import AuthFlow from './navigation/AuthFlow';
import VDFlow from './navigation/VDFlow';
import WelcomeScreen from './screens/WelcomeScreen';
import SplashScreen from './screens/SplashScreen';
import { StyleSheet, Platform, StatusBar, View } from 'react-native';
import { primaryColor } from './components/common/variables';
import AsyncStorage from '@react-native-community/async-storage';
import NetworkError from './components/NetworkError';
import { Network } from './utils';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const NavigationFlows = ({ isSkipped, isStranger, user, setStorage }) => {
  const [offline, setOffline] = useState(false);
  const [appLoading, setAppLoading] = useState(false);

  useEffect(() => {
    checkNetworkStatus();
    checkStorage();
  }, [offline]);

  // Check if network is available
  const checkNetworkStatus = async () => {
    const isConnected = await Network.isNetworkAvailable();
    if (!isConnected) {
      return setOffline(true);
    }
    return setOffline(false);
  };

  // Checks the async storage if token and user exists
  const checkStorage = async () => {
    setAppLoading(true);
    const storedToken = await AsyncStorage.getItem('@myports/token');
    const storedUser = await AsyncStorage.getItem('@myports/user');

    if (storedToken && storedUser) {
      storeDataOnRedux(storedToken, storedUser);
    }
    setAppLoading(false);
  };

  // Sends a query to the server ans assign the data to redux token
  const storeDataOnRedux = (t, u) => {
    u = JSON.parse(u);
    setStorage(u, t);
  };

  if (isStranger) {
    return <WelcomeScreen />;
  }

  if (appLoading) {
    return <SplashScreen />;
  }

  if (offline) {
    return (
      <NetworkError onButtonClick={() => checkNetworkStatus()} show={offline} />
    );
  }

  return (
    <>
      <View style={styles.statusBar}>
        <StatusBar
          translucent
          backgroundColor={primaryColor}
          barStyle="light-content"
        />
      </View>
      <NavigationContainer>
        {user && user.isCustomer ? (
          <MainFlow />
        ) : user && user.isVendor ? (
          <VDFlow />
        ) : isSkipped ? (
          <MainFlow />
        ) : (
          <AuthFlow />
        )}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

const mapStateToProps = (state) => {
  const { isSkipped, isStranger, token, user } = state.auth;
  return {
    isSkipped,
    isStranger,
    token,
    user,
  };
};

export default connect(mapStateToProps, { setStorage })(NavigationFlows);
