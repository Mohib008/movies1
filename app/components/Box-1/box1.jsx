"use client";

import React from "react";
import { useState } from "react";
//import Button from "../button";
import MoviesList from "./moviesList";
function Box1({ tempMovieData } = appProps) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => {
          setIsOpen1((open) => !open);
        }}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MoviesList tempMovieData={tempMovieData} />}
    </div>
  );
}

export default Box1;
