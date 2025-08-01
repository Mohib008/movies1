"use client";
import React from "react";

interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ query, setQuery }: SearchProps) {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
