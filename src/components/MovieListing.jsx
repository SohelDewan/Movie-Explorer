import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

export default function MovieListing() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = query
      ? `https://api.tvmaze.com/search/shows?q=${query}`
      : `https://api.tvmaze.com/shows`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMovies(query ? data.map(item => item.show) : data);
      })
  }, [query]);



  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="min-h-1/3 pt-8 text-center">
        <label className="input">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie" />
        </label>
      </div>
      <div>

        <div className="pl-4 py-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {movies.slice(0, 6).map(movie => (
            <MovieCard key={movie.id} movie={movie} />))}
        </div>

      </div>
      <div>
        <Footer />
      </div>
    </>

  )
}
