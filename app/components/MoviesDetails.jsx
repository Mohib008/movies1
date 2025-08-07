"use client";
import React from "react";

export default function MoviesDetails({ selectedId, onClose }) {
  return (
    <div className="details">
      {selectedId}
      <button className="btn-back" onClick={onClose}>
        &larr;
      </button>
    </div>
  );
}
