export const setCustomerProfile = (customer) => {
  return {
    type: 'SET_CUSTOMER_PROFILE',
    payload: customer,
  };
};

export const clearCustomerProfile = () => {
  console.log('Customer Profile');
  return {
    type: 'CLEAR_CUSTOMER_PROFILE',
  };
};
