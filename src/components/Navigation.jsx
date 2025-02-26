import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navigation() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-4 text-xl justify-center">
          <li>
            <button>
              <Link to="/" className="p-2 hover:font-bold">
                Now Playing
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/upcoming" className="p-2 hover:font-bold">
                Upcoming Movies
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link to='/favorite' className="p-2 hover:font-bold">
                Liked Movies
              </Link>
            </button>
            </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <button className="md:hidden text-black text-4xl p-2" onClick={toggleMenu}>
        <FaBars />
      </button>
      <div className={`md:hidden transition-all duration-400 ease-in-out ${menuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <nav className="flex flex-col space-y-2 p-4 text-2xl text-center">
          <ul className="space-y-8">
            <li>
              <Link to="/" className="p-2 hover:font-bold">Now Playing</Link>
            </li>
            <li>
              <Link to="/upcoming" className="p-2 hover:font-bold">Upcoming Movies</Link>
            </li>
            <li>
              <Link to="/favorite" className="p-2 hover:font-bold">Liked Movies</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
