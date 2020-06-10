import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import MainFlow from './navigation/MainFlow';
import AuthFlow from './navigation/AuthFlow';
import VDFlow from './navigation/VDFlow';
import WelcomeScreen from './screens/WelcomeScreen';
import { StyleSheet, Platform, StatusBar, View } from 'react-native';
import { primaryColor } from './components/common/variables';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const NavigationFlows = ({
  isLogged,
  isSkipped,
  isStranger,
  isCustomer,
  isVendor,
}) => {
  if (isStranger) {
    return <WelcomeScreen />;
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
        {isLogged && isCustomer ? (
          <MainFlow />
        ) : isLogged && isVendor ? (
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
  const { isCustomer, isLogged, isSkipped, isStranger, isVendor } = state.auth;
  return {
    isLogged,
    isSkipped,
    isStranger,
    isVendor,
    isCustomer,
  };
};

export default connect(mapStateToProps)(NavigationFlows);
