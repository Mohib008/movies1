// ---- original code ---- //

//"use client";
//import React from "react";
//
//function WatchedSummary({ watched }) {
//  const average = (arr) => arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
//  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
//  const avgUserRating = average(watched.map((movie) => movie.userRating));
//  const avgRuntime = average(watched.map((movie) => movie.runtime));
//  return (
//    <div>
//      <div className="summary">
//        <h2>Movies you watched</h2>
//        <div>
//          <p>
//            <span>#️⃣</span>
//            <span>{watched.length} movies</span>
//          </p>
//          <p>
//            <span>⭐️</span>
//            <span>{avgImdbRating}</span>
//          </p>
//          <p>
//            <span>🌟</span>
//            <span>{avgUserRating}</span>
//          </p>
//          <p>
//            <span>⏳</span>
//            <span>{avgRuntime} min</span>
//          </p>
//        </div>
//      </div>
//    </div>
//  );
//}
//
//export default WatchedSummary;

// ----- new code ----- //

"use client";
import React from "react";

function WatchedSummary({ watched }) {
  const average = (arr) =>
    arr.length > 0 ? arr.reduce((acc, cur) => acc + cur, 0) / arr.length : 0;

  const avgImdbRating = average(
    watched.map((movie) => Number(movie.imdbRating) || 0)
  ).toFixed(1);

  const avgUserRating = average(
    watched.map((movie) => Number(movie.userRating) || 0)
  ).toFixed(1);

  const avgRuntime = average(
    watched.map((movie) => Number(movie.runtime) || 0)
  ).toFixed(1);

  return (
    <div>
      <div className="summary">
        <h2>Movies you watched</h2>
        <div>
          <p>
            <span>#️⃣</span>
            <span>{watched.length} movies</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>{avgImdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{avgUserRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{avgRuntime} min</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WatchedSummary;
