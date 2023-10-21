import React from "react";

const TitleText = ({ text }) => {
  return (
    <h1 className="text-4xl md:text-2xl sm:text-xl xs:text-lg font-semibold">
      {text}
    </h1>
  );
};

export default TitleText;
