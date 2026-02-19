import { redirect } from "next/navigation";
import React from "react";
//next.js docs teke niye aschi kotho golo jinish ke genarate korar jorno
//amra detail page 3 ta id ekta diye ditesi

export function generateStaticParams() {
  return [{ id: "52866" }, { id: "52859" }, { id: "52881" }];
}
//details page potiti food jorno dynamic matadata

//next.js documentation teke deke kortesi
//part-3 v:7 13minute
export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);

  //details jodi data na take default vae {} set kore disi
  const { details = {} } = await res.json();
  return {
    title: details.title,

    // other filed
  };
  //server teke console object dive
  // console.log("hello how are you", data);
  // return da"ta.details;
}
//finished meta data
// Fetch single food
const getSingleFood = async (id) => {
  const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);

  const data = await res.json();
  return data.details;
};

// Food Details Page and we are bringing dynamic id url in params
const page = async ({ params }) => {
  console.log(params);
  const { id } = await params;
  console.log("single id ", id);
  const food = await getSingleFood(id);
  //   console.log(food);
  // If food not found
  //jokon user website url olta palta man diye dive tokon jodi food tar title na take tahole eta dekabe
  if (!food.title) {
    redirect("/foods");
  }

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black border-2 border-gray-500 rounded-2xl shadow-lg p-6">
        {/* Image */}
        <div className="w-full h-[350px] overflow-hidden rounded-xl">
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white">{food.title}</h1>

          <div className="flex gap-3 flex-wrap">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              {food.category}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              {food.area}
            </span>
          </div>

          <p className="text-2xl font-bold text-green-600">৳ {food.price}</p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition">
              Add to Cart
            </button>

            {food.video && (
              <a
                href={food.video}
                target="_blank"
                className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium transition"
              >
                Watch Video ▶
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
