export const setWallet = (wallet) => {
  return {
    type: 'SET_WALLET',
    payload: wallet,
  };
};
export const clearWallet = () => {
  console.log('Clear Wallet');
  return {
    type: 'CLEAR_WALLET',
  };
};
