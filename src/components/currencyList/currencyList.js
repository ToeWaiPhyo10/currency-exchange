"use client";
import React from "react";
import ReactBootstrapTable from "./reactBootstrapTable";
import useCurrencyRate from "@/hooks/useCurrencyRate";
import Loading from "../Loading";

const CurrencyList = () => {
  //use as hook so we can reuse in other module
  const { rateArray, loading } = useCurrencyRate();

  return (
    <div className="mt-3 w-full overflow-auto">
      <h1 className="mb-5 text-3xl text-center md:text-2xl sm:text-xl xs:text-lg">
        Currency Exchange Rate(based on MMK)
      </h1>
      {loading ? (
        <Loading />
      ) : (
        rateArray.length > 0 && <ReactBootstrapTable data={rateArray} />
      )}
    </div>
  );
};

export default CurrencyList;
