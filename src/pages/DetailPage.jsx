import React from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import { getMovieCredits, getMovieDetail } from "../utils/network-data";

function DetailPage() {
  const { movieId } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [movie, setMovie] = React.useState(null);
  const [cast, setCast] = React.useState([]);

  React.useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieData, creditsData] = await Promise.all([
          getMovieDetail(movieId),
          getMovieCredits(movieId),
        ]);

        if (!movieData || !creditsData) {
          throw new Error("Data not available");
        }

        setMovie(movieData);
        setCast(creditsData.cast.slice(0, 6).map(actor => actor.name));
      } catch (error) {
        console.error("Failed to fetch movie details.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return (
      <section>
        <p className="text-center text-3xl py-4 font-semibold">Loading...</p>
      </section>
    );
  }

  if (!movie) {
    return (
      <section>
        <p className="text-center text-3xl py-4">Failed to load movie details.</p>
      </section>
    );
  }

  return (
    <>
      <MovieDetail 
        title={movie.title} 
        tagline={movie.tagline} 
        releaseDate={movie.release_date} 
        duration={movie.runtime} 
        vote_average={movie.vote_average} 
        overview={movie.overview} 
        poster_path={movie.poster_path}
        genres={movie.genres.map(genre => genre.name)}
        cast={cast}
      />
    </>
  );
}

export default DetailPage;
