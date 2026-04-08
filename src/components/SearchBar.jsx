import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

function SearchBar({ keyword, keywordChange, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      onSearch(keyword);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar bg-white rounded-md flex items-center">
      <input
        className="text-center flex-1 px-2 py-1 rounded-l-md border-none outline-none text-black"
        type="text"
        placeholder="Search movie..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-1 text-3xl bg-[var(--hover-color)] text-white hover:bg-[var(--second-accent)] transition-colors rounded-r-md"
      >
        <FaSearch />
      </button>
    </form>
  )
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;