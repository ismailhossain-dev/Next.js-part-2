import Link from "next/link";
import React from "react";
import CardButton from "../buttons/CardButton";
import Image from "next/image";

const FoodCard = ({ food }) => {
  const { foodImg, title, category, price } = food;
  if (!food.title) {
    <h2>Page Not Found</h2>;
  }
  return (
    <div className="bg-black border-2 border-gray-500 text-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col ">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <Image
          src={foodImg}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
          width={300}
          height={150}
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-white">{title}</h2>

        <p className="text-sm text-white">Category: {category}</p>

        <p className="text-xl font-bold text-green-600">৳ {price}</p>

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
