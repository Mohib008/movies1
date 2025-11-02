"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star as StarIcon } from "lucide-react";

function Rating({ maxRating = 10 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleRating = (r) => {
    setRating(r);
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  const current = tempRating || rating;
  const showNumber = tempRating > 0 || clicked; // show only on hover or click
  const glowIntensity = current / maxRating;

  return (
    <div className="flex items-center justify-center gap-3 p-2 h-auto">
      {/* ⭐ Stars */}
      <div className="flex items-center gap-2">
        {Array.from({ length: maxRating }, (_, i) => {
          const filled = tempRating ? tempRating >= i + 1 : rating >= i + 1;
          return (
            <motion.button
              key={i}
              whileHover={{ scale: 1.2, rotate: 6 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setTempRating(i + 1)}
              onMouseLeave={() => setTempRating(0)}
              onClick={() => handleRating(i + 1)}
              className="focus:outline-none"
            >
              <motion.div
                animate={{
                  scale: filled ? (clicked ? 1.2 : 1.05) : 1,
                  boxShadow: filled
                    ? "0 0 16px rgba(250, 204, 21, 0.8)"
                    : "0 0 0 rgba(0,0,0,0)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 16 }}
              >
                <StarIcon
                  size={34}
                  className={`transition-all duration-200 ${
                    filled
                      ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_14px_rgba(250,204,21,0.9)]"
                      : "text-gray-400 hover:text-yellow-300"
                  }`}
                />
              </motion.div>
            </motion.button>
          );
        })}
      </div>

      {/* 🌟 Rating Number - appears only on hover or click */}
      {showNumber && (
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: clicked ? 1.2 : 1,
            boxShadow: `0 0 ${12 + glowIntensity * 16}px rgba(250, 204, 21, ${
              0.6 + glowIntensity * 0.4
            })`,
          }}
          transition={{ duration: 0.25, type: "spring", stiffness: 200 }}
          className={`w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-400/10 border border-yellow-400/50 text-yellow-300 text-xl font-bold drop-shadow-[0_0_14px_rgba(250,204,21,0.9)]`}
        >
          {current}
        </motion.div>
      )}
    </div>
  );
}

export default Rating;
