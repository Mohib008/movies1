import React from "react";
import { Movie } from "../types";

interface NumResultsProps {
  movies?: Movie[];
}

function NumResults({ movies = [] }: NumResultsProps) {
  return (
    <div>
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </div>
  );
}

export default NumResults;
