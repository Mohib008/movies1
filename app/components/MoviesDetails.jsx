"use client";
import React, { useEffect, useState } from "react";
import Rating from "./Box/Rating";
import Loading from "./loading";

const KEY = "9001e482";

export default function MoviesDetails({ selectedId, onClose }) {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [like, setLike] = useState(0);

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

  const {
    Title: title,
    Runtime: runtime,
    Plot: plot,
    Genre: genre,
    Poster: poster,
    imdbRating,
    Released: released,
    Actors: actors,
    Director: director,
  } = movies;

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
            <img src={poster} alt={`Poster of ${title}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <span>
                {released} &bull; 🕒 {runtime}
              </span>
              <span>⭐ {imdbRating}</span>
              <span>🔖 {genre}</span>
            </div>
          </header>

          {/* FIX: prevent jumping */}
          <section className="details-info mt-4 flex flex-col gap-3">
            <div
              className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl w-full shadow-lg p-4 border border-zinc-800 flex justify-center"
              style={{
                minHeight: "50px", // Prevent layout jump
                overflow: "hidden",
                willChange: "transform",
              }}
            >
              <Rating maxRating={5} />
            </div>

            <div className="space-y-2">
              <p>
                💬 <em>{plot}</em>
              </p>
              <p>👥 Starring: {actors}</p>
              <p>🎬 Directed by: {director}</p>
            </div>
          </section>

          <div>{selectedId}</div>
          <div>
            <button className="" onClick={() => setLike((like) => like + 1)}> 
              👍 {like} Likes
            </button>
          </div>
        </>
      )}
    </div>
  );
}
