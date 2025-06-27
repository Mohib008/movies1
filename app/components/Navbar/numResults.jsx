import React from "react";
import tempMovieData from "../tempMovieData";
import tempWatchedData from "../tempWatchedData";

function NumResults({ movies = { tempWatchedData, tempMovieData } }) {
  // If movies is not provided, use tempMovieData as a fallback
  //const movieList = movies.tempMovieData || tempMovieData;
  return (
    <div>
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </div>
  );
}

export default NumResults;
