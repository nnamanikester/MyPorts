import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import MainFlow from './navigation/MainFlow';
import AuthFlow from './navigation/AuthFlow';
import WelcomeScreen from './screens/WelcomeScreen';

const NavigationFlows = ({isLogged, isSkipped, isStranger}) => {
  if (isStranger) {
    return <WelcomeScreen />;
  }

  return (
    <NavigationContainer>
      {!isLogged ? <AuthFlow /> : <MainFlow />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isLogged: state.auth.isLogged,
    isSkipped: state.auth.isSkipped,
    isStranger: state.auth.isStranger,
  };
};

export default connect(mapStateToProps)(NavigationFlows);
