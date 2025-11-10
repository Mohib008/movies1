import React from "react";

function MoviesList({ movies, onSelectedMovies }) {
  const uniqueMovies = movies?.filter(
    (movie, index, self) =>
      index === self.findIndex((m) => m.imdbID === movie.imdbID)
  );

  return (
    <div>
      <ul className="list list-movies">
        {uniqueMovies?.map((movie) => (
          <li key={movie.imdbID}>
            <img
              src={movie.Poster}
              alt={`${movie.Title} poster`}
              onClick={() => onSelectedMovies(movie.imdbID)}
            />
            <h3>{movie.Title}</h3>
            <div>
              <p>
                <span>🗓</span>
                <span>{movie.Year}</span>
                <span>📽️ {movie.Type}</span>
                <span>🕒 {movie.Runtime}</span>
                <span>💬 {movie.Plot}</span>
                <span>🔖 {movie.Genre}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
