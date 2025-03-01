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
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex ">
        <ul className="flex space-x-4 text-lg justify-between items-center">
          <li>
            <button onClick={toggleTheme} className="text-2xl flex items-center space-x-1 cursor-pointer">
              {theme === "light" ? <FaSun /> : <FaMoon />}
            </button>
          </li>
          <li>
            <button>
              <Link to="/" className="p-2 hover:font-bold space-x-1">
                Now Playing
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/upcoming" className="p-2 hover:font-bold space-x-1">
                Upcoming
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/favorite" className="p-2 hover:font-bold space-x-1">
                Favorites
              </Link>
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <button className="sm:hidden text-4xl p-2" onClick={toggleMenu}>
        <FaBars />
      </button>
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col p-4 text-3xl text-center">
          <ul className="space-y-12">
            <li>
              <Link to="/" className="p-2 hover:font-bold">
                Now Playing
              </Link>
            </li>
            <li>
              <Link to="/upcoming" className="p-2 hover:font-bold">
                Upcoming
              </Link>
            </li>
            <li>
              <Link to="/favorite" className="p-2 hover:font-bold">
                Favorites
              </Link>
            </li>
            <li>
              <button onClick={toggleTheme}>
                {theme === "light" ? <FaSun className="text-4xl" /> : <FaMoon className="text-4xl" />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
