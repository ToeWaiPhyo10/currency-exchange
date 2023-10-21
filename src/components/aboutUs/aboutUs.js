import Image from "next/image";
import React from "react";
import logoPics from "@/images/logo-no-background (1).png";
import TitleText from "../base/titletext";

const Aboutus = () => {
  return (
    <div className="grid grid-cols-5 gap-8 items-center" id="AboutMe">
      <div className="col-span-3 lg:col-span-5">
        <TitleText text="About Us" />
        <p className="text-gray-600 text-justify text-lg md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="col-span-2 lg:col-span-5">
        <Image
          src={logoPics}
          alt="Currency Logo"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Aboutus;
