import Image from "next/image";
import React from "react";

export default function FilmThumbnails({ searchFilms, setDisplayFilm }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {searchFilms.map((film) => (
        <div
          key={film.id}
          className="bg-white rounded-md shadow-md overflow-hidden cursor-pointer"
          onClick={() => setDisplayFilm(film)}
        >
          <div className="relative w-full h-48">
            <Image
              src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
              alt={film.title}
              fill
              className="rounded-t-md object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{film.title}</h3>
            <p className="text-sm text-gray-700 line-clamp-6">
              {film.overview}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
