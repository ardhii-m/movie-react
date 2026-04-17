import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { getTrendingMovies } from "../utils/network-data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/original/";

function Hero() {
  const [movies, setMovies] = React.useState([]);

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

  if (movies.length === 0) return null;

  return (
    <div className="-mx-5">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        className="w-full h-[70vh] -mt-4"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative w-full h-[70vh]">
              <img
                src={`${BASE_BACKDROP_URL}${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-16 left-8 right-8 text-white max-w-2xl">
                <h2 className="text-4xl font-bold mb-2 drop-shadow">{movie.title}</h2>
                <p className="flex items-center gap-1 mb-3 text-sm font-medium">
                  <FaStar className="text-yellow-400" />
                  {movie.vote_average?.toFixed(1)} &nbsp;·&nbsp; {movie.release_date?.slice(0, 4)}
                </p>
                <p className="text-sm line-clamp-4 mb-4 text-gray-200">{movie.overview}</p>
                <Link
                  to={`/detail/${movie.id}`}
                  className="inline-block px-5 py-2 rounded-md bg-[var(--second-accent)] hover:opacity-90 transition-opacity font-semibold"
                >
                  View Details
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
