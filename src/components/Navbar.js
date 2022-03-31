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
    <div>
      <div>
        <h1>Movies Collection</h1>
      </div>
      <div>
        <button type="submit" aria-label="Hamburguer Menu" onClick={handleToggle}>
          { navbarOpen ? <GiHamburgerMenu style={{ color: '#fff', width: '40px', height: '40px' }} /> : <ImCross style={{ color: '#7b7b7b', width: '40px', height: '40px' }} /> }
        </button>
        <div className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
          <Link to="/" onClick={closeMenu}>Library</Link>
          <Link to="/watchedMovies" onClick={closeMenu}>Watched Movies</Link>
          <Link to="/watchlist" onClick={closeMenu}>Watchlist</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
