export const formatMoney = (amount) => {
  const formatType = new Intl.NumberFormat('en-US');
  return formatType.format(amount);
};

export const formatCardNo = (no) => {
  let acc = '';
  for (let i = 0; i < no.length; i++) {
    if (i % 4 === 0) acc += '  ';
    acc += no[i];
  }
  return acc;
};
