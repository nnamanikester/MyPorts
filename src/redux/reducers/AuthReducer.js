const INITIAL_STATE = {
  isLogged: false,
  isSkipped: false,
  isStranger: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOG_USER_IN':
      return {...state, isLogged: true};
    case 'LOG_USER_OUT':
      return {...state, isLogged: false, isSkipped: false};
    case 'SKIP_AUTHENTICATION':
      return {...state, isSkipped: true};
    case 'REMOVE_STRANGER_STATUS':
      return {...state, isStranger: false};
    default:
      return state;
  }
};
