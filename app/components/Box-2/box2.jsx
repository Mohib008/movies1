"use client";

import React from "react";
import { useState } from "react";
import Button from "../button";
import WatchedSummary from "./watchedSummary";
import WatchedMoviesList from "./watchedMoviesList";

function Box2({ tempWatchedData } = appProps) {
  // Initialize watched with tempWatchedData if provided, otherwise use an empty array
  const [ watched, setWatched ] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div>
      <div className="box">
        <Button />
        {isOpen2 && (
          <>
            <WatchedSummary watched={ watched } />
            <WatchedMoviesList watched={ watched } />
          </>
        )}
      </div>
    </div>
  );
}

export default Box2;
