//use client use because it is client side
//amra ekane client side sob kaj korbo
"use client";
import React, { createContext, useState } from "react";

//step-1: create context
export const CartContext = createContext();
//step-2: bringing CartContext for CardProvider Children
const CardProvider = ({ children }) => {
  //step-4:create a useState for CartItems or history
  const [cart, setCart] = useState([]);

  //step-5If someone sends a cardItems or something, we will consider it as an item.
  const addToCart = (item) => {
    //step-6: Take everything inside the cart and add item
    setCart([item, ...cart]);
  };

  //step-7:Share CartInfo with Ananya Component
  const cartInfo = {
    addToCart,
    cart,
  };

  //step-3: now power is cartContext because this All children given cartContext
  return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CardProvider;
