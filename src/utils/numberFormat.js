import 'intl';
import 'intl/locale-data/jsonp/en';

export const formatMoney = (amount) => {
  const formatType = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
  });
  const currency = formatType.format(parseInt(amount));

  return currency.replace('NGN', '\u20A6');
};

export const formatCardNo = (no) => {
  let acc = '';
  for (let i = 0; i < no.length; i++) {
    if (i % 4 === 0) {
      acc += '  ';
    }
    acc += no[i];
  }
  return acc;
};

export const formatShortNumber = (num) => {
  if (Math.abs(num) > 999999999) {
    return Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1) + 'b';
  }
  if (Math.abs(num) > 999999) {
    return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + 'm';
  }
  if (Math.abs(num) > 999) {
    return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k';
  }
  return Math.sign(num) * Math.abs(num);
};
