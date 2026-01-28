"use client";
import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-2xl p-5 border animate-pulse">
      {/* User Info */}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="h-4 w-1/4 bg-gray-300 rounded mb-3"></div>

      {/* Review Text */}
      <div className="space-y-2 mb-4">
        <div className="h-3 w-full bg-gray-200 rounded"></div>
        <div className="h-3 w-full bg-gray-200 rounded"></div>
        <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="h-7 w-16 bg-gray-300 rounded-full"></div>
        <div className="h-3 w-20 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
