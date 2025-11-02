"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search as SearchIcon } from "lucide-react";

interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ query, setQuery }: SearchProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full flex justify-center">
      {/* Input container */}
      <div className="relative w-[40rem] flex items-center justify-center">
        {/* Input field */}
        <motion.input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="
            search
            text-yellow-400
            placeholder-yellow-300
            bg-transparent
            appearance-none
            caret-yellow-400
            text-center
            w-full
            h-[4.4rem]
          "
          style={{
            WebkitBoxShadow: "0 0 0px 1000px transparent inset",
            MozBoxShadow: "0 0 0px 1000px transparent inset",
            lineHeight: "2.2rem",
          }}
          animate={{
            translateY: focused ? -2 : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />

        {/* Subtle always-on glow */}
        <motion.div
          className="absolute inset-0 rounded-[0.7rem] pointer-events-none"
          animate={{
            boxShadow:
              "0 0 8px rgba(250,204,21,0.4), 0 0 16px rgba(250,204,21,0.2)",
          }}
        />

        {/* Always-visible icon */}
        <motion.div
          className="absolute left-6 top-1/2 -translate-y-1/2 text-yellow-400 pointer-events-none"
          animate={{
            scale: focused ? [1, 1.1, 1] : 1,
            textShadow: focused
              ? "0 0 14px rgba(250,204,21,0.9), 0 0 28px rgba(250,204,21,0.6)"
              : "0 0 6px rgba(250,204,21,0.3)",
          }}
          transition={{ repeat: focused ? Infinity : 0, duration: 1 }}
        >
          <SearchIcon size={28} />
        </motion.div>

        {/* Focused box glow */}
        <AnimatePresence>
          {focused && (
            <motion.div
              key="glow-box"
              className="absolute inset-0 rounded-[0.7rem] pointer-events-none border border-yellow-400"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                boxShadow:
                  "0 0 24px rgba(250,204,21,0.8), 0 0 48px rgba(250,204,21,0.6)",
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, yoyo: Infinity, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Search;
