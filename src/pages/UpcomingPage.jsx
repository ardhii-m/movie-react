import { getUpcomingMovies } from "../utils/network-data";
import MoviesList from "../components/MoviesList";
import Loading from "../components/Loading";
import useFetchMovies from "../hooks/useFetchMovies";

function UpcomingPage() {
  const { movies, loading } = useFetchMovies(getUpcomingMovies);

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <h2 className="text-center text-3xl py-4 font-semibold">
        Upcoming Movies
      </h2>
      <MoviesList movies={movies} />
    </section>
  );
}

export default UpcomingPage;
