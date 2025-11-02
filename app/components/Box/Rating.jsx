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
  const showBox = tempRating > 0 || clicked; // box only appears on hover or click

  const glowIntensity = current / maxRating;

  const pulse = {
    animate: {
      boxShadow: [
        `0 0 ${10 * glowIntensity}px rgba(250,204,21,${0.4 * glowIntensity})`,
        `0 0 ${18 * glowIntensity}px rgba(250,204,21,${0.9 * glowIntensity})`,
        `0 0 ${10 * glowIntensity}px rgba(250,204,21,${0.4 * glowIntensity})`,
      ],
      scale: [1, 1 + 0.05 * glowIntensity, 1],
    },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <div className="flex items-center justify-center gap-3 p-2 h-auto">
      {/* ⭐ Stars */}
      <div className="flex items-center gap-2">
        {Array.from({ length: maxRating }, (_, i) => {
          const filled = tempRating ? tempRating >= i + 1 : rating >= i + 1;
          return (
            <motion.button
              key={i}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setTempRating(i + 1)}
              onMouseLeave={() => setTempRating(0)}
              onClick={() => handleRating(i + 1)}
              className="focus:outline-none"
            >
              <motion.div
                animate={filled ? pulse.animate : { scale: 1 }}
                transition={pulse.transition}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-400/10 border border-yellow-400/50"
              >
                <StarIcon
                  size={24}
                  className={`transition-colors duration-200 ${
                    filled
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-400 hover:text-yellow-300"
                  }`}
                />
              </motion.div>
            </motion.button>
          );
        })}
      </div>

      {/* 🌟 Rating Number */}
      {current > 0 && (
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: clicked ? 1.2 : 1,
            boxShadow: showBox
              ? `0 0 ${12 + glowIntensity * 16}px rgba(250,204,21,${
                  0.6 + glowIntensity * 0.4
                })`
              : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.25, type: "spring", stiffness: 200 }}
          className={`w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-400/10 border border-yellow-400/50 text-yellow-300 text-xl font-bold`}
        >
          {current}
        </motion.div>
      )}
    </div>
  );
}

export default Rating;
