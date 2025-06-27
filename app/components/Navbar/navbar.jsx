"use client";
import React from "react";
import Logo from "./logo";
import Search from "./search";
import NumResults from "./numResults";
// Navbar component that combines Logo, Input, and NumResults components

function Navbar({ children }) {
  return (
    <div>
      <nav className="nav-bar">{children}</nav>
    </div>
  );
}

export default Navbar;
