const INITIAL_STATE = [];

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case 'SET_ADVERTS':
      return actions.payload;
    default:
      return state;
  }
};
