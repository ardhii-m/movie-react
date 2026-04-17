import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CONFIG from "../utils/config";
import { FaStar } from "react-icons/fa";
import FavoriteButton from "./FavoriteButton";

function MovieDetail({
  title,
  tagline,
  releaseDate,
  duration,
  vote_average,
  overview,
  poster_path,
  genres,
  cast,
  reviews,
  similar,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <section className="max-w-4xl mx-auto p-4">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src={`${CONFIG.BASE_IMAGE_URL}${poster_path}`}
          alt={`${title}`}
          className="w-full rounded-xl shadow-lg "
        />
        <div className="my-4 space-y-2">
          {/* Information */}
          <h3 className="text-3xl font-semibold pb-2">Information</h3>

          {/* Tagline */}
          <h4 className="text-2xl font-medium">Tagline</h4>
          <p className="text-xl">{tagline || "N/A"}</p>

          {/* Release Date */}
          <h4 className="text-2xl font-medium">Release Date</h4>
          <p className="text-xl">{releaseDate}</p>

          {/* Duration */}
          <h4 className="text-2xl font-medium">Duration</h4>
          <p className="text-xl">{duration} minutes</p>

          {/* Rating */}
          <h4 className="text-2xl font-medium">Rating</h4>
          <p className="text-xl flex items-center gap-1">
            <FaStar className="text-yellow-400" /> {vote_average.toFixed(1)}
          </p>

          {/* Genres */}
          <h4 className="text-2xl font-medium">Genre</h4>
          <p className="text-justify text-xl">
            {genres.length > 0 ? genres.join(", ") : "N/A"}
          </p>

          {/* Casts */}
          <h4 className="text-2xl font-medium">Cast</h4>
          <p className="text-justify text-xl">
            {cast.length > 0
              ? cast.join(", ")
              : "No cast information available."}
          </p>

          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      </div>

      <div className="sm:my-4">
        {/* Overview */}
        <h3 className="text-2xl font-semibold pb-3">Overview</h3>
        <p className="text-justify text-xl">{overview}</p>
      </div>

      {reviews && reviews.length > 0 && (
        <div className="sm:my-4">
          <h3 className="text-2xl font-semibold pb-3">Reviews</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {reviews.map((review) => (
              <div key={review.id} className="min-w-[320px] max-w-[480px] p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-lg truncate">{review.author}</span>
                  {review.author_details?.rating && (
                    <span className="flex items-center gap-1 text-sm font-medium shrink-0 ml-2">
                      <FaStar className="text-yellow-400" />
                      {review.author_details.rating}/10
                    </span>
                  )}
                </div>
                <p className="text-justify line-clamp-8 text-sm">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {similar && similar.length > 0 && (
        <div className="sm:my-4">
          <h3 className="text-2xl font-semibold pb-3">Similar Movies</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {similar.map((movie) => (
              <Link
                key={movie.id}
                to={`/detail/${movie.id}`}
                className="min-w-[320px] max-w-[480px] rounded-xl overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] hover:opacity-80 transition-opacity"
              >
                <img
                  src={`${CONFIG.BASE_IMAGE_URL}${movie.backdrop_path}`}
                  alt={movie.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-2">
                  <p className="text-sm font-semibold truncate">{movie.title}</p>
                  <p className="flex items-center gap-1 mt-1">
                    <FaStar className="text-yellow-400" />
                    {movie.vote_average?.toFixed(1) ?? "N/A"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  releaseDate: PropTypes.string,
  duration: PropTypes.number,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  poster_path: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  cast: PropTypes.arrayOf(PropTypes.string),
  reviews: PropTypes.arrayOf(PropTypes.object),
  similar: PropTypes.arrayOf(PropTypes.object),
  isFavorite: PropTypes.bool,
  onToggleFavorite: PropTypes.func,
};

export default MovieDetail;
