import React from "react";

const FeedbackSkeleton = () => {
  return (
    <div className="p-4 border rounded-md shadow animate-pulse mb-4 max-w-md mx-auto">
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div> {/* Date */}
      <div className="h-6 bg-gray-300 rounded mb-4"></div> {/* Message */}
      <div className="flex space-x-2">
        <div className="h-8 w-20 bg-gray-300 rounded"></div> {/* Update button */}
        <div className="h-8 w-20 bg-gray-300 rounded"></div> {/* Delete button */}
      </div>
    </div>
  );
};

export default FeedbackSkeleton;
