import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {setStorage} from './redux/actions/AuthActions';
import {checkNetworkStatus} from './redux/actions/NetworkActions';
import MainFlow from './navigation/MainFlow';
import AuthFlow from './navigation/AuthFlow';
import VDFlow from './navigation/VDFlow';
import LoadingScreen from './screens/LoadingScreen';
import AsyncStorage from '@react-native-community/async-storage';
import NetworkError from './components/NetworkError';
import CreateProfileFLow from './navigation/CreateProfileFlow';
import {TOKEN_STORAGE, USER_STORAGE} from './constants';
import SplashScreen from 'react-native-splash-screen';
import EmailVerificationScreen from './screens/auth/EmailVerificationScreen';

const NavigationFlows = ({user, setStorage, offline, checkNetworkStatus}) => {
  const [appLoading, setAppLoading] = React.useState(false);

  React.useEffect(() => {
    checkNetworkStatus();
    checkStorage();
  }, [setStorage]);

  // Checks the async storage if token and user exists
  const checkStorage = async () => {
    setAppLoading(true);
    const storedToken = await AsyncStorage.getItem(TOKEN_STORAGE);
    const storedUser = await AsyncStorage.getItem(USER_STORAGE);

    if (storedToken && storedUser) {
      storeDataOnRedux(storedToken, storedUser);
    }
    setAppLoading(false);
  };

  // Sends a query to the server and assign the data to redux token
  const storeDataOnRedux = (t, u) => {
    u = JSON.parse(u);
    setStorage(u, t);
  };

  if (appLoading) {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
    return <LoadingScreen />;
  }

  if (offline) {
    return (
      <NetworkError onButtonClick={() => checkNetworkStatus()} show={offline} />
    );
  }

  return (
    <NavigationContainer>
      {user.id && user.status != 1 ? (
        <EmailVerificationScreen />
      ) : user && user.status == 1 && user.isCustomer ? (
        <MainFlow />
      ) : user && user.status == 1 && user.isVendor ? (
        <VDFlow />
      ) : user.id && user.status == 1 && !user.isVendor && !user.isCustomer ? (
        <CreateProfileFLow />
      ) : (
        <AuthFlow />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  const {isSkipped, isStranger, token, user} = state.auth;
  return {
    isSkipped,
    isStranger,
    token,
    user,
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps, {setStorage, checkNetworkStatus})(
  NavigationFlows,
);
