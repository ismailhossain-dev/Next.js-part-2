import React from "react";

const FeedbackCard = ({ feedback }) => {
  const { message, date } = feedback;

  return (
    <div className="p-4  rounded-md shadow-md mb-4 w-full mx-auto bg-white flex justify-between">
      <div>
        <p className="text-sm text-gray-500 mb-1">Date: {date}</p>
        <p className="text-gray-800 mb-4">{message}</p>
      </div>
      <div className="flex space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Update
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
