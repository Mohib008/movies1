"use client";
import React from "react";
import Logo from "./logo";
import Input from "./input";
import NumResults from "./numResults";
// Navbar component that combines Logo, Input, and NumResults components

function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <Logo />
        <Input />
        <NumResults />
      </nav>
    </div>
  );
}

export default Navbar;
