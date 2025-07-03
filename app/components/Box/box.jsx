"use client";

import React, { useState } from "react";
//import Button from "../button";
import WatchedSummary from "./watchedSummary";
import WatchedMoviesList from "./watchedMoviesList";

function Box({ children }) {
  // Initialize movies with tempWatchedData if provided, otherwise use an empty array

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}

export default React.memo(Box);
