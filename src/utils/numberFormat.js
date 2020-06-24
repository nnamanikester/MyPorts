export const formatMoney = (amount) => {
  const formatType = new Intl.NumberFormat('en-US');
  return formatType.format(amount);
};
