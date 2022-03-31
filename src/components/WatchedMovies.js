import { useDispatch, useSelector } from 'react-redux';
import { movieWatched } from '../redux/movies/movies';

const WatchedMovies = () => {
  const library = useSelector((state) => state.reducerMovies);
  const dispatch = useDispatch();

  const watchedMovie = (id, toggle) => {
    const watched = !toggle;
    dispatch(movieWatched(id, watched));
  };

  return (
    <div className="movies-container">
      <h2>This is Watched Movies section</h2>
      <div className="display-movies">
        {library.map((movie) => (
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
