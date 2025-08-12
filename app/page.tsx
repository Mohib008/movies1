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

// API key for OMDb API

const KEY = "9001e482";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [watched] = useState([]);
  const [query, setQuery] = useState("Prison"); // Default query
  const [error, setError] = useState("");
  //const tempQuery = "s=superman"; // Example query, can be modified
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handleMovieSelect(id: string): void {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
    // Toggle selection: if the same movie is clicked again, deselect it
  }
  function handleCloseMovieSelect(): void {
    setSelectedId(null);
  }

  useEffect(() => {
    async function fetchData() {
      if (!query) return; // Don’t fetch if empty query

      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (!res.ok) {
          throw new Error("Network error: Unable to connect to OMDb.");
        }
        const data = await res.json();

        if (data.Response === "False") {
          if (data.Error === "Too many results.") {
            setError(
              "Too many results found. Please type a more specific title."
            );
            setMovies([]);
            return;
          }
          if (data.Error === "Movie not found!") {
            setError("No movies found. Try a different search.");
            setMovies([]);
            return;
          }
          throw new Error(data.Error); // only throw for truly unexpected errors
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

    // only search if query has 3+ characters
    if (query.length >= 3) {
      fetchData();
    } else {
      setMovies([]);
      setError("Type at least 3 characters to search");
    }
  }, [query]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar movies={movies}>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <main className="main">
        <Box>
          {isLoading ? (
            <p className="flex flex-col items-center animate-pulse justify-center text-2xl text-gray-300 dark:text-gray-500 font-bold from-neutral-600 text-center m-100">
              Loading...
            </p>
          ) : error ? (
            <p className="flex flex-col items-center justify-center text-2xl text-red-500 font-bold text-center m-100">
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
      </main>
    </div>
  );
}
