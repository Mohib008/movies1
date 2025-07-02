"use client";
import React from "react";
import Logo from "./logo";
import Search from "./search";
import NumResults from "./numResults";
// Navbar component that combines Logo, Input, and NumResults components

// Movie type definition removed because type aliases are not allowed in .jsx files.

/**
 * @param {{ children: React.ReactNode, movies: Movie[] }} props
 */
function Navbar({ children, movies }) {
  return (
    <div>
      <nav className="nav-bar">{children}</nav>
    </div>
  );
}

export default Navbar;
