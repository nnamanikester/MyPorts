export const logUserIn = () => {
  return {
    type: 'LOG_USER_IN',
  };
};

export const logUserOut = () => {
  return {
    type: 'LOG_USER_OUT',
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
