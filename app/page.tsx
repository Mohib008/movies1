//import App from "@/app/components/App";
"use client";
import Navbar from "@/app/components/Navbar/navbar";
import "./globals.css";
//import tempMovieData from "@/app/components/tempMovieData";
//import tempWatchedData from "@/app/components/tempWatchedData";
import Box from "@/app/components/Box/box";
import Logo from "@/app/components/Navbar/logo";
import Search from "@/app/components/Navbar/search";
import NumResults from "@/app/components/Navbar/numResults";
import MoviesList from "@/app/components/Box/moviesList";
import WatchedSummary from "@/app/components/Box/watchedSummary";
import WatchedMoviesList from "@/app/components/Box/watchedMoviesList";
//import Loader from "@/app/components/loading";
import { useEffect, useState } from "react";

const KEY = "9001e482";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [watched] = useState([]);
  const query = "s=batman"; // Example query, can be modified

  useEffect(function () {
    async function fetchData() {
      setIsLoading(true); // Set loading state to true before fetching

      try {
        // Uncomment the following lines to fetch data dynamically
        // Fetching data from the OMDB API
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&${query}`
        );
        const data = await res.json();
        setMovies(data.Search || []);
        setIsLoading(false); // Set loading state to false after fetching
        // Uncomment the following lines to use local data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar movies={movies}>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <main className="main">
        <Box>
          {isLoading ? (
            <p className="flex flex-col items-center animate-pulse justify-center text-2xl text-gray-300 dark:text-gray-500 font-bold from-neutral-600 text-center m-100">
              Loading...
            </p>
          ) : (
            <MoviesList movies={movies} />
          )}
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList movies={watched} />
        </Box>
      </main>
    </div>
  );
}
