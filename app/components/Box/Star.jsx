"use client";
import React from "react";

function Star({ onRate, full, half, onHoverIn, onHoverOut, index }) {
  return (
    <span
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      className="cursor-pointer w-4 h-4 flex items-center justify-center transition-transform duration-150 ease-in-out hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-4 h-4 shrink-0"
        stroke="#fcc419"
        strokeWidth="2"
      >
        <dev>
          <linearGradient id={`half-fill-${index}`}>
            <stop offset="50%" stopColor="#fcc419" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </dev>

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={
            full
              ? "#fcc419" // full star
              : half
              ? `url(#half-fill-${index})` // half star
              : "transparent" // ✅ not "none" (fixes shaking)
          }
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 
             0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 
             2.888a1 1 0 00-.363 1.118l1.518 
             4.674c.3.922-.755 1.688-1.538 
             1.118l-3.976-2.888a1 1 0 
             00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 
             1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 
             1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </span>
  );
}

export default Star;
