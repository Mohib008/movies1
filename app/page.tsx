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
import { useEffect, useState } from "react";

const KEY = "9001e482";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [watched] = useState([]);
  const query = "s=batman"; // Example query, can be modified

  useEffect(function () {
    async function fetchData() {
      try {
        // Uncomment the following lines to fetch data dynamically
        // Fetching data from the OMDB API
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&${query}`
        );
        const data = await res.json();
        setMovies(data.Search || []);
        console.log(data.Search);
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
          <MoviesList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList movies={watched} />
        </Box>
      </main>
    </div>
  );
}
