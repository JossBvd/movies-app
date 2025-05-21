"use client";
import Image from "next/image";
import React from "react";

export default function FeaturedFilm({ displayFilm }) {
  if (!displayFilm) return <span>Chargement...</span>;

  return (
    <div className="bg-white shadow-md overflow-hidden mb-8">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative w-full h-64 md:h-100 md:w-1/2">
          <Image
            src={`https://image.tmdb.org/t/p/w780${displayFilm.backdrop_path}`}
            alt={displayFilm.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Texte */}
        <div className="p-6 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">{displayFilm.title}</h2>
          <p className="text-gray-700 text-sm leading-relaxed line-clamp-5">
            {displayFilm.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
