import { currencyList } from "@/utils/currencyList";
import { useEffect, useState } from "react";

export default function useCurrencyRate() {
  const [rateArray, setRateArray] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUpdatedRateList = async () => {
      setLoading(false);
      const response = await fetch("api/currencyRate");
      const result = await response.json();

      if (result.data) {
        const rateList = result.data;
        //the api provide only rate so need to use currency-list library to show currency name and symbol
        const rateArray = currencyList().map((currency) => {
          const { code } = currency;
          if (rateList.conversion_rates[code] !== undefined) {
            return {
              ...currency,
              conversionRate: rateList.conversion_rates[code],
            };
          }
          return currency;
        });
        //in order to filter currerency who do not have rate and MMK
        const usedArray = rateArray.filter(
          (data) => data.conversionRate && data.code !== "MMK"
        );
        setRateArray(usedArray);
      }
      setLoading(false);
    };
    getUpdatedRateList();
  }, []);
  return { rateArray, loading };
}
