import React from "react";

const CurrencyButton = ({ text, onClick, disabled }) => {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded bg-btnPrimary p-[0.875rem] text-white active:bg-dark disabled:bg-gray-200 mt-5"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CurrencyButton;
