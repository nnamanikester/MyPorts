import AsyncStorage from '@react-native-community/async-storage';

export const logUserOut = () => {
  return async (dispatch) => {
    await AsyncStorage.removeItem('@myports/user');
    await AsyncStorage.removeItem('@myports/token');
    return dispatch({ type: 'LOG_USER_OUT' });
  };
};

export const skipAuthentication = () => {
  return {
    type: 'SKIP_AUTHENTICATION',
  };
};

export const removeStrangerStatus = () => {
  return {
    type: 'REMOVE_STRANGER_STATUS',
  };
};

export const setStorage = (user, token) => ({
  type: 'SET_STORAGE',
  payload: { user, token },
});

export const setEmailAddress = (email) => ({
  type: 'SET_EMAIL_ADDRESS',
  payload: email,
});
