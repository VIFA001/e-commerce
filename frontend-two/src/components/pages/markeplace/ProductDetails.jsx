"use client";
import { ALLProducts } from "@/constants/productsData";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { formatCurrency } from "@/utils/helper";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/features/cart/cartSlice";

const ProductDetails = () => {
  const params = useParams();
  const [productionInformation, setProductInformation] = useState(undefined);

  const dispatch = useDispatch();
  function getProductionDetails() {
    const singleProductionDetails = ALLProducts.find(
      (item) => item.product_id === params.product_id
    );
    setProductInformation(singleProductionDetails);
  }

  useEffect(() => {
    getProductionDetails();
  }, []);

  if (productionInformation === undefined) {
    return (
      <div className="grid place-items-center h-[60vh]">
        <h1> sorry product not found</h1>
      </div>
    );
  }
  return (
    <section className="container mx-auto py-20 px-4 flex  flex-col lg:flex-row gap-8">
      <div>
        <img
          className="w[500px] h-[500px] object-cover rounded-md"
          src={productionInformation.product_image}
          alt={productionInformation.product_name}
        />
      </div>

      <div className="bg-amber-50 p-4 rounded-md">
        <h1 className="text-amber-900 text-4xl font-serif mb-4">
          {productionInformation.product_name}
        </h1>
        <p>{formatCurrency(productionInformation.product_price)}</p>
        <p
          className="
        border-y border-gray-200 py-2 mb-4 text-lg"
        >
          <strong>Category</strong> : {productionInformation.product_category}
        </p>
        <p>{productionInformation.product_description}</p>
        <button
          onClick={() => dispatch(addItemToCart(productionInformation))}
          className="bg-amber-500 text-blaack p-2 font-semibold w-full shadow-2xl rounded-md hover:opacity-78 cursor-pointe"
        >
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
