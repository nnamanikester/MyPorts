export const setCustomerProfile = (customer) => {
  return {
    type: 'SET_CUSTOMER_PROFILE',
    payload: customer,
  };
};
