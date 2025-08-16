"use client";
import React, { use } from "react";
import { useEffect, useState } from "react";
import Rating from "./Box/Rating";
import Loading from "./loading";

const KEY = "9001e482";

export default function MoviesDetails({ selectedId, onClose }) {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);

  const {
    Title: title,
    Year: year,
    Type: type,
    Runtime: runtime,
    Plot: plot,
    Genre: genre,
    Poster: poster,
    imdbID: imdbId,
    imdbRating: imdbRating,
    imdbVotes: imdbVotes,
    Director: director,
    Writer: writer,
    Actors: actors,
    Awards: awards,
    Metascore: metascore,
    Released: released,
  } = movies;

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovies(data);
      setLoading(false);
    };
    getMovieDetails();
  }, [selectedId]);

  return (
    <div className="details">
      {loading ? (
        <Loading />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onClose}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movies} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <span>
                {released} &bull;🕒 {runtime}
              </span>
              <span>⭐ {imdbRating}</span>

              <span>🔖 {genre}</span>
            </div>
          </header>
          <section className="details-info">
            <div className="rating">
              <Rating />
            </div>
            <p>
              💬 <em>{plot}</em>
            </p>
            <p>👥 Starring: {actors}</p>
            <p>🎬 Directed by: {director}</p>
          </section>
          <div>{selectedId}</div>
        </>
      )}
    </div>
  );
}
