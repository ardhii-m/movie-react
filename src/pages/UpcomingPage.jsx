import { getUpcomingMovies } from "../utils/network-data";
import MoviesList from "../components/MoviesList";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import useFetchMovies from "../hooks/useFetchMovies";
import usePageNavigation from "../hooks/usePageNavigation";

function UpcomingPage() {
  const { page, handlePageChange } = usePageNavigation();
  const { movies, loading, totalPages } = useFetchMovies(getUpcomingMovies, page);

  if (loading) return <Loading />;

  return (
    <section>
      <h2 className="text-center text-3xl py-4 font-semibold">
        Upcoming Movies
      </h2>
      {movies.length > 0 ? (
        <>
          <MoviesList movies={movies} />
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
      ) : (
        <p className="text-center text-lg py-4 font-semibold">There are no upcoming movies right now.</p>
      )}
    </section>
  );
}

export default UpcomingPage;
