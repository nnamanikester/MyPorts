export const setCartStorage = (cart) => {
  return {
    type: 'SET_CART_STORAGE',
    payload: cart,
  };
};

export const clearCart = () => {
  console.log('Clear Cart');
  return {
    type: 'CLEAR_CART_STORAGE',
  };
};
