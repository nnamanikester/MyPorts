const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CART_STORAGE':
      return action.payload;
    default:
      return state;
  }
};
