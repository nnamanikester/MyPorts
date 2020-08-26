export const setAddress = (address) => {
  return {
    type: 'SET_ADDRESS',
    payload: address,
  };
};

export const clearAddress = () => {
  return {
    type: 'CLEAR_ADDRESS',
  };
};
