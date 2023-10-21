export const InverseCurrency = ({ rate, amount }) => {
  const exchangeRate = 1 / rate;
  const exchangeAmount = amount * exchangeRate;
  return exchangeAmount;
};
