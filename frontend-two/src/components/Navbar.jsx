"use client";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <header className="border border-amber-500 p-2">
      <nav className="container mx-auto flex justify-between items-center">
        <img
          className="w-20 h-20"
          src="https://th.bing.com/th/id/OIP.DxYco29ZX-f1ch4IvO98ZgHaHa?w=193&h=193&c=7&r=0&o=5&pid=1.7"
          alt="our logo"
        />
        <div className="flex items-center gap-4">
          <Link
            className="flex gap-2 items-center font-medium hover:text-amber-500 transition-colours duration-500"
            href={"/marketplace"}
          >
            Shop
          </Link>
          <Link
            className="relative flex gap-2 items-center-lg font-medium hover:text-amber-500 transition-colours duration-500"
            href={"/cart"}
          >
            <p className="absolute right-[35px] -top-[25px] bg-amber-600 text-white h-6 w-5 font-semibold rounded-full grid place-items-center">
              {cartItems.length}
            </p>
            <ShoppingCart />
            <span>Cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
