"use client";
import React from "react";



// (your existing imports)

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

interface NavbarProps {
  children: React.ReactNode;
  movies: Movie[];
}

export default function Navbar({ children, movies }: NavbarProps) {
  return (
    <div>
      <nav className="nav-bar">{children}</nav>
    </div>
  );
};