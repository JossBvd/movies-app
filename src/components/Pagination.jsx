"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Pagination() {
  const { id } = useParams();
  const router = useRouter();
  const numbers = [1, 2, 3, 4, 5];
  const handlePage = (nb) => {
    router.push("/" + nb);
  };
  return (
    <div className="flex justify-center mt-6">
      <nav className="inline-flex items-center gap-2 text-sm">
        <button
          className="px-3 py-1 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300"
          onClick={() => handlePage(parseInt(id - 1))}
        >
          ← Précédent
        </button>
        {numbers.map((nb, index) => (
          <button
            className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
            onClick={() => handlePage(nb)}
            key={index}
          >
            {nb}
          </button>
        ))}
        <button
          className="px-3 py-1 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300"
          onClick={() => handlePage(parseInt(id) + 1)}
        >
          Suivant →
        </button>
      </nav>
    </div>
  );
}
