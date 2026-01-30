"use client";

// import { cartContext } from "@/contaxt/CardProvider";
import { CartContext } from "../../context/CardProvider";
import React, { use, useState } from "react";
//we are bringing the button tho client and giving in life button different
const CardButton = ({ food }) => {
  //This is button button handle
  const [inCart, setInCart] = useState(false);

  const { addToCart } = use(CartContext);

  //amra ei handle cartItems or history page er jorno onekboro ekta akj koresi
  const handleAdd2Cart = () => {
    addToCart(food);
    setInCart(true);
  };

  return (
    <button
      onClick={handleAdd2Cart}
      //If inCart true then button disabled
      disabled={inCart}
      className="flex-1  bg-green-600 hover:bg-green-700 text-white py-2  rounded-lg text-sm  transition text-center disabled:bg-gray-100 disabled:text-gray-400"
    >
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default CardButton;
