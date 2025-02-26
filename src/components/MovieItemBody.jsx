import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieItemBody({ id, title, vote_average, overview, imageUrl }) {
  return (
    <div>
      <div>
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-t-2xl" />
        <p className="text-white absolute top-2 left-2 bg-gray-800 p-2 text-sm rounded-full flex items-center gap-1"><FaStar className="text-yellow-400"/><span>{vote_average}</span></p>
      </div>
      <div className="flex flex-col p-2">
        <h3 className="text-red-500 hover:text-red-700 px-1 pt-1.5 font-bold text-2xl truncate">
          <Link 
            to={`/detail/${id}`}
            className="text-red-500 hover:text-red-700 transition-colors"  
          >{title}</Link>
        </h3>
        <p className=" px-1 pt-1 pb-2 text-lg text-justify line-clamp-6">{overview}</p>
      </div>
    </div>
  )
}

MovieItemBody.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number,
  overview: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MovieItemBody;