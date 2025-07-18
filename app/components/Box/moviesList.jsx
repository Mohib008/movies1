import React from "react";

function MoviesList({ movies }) {
  return (
    <div>
      <ul className="list">
        {movies?.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
              <p>
                <span>🗓</span>
                <span>{movie.Year}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
