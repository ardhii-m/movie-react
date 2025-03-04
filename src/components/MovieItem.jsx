import PropTypes from "prop-types";
import MovieItemBody from "./MovieItemBody";
import CONFIG from "../utils/config";

function MovieItem({ id, title, vote_average, overview, backdrop_path }) {
  return (
    <article className="relative rounded-lg overflow-hidden border border-[var(--card-border)] shadow-md bg-[var(--card-bg)] text-[var(--card-text)] transition duration-200">
      <MovieItemBody
        id={id}
        title={title}
        vote_average={vote_average}
        overview={overview}
        imageUrl={`${CONFIG.BASE_IMAGE_URL}${backdrop_path}`}
      />
    </article>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
};

export default MovieItem;
