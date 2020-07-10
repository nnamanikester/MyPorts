const INITIAL_STATE = {
  profile: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CUSTOMER_PROFILE':
      return {...state, profile: action.payload};
    default:
      return state;
  }
};
