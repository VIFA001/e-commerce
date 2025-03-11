"use client";
import { formatCurrency } from "@/utils/helper";

import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const CartSummary = () => {
  const { totalCost } = useSelector((state) => state.cart);

  const router = useRouter();
  function handleNavigation() {
    if (totalCost > 8) {
      return router.push("/checkout");
    }
  }

  return (
    <div className="bg-amber-50 p-4 rounded-md">
      <h3 className="text-3xl font-bold font-serif">Cart Summary</h3>
      <div className="flex justify-between my-6">
        <p className="font-semibold text-lg">Sub Total</p>
        <p>{formatCurrency(totalCost)}</p>
      </div>

      <button
        onClick={handleNavigation}
        className="bg-amber-800 p-3 w-full rounded-md font-semibold"
      >
        Proceed to payment
      </button>
    </div>
  );
};

export default CartSummary;
