const INITIAL_STATE = {
  isConnected: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NETWORK_STATUS':
      return {...state, isConnected: action.payload};
    default:
      return state;
  }
};
