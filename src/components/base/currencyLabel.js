import React from "react";

const CurrencyLabel = ({ text }) => {
  return (
    <label className="block font-medium text-gray-700 mt-4 text-md sm:text-sm xs:text-xs">
      {text}
    </label>
  );
};

export default CurrencyLabel;
