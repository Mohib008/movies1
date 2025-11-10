"use client";
import { useState } from "react";

export default function LikeDislike() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userReaction, setUserReaction] = useState(null);
  const [pulse, setPulse] = useState(null);
  const [hovered, setHovered] = useState(null);

  const handleLike = () => {
    if (userReaction === "like") {
      setLikes(likes - 1);
      setUserReaction(null);
    } else {
      if (userReaction === "dislike") setDislikes(dislikes - 1);
      setLikes(likes + 1);
      setUserReaction("like");
      triggerPulse("like");
    }
  };

  const handleDislike = () => {
    if (userReaction === "dislike") {
      setDislikes(dislikes - 1);
      setUserReaction(null);
    } else {
      if (userReaction === "like") setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setUserReaction("dislike");
      triggerPulse("dislike");
    }
  };

  const triggerPulse = (type) => {
    setPulse(type);
    setTimeout(() => setPulse(null), 600); // slightly longer to show bright pulse
  };

  return (
    <>
      <style jsx>{`
        @keyframes pulse-gold {
          0% {
            opacity: 0.2;
            transform: scale(1);
            filter: blur(10px);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
            filter: blur(22px);
          }
          100% {
            opacity: 0.2;
            transform: scale(1);
            filter: blur(10px);
          }
        }
        @keyframes pulse-red {
          0% {
            opacity: 0.2;
            transform: scale(1);
            filter: blur(10px);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
            filter: blur(22px);
          }
          100% {
            opacity: 0.2;
            transform: scale(1);
            filter: blur(10px);
          }
        }
        .glow {
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          z-index: 0;
          transition: opacity 0.3s ease, filter 0.3s ease;
          pointer-events: none;
        }
        .animate-pulse-gold {
          animation: pulse-gold 0.8s ease-in-out;
        }
        .animate-pulse-red {
          animation: pulse-red 0.8s ease-in-out;
        }
      `}</style>

      <div
        className="mx-auto mt-6 flex items-center justify-center gap-6"
        style={{ fontFamily: "Arial" }}
      >
        {/* 👍 Like Button */}
        <div
          className="relative"
          onMouseEnter={() => setHovered("like")}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Brighter Glow behind button */}
          <div
            className={`glow ${pulse === "like" ? "animate-pulse-gold" : ""}`}
            style={{
              opacity: hovered === "like" ? 1 : 0.6,
              background:
                userReaction === "like"
                  ? "radial-gradient(circle, rgba(250,204,21,0.85) 0%, rgba(0,0,0,0) 75%)"
                  : "radial-gradient(circle, rgba(250,204,21,0.5) 0%, rgba(0,0,0,0) 75%)",
              filter: hovered === "like" ? "blur(22px)" : "blur(14px)",
            }}
          ></div>

          <button
            onClick={handleLike}
            className={`relative z-10 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ease-in-out backdrop-blur-md border
              ${
                userReaction === "like"
                  ? "bg-white/60 border-white/30 text-black"
                  : "bg-white/30 border-white/20 text-yellow-400 hover:text-yellow-300"
              }
              active:scale-105 focus:scale-105 hover:border-white/40 hover:bg-white/40`}
          >
            👍 Like ({likes})
          </button>
        </div>

        {/* 👎 Dislike Button */}
        <div
          className="relative"
          onMouseEnter={() => setHovered("dislike")}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Brighter Glow behind button */}
          <div
            className={`glow ${pulse === "dislike" ? "animate-pulse-red" : ""}`}
            style={{
              opacity: hovered === "dislike" ? 1 : 0.6,
              background:
                userReaction === "dislike"
                  ? "radial-gradient(circle, rgba(244,67,54,0.85) 0%, rgba(0,0,0,0) 75%)"
                  : "radial-gradient(circle, rgba(244,67,54,0.5) 0%, rgba(0,0,0,0) 75%)",
              filter: hovered === "dislike" ? "blur(22px)" : "blur(14px)",
            }}
          ></div>

          <button
            onClick={handleDislike}
            className={`relative z-10 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ease-in-out backdrop-blur-md border
              ${
                userReaction === "dislike"
                  ? "bg-white/60 border-white/30 text-black"
                  : "bg-white/30 border-white/20 text-yellow-400 hover:text-yellow-300"
              }
              active:scale-105 focus:scale-105 hover:border-white/40 hover:bg-white/40`}
          >
            👎 Dislike ({dislikes})
          </button>
        </div>
      </div>
    </>
  );
}
