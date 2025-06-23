import React from "react";
import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

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
