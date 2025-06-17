"use client";
import { useState } from "react";
import Box1 from "./box1";
import Box2 from "./box2";

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
