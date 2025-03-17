import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

function Navigation() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-[var(--bg-color)] shadow-md">
      <div className="flex items-center gap-4 justify-between px-8  py-4">
        <h1 className="pt-2 text-center font-bold text-4xl sm:text-3xl">
          MOVIE CATALOGUE
        </h1>
        <button className="sm:hidden py-2 px-2 text-3xl" onClick={toggleMenu}>
          <FaBars />
        </button>

      <nav
        className={`absolute right-0 top-16 w-2/5 transition-all duration-300 ease-in-out bg-[var(--accent-color)] p-1.5 sm:p-0 ${
          menuOpen ? "block" : "hidden"
        } sm:relative sm:flex sm:top-0 sm:w-auto`}
      > 
        <ul className="flex flex-col sm:flex-row space-x-4 text-lg sm:items-center items-center align-baseline">
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 text-3xl flex items-center space-x-1 cursor-pointer hover:bg-[var(--second-accent)] rounded-2xl transition-colors duration-200"
            >
              {theme === "light" ? <FaSun /> : <FaMoon />}
            </button>
          </li>
          <li className="rounded-full hover:bg-[var(--second-accent)] transition-colors duration-200">
            <Link to="/" className="block p-2">
              Now Playing
            </Link>
          </li>
          <li className="rounded-full hover:bg-[var(--second-accent)] transition-colors duration-200">
            <Link to="/upcoming" className="block p-2">
              Upcoming
            </Link>
          </li>
          <li className="rounded-full hover:bg-[var(--second-accent)] transition-colors duration-200">
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
