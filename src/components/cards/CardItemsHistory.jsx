import React from "react";

const CardItemsHistory = ({ item }) => {
  return (
    <div className=" p-2 bg-white text-black mt-3 text-center rounded shadow-2xl">
      {/* <img className="w-full h-[40px] object-cover" src={item.foodImg} alt="" /> */}
      <h2>{item.title}</h2>
      <h2>Category: {item.category}</h2>
      <p>{item.price}</p>
    </div>
  );
};

export default CardItemsHistory;
