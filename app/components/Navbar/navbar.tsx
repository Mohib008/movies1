"use client";
import React, { useState, useEffect } from "react";
import { Movie } from "../types";
import { Film, Play } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  children: React.ReactNode;
  movies: Movie[];
}

export default function Navbar({ children }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const navbarHeight = 64;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Movies", href: "#movies" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-white/30 border-b border-white/40 shadow-lg"
            : "backdrop-blur-sm bg-white/20 border-b border-white/30 shadow-md"
        }`}
        style={{ height: `${navbarHeight}px` }}
      >
        {/* Animated Stylish Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{
            scale: 1.1,
            textShadow:
              "0 0 12px rgba(250,204,21,0.9), 0 0 24px rgba(250,204,21,0.7)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.9)]"
          >
            <Film size={28} />
          </motion.div>

          <motion.span className="text-2xl font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.9)]">
            MovieHub
          </motion.span>

          <motion.div
            whileHover={{ rotate: [0, 10, -10, 0], scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className="text-yellow-300 drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]"
          >
            <Play size={20} />
          </motion.div>
        </motion.div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{
                scale: 1.1,
                textShadow:
                  "0 0 12px rgba(250,204,21,0.9), 0 0 24px rgba(250,204,21,0.7)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="text-yellow-400 text-xl font-semibold drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Right side / children */}
        <div className="flex items-center gap-4">{children}</div>
      </nav>

      {/* Spacer */}
      <div style={{ height: `${navbarHeight}px` }} />
    </>
  );
}
