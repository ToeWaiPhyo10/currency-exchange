import React from "react";
import EmailSubmitForm from "./emailSubmitForm";
import TitleText from "../base/titletext";

const ContactUs = () => {
  return (
    <div>
      <div className=" text-black text-center py-4 mt-6" id="Contact">
        <TitleText text={"Contact Us"} />
      </div>
      <div className="container mx-auto p-4 bg-white shadow-lg mt-4">
        <h2 className="text-2xl lg:text-xl md:text-lg sm:text-sm">
          Get in Touch
        </h2>
        <p className="mb-4 text-lg lg:text-sm ">
          Use the form below to send us a message:
        </p>
        <EmailSubmitForm />
      </div>
    </div>
  );
};

export default ContactUs;
