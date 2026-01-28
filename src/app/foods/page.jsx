import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import { resolve } from "styled-jsx/css";
// data fetching
const getFoods = async () => {
  const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
  const data = await res.json();
  //we are taking 3 second for seeing the Loading Skeleton
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //we are taking data from foods
  return data.foods || [];
};

//
const FoodsPage = async () => {
  const foods = await getFoods();

  return (
    <div>
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-500">{foods.length} Foods </span> Funds
      </h2>

      {/* card map and grid card  */}
      <div className="grid my-5 grid-cols-3 gap-2">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
