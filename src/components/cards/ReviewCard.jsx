"use client";
import Image from "next/image";
import React, { useState } from "react";

const ReviewCard = ({ review }) => {
  const [likes, setLikes] = useState(review.likes.length);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  return (
    <div className="max-w-md bg-white shadow-lg rounded-2xl p-5 border">
      {/* User Info */}
      <div className="flex items-center gap-4 mb-3">
        <Image
          width={56}
          height={56}
          src={review.photo}
          alt={review.user}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{review.user}</h3>
          <p className="text-sm text-gray-500">{review.email}</p>
        </div>
      </div>

      {/* Rating */}
      <p className="text-yellow-500 font-medium mb-2">⭐ Rating: {review.rating}/5</p>

      {/* Review Text */}
      <p className="text-gray-700 text-sm mb-3">{review.review}</p>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 px-3 py-1 rounded-full border transition ${
            liked ? "bg-red-100 text-red-600 border-red-300" : "hover:bg-gray-100"
          }`}
        >
          ❤️ {likes}
        </button>

        <span>{new Date(review.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
