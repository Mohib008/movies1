"use client";
import React from "react";
import { Movie } from "../types"; // Adjust the import path as necessary

// (your existing imports)

interface NavbarProps {
  children: React.ReactNode;
  movies: Movie[];
}

export default function Navbar({ children }: NavbarProps) {
  return (
    <div>
      <nav className="nav-bar">{children}</nav>
    </div>
  );
}
