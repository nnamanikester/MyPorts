const INITIAL_STATE = {};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case 'SET_WALLET':
      return actions.payload;
    case 'CLEAR_WALLET':
      return {};
    default:
      return state;
  }
};
