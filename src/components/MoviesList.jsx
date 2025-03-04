import MovieItem from "./MovieItem";
import PropTypes from "prop-types";

function MoviesList({ movies }) {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-5 gap-4 px-4 py-3">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            vote_average={movie.vote_average}
            overview={movie.overview}
            backdrop_path={movie.backdrop_path}
          />
        ))
      ) : (
        <p>Movies List is Empty.</p>
      )}
    </section>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MoviesList;
