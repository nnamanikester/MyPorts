const INITIAL_STATE = {
  vendorOrders: [],
  customerOrders: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_VENDOR_ORDERS':
      return action.payload;
    case 'SET_CUSTOMER_ORDERS':
      return action.payload;
    default:
      return state;
  }
};
