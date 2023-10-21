import React from "react";
import ConvertCurrency from "./convertCurrency";
import Image from "next/image";
import currencyPics from "@/images/person-using-currency-exchange-app (2).png";

const CalculateCurrency = () => {
  return (
    <div className="grid grid-cols-6  items-center">
      <div className="col-span-4 lg:col-span-6">
        <div className="rounded-full bg-gray-300  shadow-lg">
          <ConvertCurrency />
        </div>
      </div>
      <Image
        src={currencyPics}
        alt="ToeWaiPhyo"
        className="col-span-2 lg:col-span-6"
      />
    </div>
  );
};

export default CalculateCurrency;
