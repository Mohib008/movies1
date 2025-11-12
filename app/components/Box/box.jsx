
"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      className="box relative group transition-all duration-500 ease-in-out
                 bg-white/30 border border-white/20 rounded-lg
                 hover:bg-white/40 hover:border-white/30
                 focus-within:bg-white/50 focus-within:border-white/40
                 backdrop-blur-md overflow-hidden"
      onMouseEnter={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
      animate={{
        scale: focused ? 1.02 : 1,
        boxShadow: focused
          ? "0 0 22px rgba(250,204,21,0.9), 0 0 48px rgba(250,204,21,0.7)"
          : "0 0 12px rgba(250,204,21,0.5)",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <style jsx>{`
        @keyframes gentleGlow {
          0% {
            opacity: 0.25;
            transform: scale(1);
            filter: blur(10px);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
            filter: blur(16px);
          }
          100% {
            opacity: 0.25;
            transform: scale(1);
            filter: blur(10px);
          }
        }

        @keyframes hueCycle {
          0% {
            filter: hue-rotate(0deg);
          }
          25% {
            filter: hue-rotate(90deg);
          }
          50% {
            filter: hue-rotate(180deg);
          }
          75% {
            filter: hue-rotate(270deg);
          }
          100% {
            filter: hue-rotate(360deg);
          }
        }

        .breathing-glow {
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          z-index: 0;
          background: radial-gradient(
            circle,
            rgba(250, 204, 21, 0.35) 0%,
            rgba(0, 0, 0, 0) 70%
          );
          animation: gentleGlow 4s ease-in-out infinite, hueCycle 12s linear infinite;
          pointer-events: none;
          filter: blur(8px);
          mix-blend-mode: screen;
        }
      `}</style>

      {/* ✨ Soft glowing background behind box */}
      <div className="breathing-glow" />

      {/* Toggle button */}
      <button
        className="btn-toggle relative z-10 text-yellow-500 font-bold px-4 py-2"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Toggle box content"
      >
        {isOpen ? "–" : "+"}
      </button>

      {/* Animated box content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            className="relative z-10 p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default React.memo(Box);
