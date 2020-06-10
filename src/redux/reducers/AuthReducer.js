const INITIAL_STATE = {
  isLogged: false,
  isSkipped: false,
  isStranger: false,
  isCustomer: false,
  isVendor: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOG_IN_VENDOR':
      return { ...state, isVendor: true, isLogged: true, isCustomer: false };
    case 'LOG_IN_CUSTOMER':
      return { ...state, isVendor: false, isLogged: true, isCustomer: true };
    case 'LOG_USER_OUT':
      return { ...state, isLogged: false, isSkipped: false };
    case 'SKIP_AUTHENTICATION':
      return { ...state, isSkipped: true };
    case 'REMOVE_STRANGER_STATUS':
      return { ...state, isStranger: false };
    default:
      return state;
  }
};
