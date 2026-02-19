"use client";
import ReviewCard from "@/components/cards/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";
import { Anek_Bangla } from "next/font/google";

//bangle font use for review  page
const anek = Anek_Bangla({
  //normar width
  width: "400",
});

const ReviewsPage = () => {
  //data fetching useEffect and useState
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        //reviews chole asle amra data take off kore disi
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ReviewLoading></ReviewLoading>;
  }
  return (
    <div className={anek.className}>
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-500">{reviews.length} Foods </span> Funds
      </h2>

      {/* card map and grid card  */}
      <div className="grid my-5 grid-cols-3 gap-2">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
