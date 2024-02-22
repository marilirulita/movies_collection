import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
      <h1 className='Bookstore-CMS1'>Movies Collection</h1>
        <div className='links'>
        <Link to="/" className='BOOKS'>Library</Link>
        <Link to="/watchedMovies" className='BOOKS' >Watched Movies</Link>
        <Link to="/watchlist" className='BOOKS'>Watchlist</Link>
        </div>
      </div>
      <div className="Oval">
      <ImUser className="Mask" />
    </div>
    </div>
  );
};

export default Navbar;
