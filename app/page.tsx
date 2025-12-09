"use client";

import Navbar from "@/app/components/Navbar/navbar";
import "./globals.css";
import Box from "@/app/components/Box/box";
import Logo from "@/app/components/Navbar/logo";
import Search from "@/app/components/Navbar/search";
import NumResults from "@/app/components/Navbar/numResults";
import MoviesList from "@/app/components/Box/moviesList";
import WatchedSummary from "@/app/components/Box/watchedSummary";
import WatchedMoviesList from "@/app/components/Box/watchedMoviesList";
import MoviesDetails from "@/app/components/MoviesDetails";
import { useEffect, useState } from "react";

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};


const KEY = "9001e482";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [watched] = useState<Movie[]>([]);
  const [query, setQuery] = useState("Prison");
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handleMovieSelect(id: string): void {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }
  function handleCloseMovieSelect(): void {
    setSelectedId(null);
  }

  useEffect(() => {
    async function fetchData() {
      if (!query) return;
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${encodeURIComponent(query)}`
        );
        if (!res.ok) throw new Error("Network error: Unable to connect to OMDb.");
        const data = await res.json();

        if (data.Response === "False") {
          if (data.Error === "Too many results.") {
            setError("Too many results. Please type a more specific title.");
            setMovies([]);
            return;
          }
          if (data.Error === "Movie not found!") {
            setError("No movies found. Try a different search.");
            setMovies([]);
            return;
          }
          throw new Error(data.Error);
        }

        setMovies(data.Search || []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(
          typeof err === "object" && err !== null && "message" in err
            ? String((err as { message?: string }).message)
            : "An unknown error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length >= 3) {
      fetchData();
    } else {
      setMovies([]);
      setError("Type at least 3 characters to search");
    }
  }, [query]);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
      
      <Navbar movies={movies}>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      {/* ✨ Main Content */}
      <main className="main w-full max-w-[1800px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Box>
            {isLoading ? (
              <p className="flex flex-col items-center animate-pulse justify-center text-2xl text-gray-300 dark:text-gray-500 font-bold text-center">
                Loading...
              </p>
            ) : error ? (
              <p className="flex flex-col items-center justify-center text-2xl text-red-500 font-bold text-center">
                {error}
              </p>
            ) : (
              <MoviesList movies={movies} onSelectedMovies={handleMovieSelect} />
            )}
          </Box>

          <Box>
            {selectedId ? (
              <MoviesDetails
                selectedId={selectedId}
                onClose={handleCloseMovieSelect}
              />
            ) : (
              <>
                <WatchedSummary watched={watched} />
                <WatchedMoviesList movies={watched} />
              </>
            )}
          </Box>
        </div>
      </main>
          {/* ✨ Prism Glass Ribbon just 1px below Navbar */}
<div className="relative w-full h-[20px] rounded-lg overflow-hidden backdrop-blur-md mt-1">
  <style jsx>{`
    /* Breathing pulse for background glow */
    @keyframes gentleGlow {
      0% {
        opacity: 0.3;
        transform: scale(1);
        filter: blur(10px);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.05);
        filter: blur(16px);
      }
      100% {
        opacity: 0.3;
        transform: scale(1);
        filter: blur(10px);
      }
    }

    /* Shimmer sweep motion */
    @keyframes shimmerMotion {
      0% {
        transform: translateX(-100%);
        opacity: 0.3;
      }
      50% {
        transform: translateX(100%);
        opacity: 1;
      }
      100% {
        transform: translateX(-100%);
        opacity: 0.3;
      }
    }

    /* Slow hue rotation through color spectrum */
    @keyframes hueCycle {
      0% {
        filter: hue-rotate(0deg);
      }
      25% {
        filter: hue-rotate(90deg);
      }
      50% {
        filter: hue-rotate(180deg);
      }
      75% {
        filter: hue-rotate(270deg);
      }
      100% {
        filter: hue-rotate(360deg);
      }
    }

    /* Core ribbon body with edge fade */
    .glass-ribbon {
      position: absolute;
      inset: 0;
      border-radius: 0.75rem;
      background: linear-gradient(
        to right,
        rgba(250, 204, 21, 0.35),
        rgba(255, 105, 180, 0.45),
        rgba(64, 224, 208, 0.4),
        rgba(186, 85, 211, 0.4)
      );
      backdrop-filter: blur(8px);
      opacity: 0.85;
      animation: hueCycle 15s linear infinite;
      mix-blend-mode: screen;
      mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }

    /* Dual shimmer reflections */
    .glass-ribbon::before,
    .glass-ribbon::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 35%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      animation: shimmerMotion 6s ease-in-out infinite;
      mix-blend-mode: screen;
      pointer-events: none;
    }

    .glass-ribbon::after {
      top: 6px;
      height: 2px;
      opacity: 0.6;
      animation-delay: 1.5s;
    }

    /* Soft breathing glow behind ribbon */
    .glow-overlay {
      position: absolute;
      inset: 0;
      border-radius: 0.75rem;
      background: radial-gradient(
        circle,
        rgba(250, 204, 21, 0.4) 0%,
        rgba(0, 0, 0, 0) 70%
      );
      filter: blur(12px);
      opacity: 0.6;
      animation: gentleGlow 4s ease-in-out infinite, hueCycle 15s linear infinite;
      pointer-events: none;
      mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }
  `}</style>

  <div className="glass-ribbon" />
  <div className="glow-overlay" />
</div>
    </div>
  );
}
