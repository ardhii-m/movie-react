import PropTypes from "prop-types";
import CONFIG from "../utils/config";
import { FaStar } from "react-icons/fa";

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
            <FaStar className="text-yellow-400" /> {vote_average}
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
        </div>
      </div>

      <div className="sm:my-4">
        {/* Overview */}
        <h3 className="text-2xl font-semibold pb-3">Overview</h3>
        <p className="text-justify text-xl">{overview}</p>
      </div>
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
};

export default MovieDetail;
