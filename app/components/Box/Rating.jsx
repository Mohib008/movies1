"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Star as StarIcon } from "lucide-react";

function Rating({ maxRating = 10 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const [clicked, setClicked] = useState(false);
  const starRefs = useRef([]);

  const handleRating = (r) => {
    setRating(r);
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  const handleMouseMove = (index, e) => {
    const star = starRefs.current[index];
    if (!star) return;
    const { left, width } = star.getBoundingClientRect();
    const percent = (e.clientX - left) / width;
    const hoverValue = index + percent;
    setTempRating(Math.min(hoverValue, maxRating));
  };

  const current = tempRating || rating;
  const active = rating > 0 || tempRating > 0 || clicked;
  const glowIntensity = current / maxRating;

  const getGlowColor = (i) => {
    if (i < 0.3) return "rgba(250,204,21,1)";
    if (i < 0.6) return "rgba(253,186,116,1)";
    if (i < 0.8) return "rgba(249,115,22,1)";
    return "rgba(239,68,68,1)";
  };

  const getBackgroundGradient = (i) => {
    if (i === 0)
      return "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05))";
    if (i < 0.3)
      return "linear-gradient(135deg, rgba(250,204,21,0.15), rgba(250,204,21,0.05))";
    if (i < 0.6)
      return "linear-gradient(135deg, rgba(253,186,116,0.2), rgba(250,204,21,0.05))";
    if (i < 0.8)
      return "linear-gradient(135deg, rgba(249,115,22,0.25), rgba(253,186,116,0.1))";
    return "linear-gradient(135deg, rgba(239,68,68,0.3), rgba(249,115,22,0.1))";
  };

  const glowColor = getGlowColor(glowIntensity);
  const backgroundGradient = getBackgroundGradient(glowIntensity);

  const breathing = {
    scale: active ? [1, 1.015, 1] : 1,
    opacity: active ? [1, 0.97, 1] : 1,
    transition: { duration: 4, ease: "easeInOut", repeat: active ? Infinity : 0 },
  };

  const cardSize = "2.5rem";
  const starSize = "1.5rem";
  const numberSize = "1.5rem";
  const gapSize = "0.5rem";

  const getStarFill = (index) => {
    const fullValue = index + 1;
    if (current >= fullValue) return 100;
    if (current < index) return 0;
    return (current - index) * 100;
  };

  return (
    <motion.div
      animate={breathing}
      className="flex items-center justify-center rounded-2xl shadow-inner"
      style={{
        gap: gapSize,
        padding: gapSize,
        background: backgroundGradient,
        boxShadow: active
          ? `0 0 ${0.25 + glowIntensity * 0.4}rem ${glowColor}30 inset, 0 0 ${
              0.125 + glowIntensity * 0.25
            }rem ${glowColor}30`
          : "inset 0 0 0.1rem rgba(0,0,0,0.2)",
        transition: "all 0.8s ease-in-out",
      }}
      onMouseLeave={() => setTempRating(0)}
    >
      {/* Stars */}
      <div className="flex items-center" style={{ gap: gapSize }}>
        {Array.from({ length: maxRating }, (_, i) => {
          const starIntensity = (i + 1) / maxRating;
          const starColor = getGlowColor(starIntensity);
          const fillPercent = getStarFill(i);

          return (
            <motion.div
              key={i}
              ref={(el) => (starRefs.current[i] = el)}
              onMouseMove={(e) => handleMouseMove(i, e)}
              onClick={() => handleRating(i + 1)}
              className="flex items-center justify-center rounded-lg border border-yellow-400/50 shadow-sm"
              style={{
                width: cardSize,
                height: cardSize,
                background: getBackgroundGradient(starIntensity),
              }}
            >
              <StarIcon
                size={parseFloat(starSize) * 16}
                style={{
                  background: `linear-gradient(90deg, ${starColor} ${fillPercent}%, rgba(156,163,175,0.5) ${fillPercent}%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: `drop-shadow(0 0 ${
                    0.1 + 0.1 * glowIntensity
                  }rem ${starColor})`,
                  transition: "filter 0.2s ease-out, background 0.2s ease-out",
                  cursor: "pointer",
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Rating number */}
      {current > 0 && (
        <motion.div
          animate={{
            opacity: 1,
            scale: clicked ? 1.15 : active ? 1.08 : 1,
            y: active ? "-0.125rem" : 0,
            boxShadow: active
              ? `0 0 ${0.1 + glowIntensity * 0.2}rem ${glowColor}`
              : "0 0 0 rgba(0,0,0,0)",
            background: getBackgroundGradient(glowIntensity),
          }}
          transition={{ duration: 0.7, ease: "easeOut", type: "tween" }}
          className="flex items-center justify-center rounded-lg border border-yellow-400/50 shadow-sm"
          style={{
            width: cardSize,
            height: cardSize,
            color: glowColor,
            fontSize: numberSize,
            textShadow: `0 0 ${0.1 + glowIntensity * 0.15}rem ${glowColor}`,
            transition: "all 0.6s ease-in-out",
          }}
        >
          {current.toFixed(1)}
        </motion.div>
      )}
    </motion.div>
  );
}

export default Rating;
