import MoviesList from "../components/MoviesList";
import Loading from "../components/Loading";
import { getAllFavorites } from "../utils/favoritesDB";
import useFetchMovies from "../hooks/useFetchMovies";

function FavoritePage() {
  const { movies, loading } = useFetchMovies(getAllFavorites);
  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <h2 className="text-center text-3xl py-4 font-semibold">
        Favorite Movies
      </h2>
      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <p className="text-center text-lg py-4 font-semibold">
          You have no favorite movies yet.
        </p>
      )}
    </section>
  );
}

export default FavoritePage;
