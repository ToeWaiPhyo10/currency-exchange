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

        setRateArray(rateArray);
      }
      setLoading(false);
    };
    getUpdatedRateList();
  }, []);
  return { rateArray, loading };
}
