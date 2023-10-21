import React from "react";
import Select from "react-select";

const CurrencySelectBox = ({
  selectedCurrency,
  setSelectedCurrency,
  options,
  isDisable,
}) => {
  return (
    <Select
      options={options}
      value={selectedCurrency}
      onChange={setSelectedCurrency}
      isDisabled={isDisable}
    />
  );
};

export default CurrencySelectBox;
