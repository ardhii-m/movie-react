import { FaHeart, FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";

function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <div className="flex justify-center sm:justify-start">
      <button
        onClick={onToggleFavorite}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-lg bg-[var(--accent-color)] hover:bg-[var(--hover-color)] transition-all duration-300 ease-out cursor-pointer"
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
        <span className="">
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </span>
      </button>
    </div>
  );
}

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default FavoriteButton;
