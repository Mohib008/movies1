"use client";
import React, { use } from "react";
import { useEffect, useState } from "react";

const KEY = "9001e482";

export default function MoviesDetails({ selectedId, onClose }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovieDetails = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      console.log(data);
    };
    getMovieDetails();
  }, []);

  return (
    <div className="details">
      {selectedId}
      <button className="btn-back" onClick={onClose}>
        &larr;
      </button>
    </div>
  );
}
