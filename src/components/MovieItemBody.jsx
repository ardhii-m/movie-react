import React from "react";

function MovieItemBody({ id, title, vote_average, overview, imageUrl }) {
  return (
    <div>
      <div>
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-t-2xl" />
        <p className="text-white absolute top-2 left-2 bg-gray-800 p-2 text-sm rounded-full">⭐️<span>{vote_average}</span></p>
      </div>
      <div className="flex flex-col p-3">
        <h3 className="text-red-500 font-bold text-2xl line-clamp-1 pb-3">{title}</h3>
        <p className="text-lg text-justify line-clamp-6">{overview}</p>
      </div>
    </div>
  )
}

export default MovieItemBody;