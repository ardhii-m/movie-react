import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import SearchBar from "./SearchBar";

function Navigation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  function keywordChangeHandler(keyword) {
    setKeyword(keyword);
  }

  function handleSearch(keyword) {
    navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-[var(--bg-color)] shadow-md">
      <div className="flex items-center gap-4 justify-between px-8  py-4">
        <h1 className="pt-2 text-center font-bold text-4xl sm:text-3xl">
          MOVIE CATALOGUE
        </h1>
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 text-3xl flex items-center cursor-pointer hover:bg-[var(--second-accent)] rounded-md transition-colors duration-200"
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </button>
          <button className="py-2 px-2 text-3xl" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>

      <nav
        className={`absolute right-0 top-16 w-full transition-all duration-300 ease-in-out bg-[var(--accent-color)] p-1.5 sm:p-0 ${
          menuOpen ? "block" : "hidden"
        } sm:relative sm:flex sm:top-0 sm:w-auto`}
      > 
        <ul className="sm:gap-2 md:gap-4 pt-4 flex flex-col sm:flex-row text-lg sm:items-center items-center align-baseline">
          <li className="hidden sm:block">
            <button
              onClick={toggleTheme}
              className="p-2 text-3xl flex items-center space-x-1 cursor-pointer hover:bg-[var(--second-accent)] rounded-md transition-colors duration-200"
            >
              {theme === "light" ? <FaSun /> : <FaMoon />}
            </button>
          </li>
          <SearchBar keyword={keyword} keywordChange={keywordChangeHandler} onSearch={handleSearch} />
          <li className="rounded-md hover:bg-[var(--second-accent)] transition-colors duration-200">
            <Link to="/" className="block p-2">
              Now Playing
            </Link>
          </li>
          <li className="rounded-md hover:bg-[var(--second-accent)] transition-colors duration-200">
            <Link to="/upcoming" className="block p-2">
              Upcoming
            </Link>
          </li>
          <li className="rounded-md hover:bg-[var(--second-accent)] transition-colors duration-200">
            <Link to="/favorite" className="block p-2">
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Navigation;
