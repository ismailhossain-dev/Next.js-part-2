import ReviewCardSkeleton from "@/components/skeletons/ReviewCardSkeleton";
import React from "react";
//This is ReviewCard Skeleton structure
const ReviewLoading = () => {
  return (
    <div className="grid my-5 grid-cols-3 gap-2 ">
      {/* Taking 12 card for loading the card */}
      {[...Array(12)].map((_, index) => (
        <ReviewCardSkeleton key={index}></ReviewCardSkeleton>
      ))}
    </div>
  );
};

export default ReviewLoading;
