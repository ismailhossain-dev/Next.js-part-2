"use client";
import CardItemsHistory from "@/components/cards/CardItemsHistory";
import { CartContext } from "@/context/CardProvider";
import React, { use } from "react";

//History page
//ekane main kele CartContext and CartButton kela history page jorno amra CartButton and CartProvider kaj kortese
const CartItems = () => {
  const { cart } = use(CartContext);
  console.log(cart);
  return (
    <div>
      <h3>{cart.length} Items Added</h3>
      {/* <h2>{cart.category}</h2> */}
      {cart.map((item) => (
        <CardItemsHistory key={item.id} item={item}></CardItemsHistory>
      ))}
    </div>
  );
};

export default CartItems;
