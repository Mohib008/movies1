"use client";
import { useState } from "react";
import Box1 from "./Box-1/box1";
import Box2 from "./Box-2/box2";

export default function App({ tempWatchedData, tempMovieData } = appProps) {
  return (
    <>
      <main className="main">
        <Box1 tempMovieData={tempMovieData} />
        <Box2 tempWatchedData={tempWatchedData} />
      </main>
    </>
  );
}
