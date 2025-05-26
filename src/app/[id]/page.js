"use client";
import FeaturedFilm from "@/components/FeaturedFilm";
import FilmThumbnails from "@/components/FilmThumbnails";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { id } = useParams();
  const [films, setFilms] = useState([]);
  const [displayFilm, setDisplayFilm] = useState(null);
  const [searchFilms, setSearchFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          router.push("/1");
        }
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/api/popular/${id}`
        );
        const data = res.data.films;
        setFilms(data);
      } catch (err) {
        console.error("Erreur lors de la récupération des films :", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchFilms.length > 0 && !displayFilm) {
      setDisplayFilm(searchFilms[0]);
    }
    if (displayFilm && !displayFilm.title.includes(searchFilms[0].title)) {
      setDisplayFilm(searchFilms[0]);
    }
  }, [searchFilms]);

  useEffect(() => {
    if (!searchFilms.length > 0) {
      setSearchFilms(films);
    }
  }, [searchFilms, films]);

  return (
    <div className="">
      <header>
        <Navbar
          searchFilms={searchFilms}
          setSearchFilms={setSearchFilms}
          films={films}
        />
      </header>
      <main>
        <FeaturedFilm displayFilm={displayFilm} />
        <FilmThumbnails
          searchFilms={searchFilms}
          setDisplayFilm={setDisplayFilm}
        />
      </main>
      <Pagination />
    </div>
  );
}
