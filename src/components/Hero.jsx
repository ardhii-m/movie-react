import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { getTrendingMovies } from "../utils/network-data";

const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/original/";

function Hero() {
  const [movies, setMovies] = React.useState([]);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);

  React.useEffect(() => {
    if (movies.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => 
        (prev + 1) % movies.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [movies]);

  if (movies.length === 0) {
    return <p className="text-white">Loading...</p>;
  }

  const prev = () => setCurrent((c) => (c - 1 + movies.length) % movies.length);
  const next = () => setCurrent((c) => (c + 1) % movies.length);
  const movie = movies[current];

  return (
    <div className="relative w-full h-[70vh] overflow-hidden rounded-3xl p-8">
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={`${BASE_BACKDROP_URL}${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute bottom-16 left-8 right-8 text-white max-w-2xl">
        <h2 className="text-4xl font-bold mb-2 drop-shadow">{movie.title}</h2>
        <p className="flex items-center gap-1 mb-3 text-sm font-medium">
          <FaStar className="text-yellow-400" />
          {movie.vote_average?.toFixed(1)} ·{" "}
          {movie.release_date?.slice(0, 4)}        
        </p>
        <p className="text-sm line-clamp-4 mb-4 text-gray-200 text-justify">{movie.overview}</p>
        <Link
          to={`/detail/${movie.id}`}
          className="inline-block px-5 py-2 rounded-md bg-[var(--second-accent)] hover:opacity-90 transition-opacity duration-300 ease-out cursor-pointer font-semibold"
        >
          View Details
        </Link>
      </div>

      {/* Prev / Next Button*/}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {movies.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-white scale-125" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
