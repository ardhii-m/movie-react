import React from "react";
import { getUpcomingMovies } from "../utils/network-data";
import MoviesList from "../components/MoviesList";

function UpcomingPage() {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesData = await getUpcomingMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error('failed to fetch movies:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
    console.log(movies);
  }, [movies]);

  if (loading) {
    return (
      <section>
        <p className="text-center text-3xl py-4 font-semibold">Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-center text-3xl py-4 font-semibold">Upcoming Movies</h2>
      <MoviesList movies={movies} />
    </section>
  )
}

export default UpcomingPage;