const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CART_STORAGE':
      return action.payload;
    case 'CLEAR_CART_STORAGE':
      return {};
    default:
      return state;
  }
};
