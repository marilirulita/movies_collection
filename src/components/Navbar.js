import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => (
  <div>
    <div>
      <h1>Movies Collection</h1>
    </div>
    <div>
      <button type='submit'><GiHamburgerMenu /></button>
      <Link to="/">Library</Link>
      <Link to="/watchedMovies">Watched Movies</Link>
      <Link to="/watchlist">Watchlist</Link>
    </div>
  </div>
);

export default Navbar;
