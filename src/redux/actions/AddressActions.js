export const setAddress = (address) => {
  return {
    type: 'SET_ADDRESS',
    payload: address,
  };
};

export const clearAddress = () => {
  console.log('Clear Address');
  return {
    type: 'CLEAR_ADDRESS',
  };
};
