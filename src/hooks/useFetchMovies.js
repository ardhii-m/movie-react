import React from "react";

function useFetchMovies(fetchFunction, page = 1) {
  const [movies, setMovies] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState(1);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const data = await fetchFunction(page);
        if (data && data.results !== undefined) {
          setMovies(data.results);
          setTotalPages(Math.min(data.totalPages ?? 1, 3));
        } else {
          setMovies(data);
        }
      } catch (error) {
        console.error("failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [fetchFunction, page]);

  return { movies, loading, totalPages };
}

export default useFetchMovies;
