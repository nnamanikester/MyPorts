export const setVendorOrders = (orders) => {
  return {
    type: 'SET_VENDOR_ORDERS',
    payload: orders,
  };
};

export const setCustomerOrders = (orders) => {
  return {
    type: 'ST_CUSTOMER_ORDERS',
    payload: orders,
  };
};
