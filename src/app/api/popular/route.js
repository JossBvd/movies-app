import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTBhZGZjY2E1NzgxZDk2ZjQwN2NmNTNjZTZkYTNkNyIsIm5iZiI6MTc0NzgxMzMxOS43MzcsInN1YiI6IjY4MmQ4M2M3ZjJmY2Q0NDRkZDJmMTM4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IoC34y7J2bSyB88B5Okkck2CjStDnHuezWhyQ66WwWY",
    },
  };
  try {
    const res = await axios.request(options);
    const films = res.data.results;
    return NextResponse.json({films})
  } catch (e) {
    console.log("Problème lors de la requete: ", e)
    return NextResponse.json({ error: "Erreur lors de la récupération des films" }, { status: 500 });
  }
}
