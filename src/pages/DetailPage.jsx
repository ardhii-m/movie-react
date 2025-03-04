import React from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import { getMovieCredits, getMovieDetail } from "../utils/network-data";
import { addFavorite, removeFavorite, getFavorite } from "../utils/favoritesDB";
import Loading from "../components/Loading";

function DetailPage() {
  const { movieId } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [movie, setMovie] = React.useState(null);
  const [cast, setCast] = React.useState([]);
  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieData, creditsData] = await Promise.all([
          getMovieDetail(movieId),
          getMovieCredits(movieId),
        ]);

        setMovie(movieData);
        setCast(creditsData.cast.slice(0, 6).map((actor) => actor.name));

        const favoriteMovie = await getFavorite(Number(movieId));
        setIsFavorite(!!favoriteMovie);
      } catch (error) {
        console.error("Failed to fetch movie details.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const toggleFavorite = async () => {
    if (isFavorite) {
      await removeFavorite(Number(movieId));
    } else {
      await addFavorite({ id: Number(movieId), ...movie });
    }

    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return <Loading />;
  }

  if (!movie) {
    return (
      <section>
        <p className="text-center text-3xl py-4">
          Failed to load movie details.
        </p>
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
        genres={movie.genres.map((genre) => genre.name)}
        cast={cast}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
}

export default DetailPage;
