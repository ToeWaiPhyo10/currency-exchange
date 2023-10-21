import CurrencyList from "currency-list";
export const currencyList = () => {
  const currencyList = CurrencyList.getAll("en_US");
  const currencyArray = [];
  for (const key in currencyList) {
    currencyArray.push({
      name: currencyList[key].name,
      code: key,
      symbol: currencyList[key].symbol,
    });
  }

  return currencyArray;
};
