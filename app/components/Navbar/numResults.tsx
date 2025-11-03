import React from "react";
import { Movie } from "../types";

interface NumResultsProps {
  movies?: Movie[];
}

function NumResults({ movies = [] }: NumResultsProps) {
  return (
    <div>
      <p className="num-results text-sm flex items-center justify-center gap-2 text-[#fcc419] dark:text-[#fcc419]">
         <strong>{movies.length}</strong> results
      </p>
    </div>
  );
}

export default NumResults;
