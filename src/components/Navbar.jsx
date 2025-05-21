"use client";
import React, { useState } from "react";

export default function Navbar({ setSearchFilms, searchFilms, films }) {
  const [inputValue, setInputValue] = useState("");
  const handleSearch = () => {
    setSearchFilms(
      films.filter((film) =>
        film.title.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
    setInputValue("");
  };
  
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
      {/* Logo / Titre */}
      <div className="text-xl font-bold text-gray-800">🎬 MyMovies</div>

      {/* Barre de recherche */}
      <div className="w-full sm:w-auto sm:flex-grow relative rounded-full flex items-center">
        <input
          type="text"
          placeholder="Rechercher un film..."
          className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition pr-20" // Augmentation du pr pour laisser de la place aux deux boutons
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
          <button
            className="text-2xl text-gray-500 cursor-pointer focus:outline-none"
            onClick={handleSearch}
          >
            🔍
          </button>
          <button
            className="text-xl text-gray-500 cursor-pointer focus:outline-none"
            onClick={() => setSearchFilms(films)}
          >
            ❌
          </button>
        </div>
      </div>
    </nav>
  );
}