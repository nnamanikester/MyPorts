const INITIAL_STATE = {
  isSkipped: false,
  isStranger: false,
  token: '',
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOG_USER_OUT':
      return { ...state, user: {}, token: '', isSkipped: false };
    case 'SKIP_AUTHENTICATION':
      return { ...state, isSkipped: true };
    case 'REMOVE_STRANGER_STATUS':
      return { ...state, isStranger: false };
    case 'SET_STORAGE':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case 'SET_EMAIL_ADDRESS':
      return { ...state, user: { ...state.user, email: action.payload } };
    default:
      return state;
  }
};
