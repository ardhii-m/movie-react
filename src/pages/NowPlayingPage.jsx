import { getNowPlaying } from "../utils/network-data";
import MoviesList from "../components/MoviesList";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import Hero from "../components/Hero";
import useFetchMovies from "../hooks/useFetchMovies";
import usePageNavigation from "../hooks/usePageNavigation";

function NowPlayingPage() {
  const { page, handlePageChange } = usePageNavigation();
  const { movies, loading, totalPages } = useFetchMovies(getNowPlaying, page);

  if (loading) return <Loading />;

  return (
    <>
      <Hero />
      <section>
        <h2 className="text-center text-3xl py-4 font-semibold">Now Playing</h2>
        {movies.length > 0 ? (
          <>
            <MoviesList movies={movies} />
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
          </>
        ) : (
          <p className="text-center text-lg py-4 font-semibold">There are no movies playing right now.</p>
        )}
      </section>
    </>
  );
}

export default NowPlayingPage;
