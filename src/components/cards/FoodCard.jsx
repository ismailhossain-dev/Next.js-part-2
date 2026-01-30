import Link from "next/link";
import React from "react";
import CardButton from "../buttons/CardButton";

const FoodCard = ({ food }) => {
  return (
    <div className="bg-black border-2 border-gray-500 text-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col ">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-white">{food.title}</h2>

        <p className="text-sm text-white">Category: {food.category}</p>

        <p className="text-xl font-bold text-green-600">৳ {food.price}</p>

        {/* Buttons */}
        <div className="flex gap-3 pt-3 mt-auto">
          <CardButton food={food}></CardButton>

          <Link
            href={`/foods/${food.id}`}
            className="flex-1 border border-gray-300 text-center  text-white py-2 rounded-lg text-sm font-medium hover:bg-pink-500 transition "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
