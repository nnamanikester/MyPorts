const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATIONS':
      return action.payload;
    default:
      return state;
  }
};
