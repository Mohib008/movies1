"use client";
import React, { useState, useEffect } from "react";
import { Film, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Movie } from "../types";

interface NavbarProps {
  children: React.ReactNode;
  movies?: Movie[];
}

export default function Navbar({ children }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const navbarHeight = 80;

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
        className={`fixed top-4 z-50 flex flex-row items-center justify-between w-[calc(100%-4rem)] mx-8 max-w-[1800px] px-12 py-5 rounded-xl transition-all duration-300 shadow-lg border backdrop-blur-lg ${
          scrolled
            ? "bg-white/50 border-white/30"
            : "bg-white/30 border-white/20"
        }`}
        style={{ height: `${navbarHeight - 20}px` }}
      >
        {/* Animated Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer px-5 py-3 rounded-lg"
          whileHover={{
            scale: 1.05,
            textShadow:
              "0 0 12px rgba(250,204,21,0.9), 0 0 24px rgba(250,204,21,0.7)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.9)]"
          >
            <Film size={32} />
          </motion.div>

          <motion.span className="text-3xl font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.9)] px-3">
            MoviesSwift
          </motion.span>

          <motion.div
            whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="text-yellow-300 drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]"
          >
            <Play size={22} />
          </motion.div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{
                scale: 1.05,
                textShadow:
                  "0 0 12px rgba(250,204,21,0.9), 0 0 24px rgba(250,204,21,0.7)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="text-yellow-400 text-2xl font-semibold drop-shadow-[0_0_6px_rgba(250,204,21,0.8)] px-5 py-2 rounded-lg"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Right Side (children) */}
        <div className="flex items-center gap-5">
          {React.Children.map(children, (child) => (
            <div className="px-4 py-2">{child}</div>
          ))}
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: `${navbarHeight + 20}px` }} />
    </>
  );
}
