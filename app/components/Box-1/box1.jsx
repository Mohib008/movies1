"use client";

import React from "react";
import { useState } from "react";
import Button from "../button";
import MoviesList from "./moviesList";
function Box1({ tempMovieData } = appProps) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div>
      <div className="box">
        <Button />
        {isOpen1 && <MoviesList tempMovieData={tempMovieData} />}
      </div>
    </div>
  );
}

export default Box1;
