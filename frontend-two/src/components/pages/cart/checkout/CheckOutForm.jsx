"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";

const PaystackDynamic = dynamic(() => import("./PaymentWithPaystack"), {
  ssr: false,
});
const CheckOutForm = () => {
  const { totalCost } = useSelector((state) => state.cart);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  if (totalCost <= 0) {
    return redirect("/marketplace");
  }

  return (
    <form className="my-20 px-4 shadow-md rounded-lg max-w-2xl mx-auto grid gap-4">
      <h2 className="text-amber-800 text-xl font-semibold text-center">
        Complete the form to place your order
      </h2>
      <input
        type="text"
        onChange={(event) =>
          setCustomerDetails({ ...customerDetails, name: event.target.value })
        }
        value={customerDetails.name}
        placeholder="Enter Your Name"
        className="p-2 w-full border border-amber-500 rounded-md focus:outline focus:outline-amber-800"
      />
      <input
        type="text"
        onChange={(event) =>
          setCustomerDetails({ ...customerDetails, email: event.target.value })
        }
        value={customerDetails.email}
        placeholder="Email Address Example@mail"
        className="p-2 w-full border border-amber-500 rounded-md focus:outline focus:outline-amber-800"
      />
      <input
        type="text"
        onChange={(event) =>
          setCustomerDetails({
            ...customerDetails,
            address: event.target.value,
          })
        }
        value={customerDetails.address}
        placeholder="Delivey Address"
        className="p-2 w-full border border-amber-500 rounded-md focus:outline focus:outline-amber-800"
      />

      <PaymentWithPaystack customerDetails={customerDetails} />
    </form>
  );
};

export default CheckOutForm;
