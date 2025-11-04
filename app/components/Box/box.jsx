"use client";

import React, { useState } from "react";
import WatchedSummary from "./watchedSummary";
import WatchedMoviesList from "./watchedMoviesList";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="box relative transition-all duration-500 ease-in-out 
                 hover:bg-yellow-50 focus-within:bg-yellow-50
                 hover:shadow-[0_0_14px_theme('colors.yellow.400')]
                 focus-within:shadow-[0_0_18px_theme('colors.yellow.400')]
                 hover:shadow-opacity-80 focus-within:shadow-opacity-90
                 group"
    >
      {/* Subtle animated glow overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 ease-out shadow-[0_0_18px_theme('colors.yellow.400')]" />

      <button
        className="btn-toggle relative z-10"
        onClick={() => {
          setIsOpen((open) => !open);
        }}
        aria-label="Toggle box content"
      >
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && <div className="relative z-10">{children}</div>}
    </div>
  );
}

export default React.memo(Box);
