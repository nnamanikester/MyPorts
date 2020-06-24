export const setCustomerProfile = (customer) => {
  return {
    type: 'CUSTOMER_PROFILE',
    payload: customer,
  };
};
