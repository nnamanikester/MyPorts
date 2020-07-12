export const calculateRating = (rates) => {
  if (rates.length === 0) {
    const n = 0;
    return n.toFixed(1);
  }
  let total = 0;
  rates.forEach((r) => {
    total += r;
  });
  const rate = total / rates.length;
  return rate.toFixed(1);
};

export const calculateRatePecentage = (rates, rate) => {
  if (rates.length === 0) {
    return 0;
  }
  let total = 0;
  rates.forEach((r) => {
    if (parseInt(rate) === parseInt(r)) {
      total += 1;
    }
  });

  const percentage = (total / rates.length) * 100;

  return parseInt(percentage.toFixed(1));
};
