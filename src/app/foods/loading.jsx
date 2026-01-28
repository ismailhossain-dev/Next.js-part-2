import FoodCardSkeletons from "@/components/skeletons/FoodCardSkeletons";
import React from "react";
// Most important work for me
const loading = () => {
  return (
    <div className="grid my-5 grid-cols-3 gap-2">
      {/* we are create 12 size array for foodLoading */}
      {[...Array(12)].map((_, index) => (
        <FoodCardSkeletons key={index}></FoodCardSkeletons>
      ))}
    </div>
  );
};

export default loading;
