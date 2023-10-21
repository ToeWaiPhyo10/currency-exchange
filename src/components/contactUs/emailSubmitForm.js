"use client";
import React from "react";
import { useForm } from "react-hook-form";
import CurrencyLabel from "../base/currencyLabel";
import { toast } from "react-toastify";

const EmailSubmitForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    //use nextjs server route in order to secure api token
    await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      if (!res.ok) toast("Failed to send message", "error");
      toast("Email send successfully", "success");

      reset();
      return res.json();
    });
  };
  const validateEmail = (value) => {
    if (!value) {
      return "Email is required";
    }
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      return "Invalid email address";
    }
    return true;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <CurrencyLabel text={"Your Name"} />
        <input
          type="text"
          id="name"
          name="name"
          {...register("name", { required: true, maxLength: 20 })}
          className="w-full px-3 py-2 border rounded-lg"
        />
        {errors.name?.type === "required" && (
          <p className="text-red-600"> Name is required</p>
        )}
      </div>

      <div className="mb-4">
        <CurrencyLabel text={"Your Email"} />
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", { required: true, validate: validateEmail })}
          className="w-full px-3 py-2 border rounded-lg"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <CurrencyLabel text={"Subject"} />
        <input
          type="text"
          id="subject"
          name="subject"
          {...register("subject", { required: true })}
          className="w-full px-3 py-2 border rounded-lg"
        />
        {errors.name?.type === "required" && (
          <p className="text-red-600">Subject is required</p>
        )}
      </div>

      <div className="mb-4">
        <CurrencyLabel text={"Your Message"} />
        <textarea
          id="message"
          name="message"
          rows="4"
          {...register("message")}
          className="w-full px-3 py-2 border rounded-lg"
        ></textarea>
      </div>

      <button
        type="submit"
        className="rounded bg-btnPrimary px-[0.875rem] py-2 text-white active:bg-dark disabled:bg-gray-200"
      >
        Submit
      </button>
    </form>
  );
};

export default EmailSubmitForm;
