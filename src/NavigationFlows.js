import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import MainFlow from './navigation/MainFlow';
import AuthFlow from './navigation/AuthFlow';
import WelcomeScreen from './screens/WelcomeScreen';
import {StyleSheet, Platform, StatusBar, View} from 'react-native';
import {primaryColor} from './components/common/variables';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const NavigationFlows = ({isLogged, isSkipped, isStranger}) => {
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
        {isLogged || isSkipped ? <MainFlow /> : <AuthFlow />}
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
  return {
    isLogged: state.auth.isLogged,
    isSkipped: state.auth.isSkipped,
    isStranger: state.auth.isStranger,
  };
};

export default connect(mapStateToProps)(NavigationFlows);
