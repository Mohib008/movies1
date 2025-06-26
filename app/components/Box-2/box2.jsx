"use client";

import React, { useState } from "react";
//import Button from "../button";
import WatchedSummary from "./watchedSummary";
import WatchedMoviesList from "./watchedMoviesList";

function Box2({ tempWatchedData }) {
  // Initialize watched with tempWatchedData if provided, otherwise use an empty array
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => {
          setIsOpen2((open) => !open);
        }}
      >
        {isOpen2 ? "–" : "+"}
      </button>

      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </>
      )}
    </div>
  );
}

export default React.memo(Box2);
