const INITIAL_STATE = {
  isLogged: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOG_USER_IN':
      return {...state, isLogged: true};
    case 'LOG_USER_OUT':
      return {...state, isLogged: false};
    default:
      return state;
  }
};
