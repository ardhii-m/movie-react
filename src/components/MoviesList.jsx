import React from "react";
import MovieItem from "./MovieItem";

function MoviesList({ movies }) {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-5 gap-4 px-4 py-3">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            vote_average={movie.vote_average}
            overview={movie.overview}
            backdrop_path={movie.backdrop_path} 
          />
        ))
      ) : (
        // <p className="">
        //   {locale === "id" ? "Tidak ada catatan" : "Notes is empty"}
        // </p>
        <p>Movies List is Empty.</p>
      )}
    </section>
  );
}

export default MoviesList;
