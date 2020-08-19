const INITIAL_STATE = {};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case 'SET_ADDRESS':
      return actions.payload;
    case 'CLEAR_ADDRESS':
      return {};
    default:
      return state;
  }
};
