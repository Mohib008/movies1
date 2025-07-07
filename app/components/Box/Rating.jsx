"use client";
import React, { use } from "react";
import Star from "@/app/components/Box/Star";
import { useState } from "react";

function Rating({ maxRating = 5 }) {
  const [rating, setRating] = useState(1); // Default rating is set to 5 stars
  // This component displays a static rating of 5 stars.
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        {Array.from({ length: maxRating }, (_, index) => (
          <span key={index} className="text-yellow-500 text-2xl">
            <Star key={index} />
          </span>
        ))}
      </div>
      <p className="text-gray-300 text-2xl font-bold">{rating || ""}</p>
    </div>
  );
}

export default Rating;
