import { getNowPlaying } from "../utils/network-data";
import MoviesList from "../components/MoviesList";
import Loading from "../components/Loading";
import useFetchMovies from "../hooks/useFetchMovies";

function NowPlayingPage() {
  const { movies, loading } = useFetchMovies(getNowPlaying);

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <h2 className="text-center text-3xl py-4 font-semibold">Now Playing</h2>
      <MoviesList movies={movies} />
    </section>
  );
}

export default NowPlayingPage;
