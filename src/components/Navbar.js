import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="nav-container">
      <div className="links-menu">
        <button type="submit" aria-label="Hamburguer Menu" onClick={handleToggle} className="navbar-button">
          { navbarOpen ? <ImCross /> : <GiHamburgerMenu /> }
        </button>
        <div className={navbarOpen ? ' showMenu' : 'hideMenu'}>
          <Link to="/" onClick={closeMenu}>Library</Link>
          <Link to="/watchedMovies" onClick={closeMenu}>Watched Movies</Link>
          <Link to="/watchlist" onClick={closeMenu}>Watchlist</Link>
        </div>
      </div>
      <h1>Movies Collection</h1>
    </div>
  );
};

export default Navbar;
