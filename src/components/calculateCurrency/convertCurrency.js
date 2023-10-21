"use client";
import React, { useState } from "react";
import CurrencySelectBox from "./currencySelectBox";
import { currencyList } from "@/utils/currencyList";
import { InverseCurrency } from "@/utils/inverseCurrency";
import CurrencyLabel from "../base/currencyLabel";
import CurrencyButton from "../base/currencyButton";

const ConvertCurrency = () => {
  const options = currencyList().map((data) => {
    const valuepairs = {
      value: data.code,
      label: `${data.name}(${data.code})`,
    };
    return valuepairs;
  });

  const [selectedCurrency, setSelectedCurrency] = useState(
    options.find((data) => data.value == "USD") ?? ""
  );
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState(null);
  const [currencyRate, setCurrencyRate] = useState(null);
  const [resultAmount, setResultAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const mmk = options.find((data) => data.value == "MMK");

  const amountInputHandler = (e) => {
    setCurrencyRate(null);
    setResultAmount(null);
    if (!e.target.value.trim()) {
      setError("Please enter an amount greater than 0");
    } else {
      setError(null);
    }
    setAmount(e.target.value.replace(/^0+/, ""));
  };
  const handleConvert = async () => {
    setLoading(true);
    if (error == null) {
      const data = await fetch(
        `/api/convertCurrency?from=${selectedCurrency.value}&amount=${amount}`
      );
      const result = await data.json();

      if (result.data) {
        setCurrencyRate(result.data.conversion_rate);
        setResultAmount(result.data.conversion_result);
      }
    }
    setLoading(false);
  };
  return (
    <div className="bg-white shadow-md rounded p-3 flex flex-col">
      <CurrencyLabel text={"Amount"} />
      <input
        type="number"
        value={amount}
        onChange={amountInputHandler}
        onWheel={(e) => e.target.blur()}
        className={`px-3 py-2 border rounded-lg ${
          error == null ? "border-gray-200" : "border-red-600"
        }`}
        onKeyDown={(e) => {
          ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
          setCurrencyRate(null);
          setResultAmount(null);
        }}
        onFocus={(e) => e.target.select()}
      />

      {error !== null && (
        <label className="text-xs text-red-600 ">{error}</label>
      )}
      <label className="block font-medium text-gray-700 mt-4">From </label>
      <CurrencySelectBox
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={(value) => {
          setSelectedCurrency(value);
          setResultAmount(null);
          setCurrencyRate(null);
        }}
        options={options}
        isDisable={false}
      />
      <label className="block font-medium text-gray-700 mt-4">To </label>
      <CurrencySelectBox
        selectedCurrency={options.find((data) => data.value == "MMK")}
        setSelectedCurrency={() => {}}
        options={options}
        isDisable={true}
      />
      <CurrencyButton
        text={loading ? "Converting..." : "Convert"}
        onClick={handleConvert}
        disabled={loading}
      />
      {resultAmount && currencyRate && (
        <div>
          <h1 className="text-2xl mt-3 text-black">
            {amount}
            {" " + selectedCurrency.label}={" " + resultAmount}
            {" " + mmk.label}
          </h1>
          <h1 className="text-lg text-gray-700">
            {1}
            {" " + selectedCurrency.label}={" " + currencyRate}
            {" " + mmk.label}
          </h1>
        </div>
      )}
    </div>
  );
};

export default ConvertCurrency;
// {resultAmount && (
//   <h1 className="text-sm">
//     {amount}
//     {selectedCurrency.label}={resultAmount}
//     {mmk.label}
//   </h1>
// )}
// {currencyRate && (
//   <h1 className="text-sm">
//     {1}
//     {selectedCurrency.label}={currencyRate}
//     {mmk.label}
//   </h1>
// )}
