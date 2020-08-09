import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {setStorage} from './redux/actions/AuthActions';
import {checkNetworkStatus} from './redux/actions/NetworkActions';
import MainFlow from './navigation/MainFlow';
import AuthFlow from './navigation/AuthFlow';
import VDFlow from './navigation/VDFlow';
import WelcomeScreen from './screens/WelcomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import AsyncStorage from '@react-native-community/async-storage';
import NetworkError from './components/NetworkError';
import CreateProfileFLow from './navigation/CreateProfileFlow';
import {TOKEN_STORAGE, USER_STORAGE} from './constants';
import SplashScreen from 'react-native-splash-screen';

const NavigationFlows = ({
  isSkipped,
  isStranger,
  user,
  setStorage,
  offline,
  checkNetworkStatus,
}) => {
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

  if (isStranger) {
    return <WelcomeScreen />;
  }

  if (appLoading) {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
    return <LoadingScreen />;
  }

  if (offline) {
    return (
      <NetworkError onButtonClick={() => checkNetworkStatus()} show={offline} />
    );
  }

  return (
    <NavigationContainer>
      {user && user.isCustomer ? (
        <MainFlow />
      ) : user && user.isVendor ? (
        <VDFlow />
      ) : isSkipped ? (
        <MainFlow />
      ) : user.id && !user.isVendor && !user.isCustomer ? (
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
