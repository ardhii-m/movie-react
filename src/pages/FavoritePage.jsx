import React from "react";
import MoviesList from "../components/MoviesList";
import Loading from "../components/Loading";

function FavoritePage() {
  const [favorites, setFavorites] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const favoritesCache = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favoritesCache);
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <h2 className="text-center text-3xl py-4 font-semibold">Favorite Movies</h2>
      {favorites.length > 0 ? (
        <MoviesList movies={favorites} />
      ) : (
        <p className="text-center text-lg py-4 font-semibold">
          You have no favorite movies yet.
        </p>
      )}
    </section>
  );
}

export default FavoritePage;
