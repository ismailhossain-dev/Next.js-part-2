import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";
export const metadata = {
  title: "All Food",
  description: "Best FastFood in Rangamati",
};
//import css
// import style from "./food.module.css";
// data fetching
//step-4 search m:70 v:6
const getFoods = async (search) => {
  //searchPrams use for search input

  //search step -5
  //user jodi url ?search=name food name leke jodi food gola take tahoel seta dekabe
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    // food er 10 secode pore pore se random page dive and cooking hobe
    { next: { revalidate: 10 } },
  );
  const data = await res.json();
  //we are taking 3 second for seeing the Loading Skeleton
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //we are taking data from foods
  return data.foods || [];
};

//step-1 searchPrams for search
//searchParams ta asche next.js docs
const FoodsPage = async ({ searchParams }) => {
  //url kew ?search = leke kichu na lake tahole ekta "" daw
  //step-2
  const { search = "" } = await searchParams;
  // console.log(data);
  //step-3
  const foods = await getFoods(search);

  return (
    <div>
      {/* <div className="flex justify-between items-center"> */}
      {/* next docs css use  */}
      {/* <h2 className={`${style.bgred}`}>Hello text</h2> */}
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-500">{foods.length} Foods </span> Funds
      </h2>

      <InputSearch></InputSearch>

      <div className="flex gap-5">
        {/* card map and grid card  */}
        <div className="grid my-5 grid-cols-3 gap-2">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
        {/* This is history food side */}
        <div className="w-[300px] border-2 rounded-xl p-4 mt-4">
          <h2 className="text-2xl font-bold">Cart Items</h2>
          <hr />
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
