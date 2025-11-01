"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star as StarIcon } from "lucide-react";

function Rating({ maxRating = 10 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (r) => setRating(r);

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4">
      <div className="flex items-center gap-2">
        {Array.from({ length: maxRating }, (_, i) => {
          const filled = tempRating ? tempRating >= i + 1 : rating >= i + 1;

          return (
            <motion.button
              key={i}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 12,
              }}
              onMouseEnter={() => setTempRating(i + 1)}
              onMouseLeave={() => setTempRating(0)}
              onClick={() => handleRating(i + 1)}
              className="focus:outline-none relative"
            >
              <StarIcon
                size={34}
                className={`transition-all duration-200 ${
                  filled
                    ? "fill-yellow-400 text-yellow-400 drop-shadow-lg"
                    : "text-gray-400 hover:text-yellow-300"
                }`}
              />

              {/* Optional glowing effect */}
              {filled && (
                <motion.span
                  layoutId={`glow-${i}`}
                  className="absolute inset-0 rounded-full blur-md bg-yellow-400 opacity-40"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Animated rating text */}
      <motion.p
        key={tempRating || rating}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center text-yellow-400 text-4xl font-semibold w-10 text-center select-none"
      >
        {tempRating || rating || ""}
      </motion.p>
    </div>
  );
}

export default Rating;
