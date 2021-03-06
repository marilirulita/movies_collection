import { useDispatch, useSelector } from 'react-redux';
import { movieWatched } from '../redux/movies/movies';

const WatchedMovies = () => {
  // select library and filter for watched atributes if true
  const library = useSelector((state) => state.reducerMovies)
    .filter((movie) => movie.watched === true);
  const dispatch = useDispatch();

  const watchedMovie = (id, toggle) => {
    const watched = !toggle;
    dispatch(movieWatched(id, watched));
  };

  return (
    <div className="movies-container">
      <h2>Watched Movies</h2>
      <div className="display-movies">
        {library.length === 0 ? (<h3 className="empty-list">Any movie watched yet</h3>) : library.map((movie) => (
          <div key={movie.id} className="movie-container">
            <div>
              <h3>{movie.title}</h3>
              <span>{movie.genre}</span>
            </div>
            <div>
              <button
                className={(movie.watched && 'btnwatched') || (!movie.watched && 'btnNotWatched')}
                type="submit"
                onClick={() => watchedMovie(movie.id, movie.watched)}
              >
                {(movie.watched && 'Watched Movie') || (!movie.watched && 'Not Watched')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchedMovies;
