"use client";
import React, { use } from "react";
import Star from "@/app/components/Box/Star";
import { useState } from "react";

function Rating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0); // Default rating is set to 5 stars
  // This component displays a static rating of 5 stars.
  const [tempRating, setTempRating] = useState(0);
  function handleRating(rating) {
    setRating(rating);
  }
  // This function updates the rating state when a star is clicked.
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-4 bg-white p-4 rounded-lg w-60 h-12 justify-center transition-all duration-300 ease-in-out">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p className="text-gray-300 text-3xl font-bold">
        {tempRating || rating || ""}
      </p>
    </div>
  );
}

export default Rating;
