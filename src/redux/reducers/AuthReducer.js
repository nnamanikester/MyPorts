const INITIAL_STATE = {
  token: '',
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOG_USER_OUT':
      return {user: {}, token: ''};
    case 'SET_STORAGE':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case 'SET_EMAIL_ADDRESS':
      return {...state, user: {...state.user, email: action.payload}};
    case 'SET_EMAIL_SETTINGS':
      return {
        ...state,
        user: {
          ...state.user,
          customer: {...state.user.customer, emailSetting: action.payload},
        },
      };
    case 'SET_NOTIFICATION_SETTINGS':
      return {
        ...state,
        user: {
          ...state.user,
          customer: {
            ...state.user.customer,
            notificationSetting: action.payload,
          },
        },
      };
    default:
      return state;
  }
};
