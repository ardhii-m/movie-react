import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../utils/network-data";
import MoviesList from "../components/MoviesList";
import Loading from "../components/Loading";
import useFetchMovies from "../hooks/useFetchMovies";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  
  const { movies, loading } = useFetchMovies(() => 
    keyword ? searchMovies(keyword) : Promise.resolve([])
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <h2 className="text-center text-3xl py-4 font-semibold">
        {keyword ? `Search Results for "${keyword}"` : "Search Movies"}
      </h2>
      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : keyword ? (
        <p className="text-center text-lg py-4 font-semibold">
          No movies found for {keyword}.
        </p>
      ) : (
        <p className="text-center text-lg py-4 font-semibold">
          Enter a keyword to search for movies.
        </p>
      )}
    </section>
  );
}

export default SearchPage;