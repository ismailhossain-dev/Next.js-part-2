import ReviewCardSkeleton from "@/components/skeletons/ReviewCardSkeleton";
import React from "react";
//eta amra useState er mardome review te dekabo
const ReviewLoading = () => {
  return (
    <div className="grid my-5 grid-cols-3 gap-2 ">
      {[...Array(12)].map((_, index) => (
        <ReviewCardSkeleton key={index}></ReviewCardSkeleton>
      ))}
    </div>
  );
};

export default ReviewLoading;
