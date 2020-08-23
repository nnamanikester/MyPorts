const INITIAL_STATE = {
  profile: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_VENDOR_PROFILE':
      return {...state, profile: action.payload};
    case 'SET_VENDOR':
      return {...state, ...action.payload};
    default:
      return state;
  }
};
