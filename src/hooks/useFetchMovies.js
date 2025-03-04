import React from "react";

function useFetchMovies(fetchFunction) {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesData = await fetchFunction();
        setMovies(moviesData);
      } catch (error) {
        console.error("failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [fetchFunction]);

  return { movies, loading };
}

export default useFetchMovies;
