import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {Login} from './redux/actions/AuthActions';
import MainFlow from './navigation/MainFlow';
import AuthFlow from './navigation/AuthFlow';

const NavigationFlows = ({isLogged}) => {
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
  };
};

export default connect(mapStateToProps, {Login})(NavigationFlows);
