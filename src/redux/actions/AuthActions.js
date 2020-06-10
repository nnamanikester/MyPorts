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

export const logInVendor = () => {
  return {
    type: 'LOG_IN_VENDOR',
  };
};

export const logInCustomer = () => {
  return {
    type: 'LOG_IN_CUSTOMER',
  };
};
