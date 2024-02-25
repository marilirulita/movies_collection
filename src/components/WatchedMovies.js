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
      <h2 className="add-book-title">Watched Movies</h2>
      <div className="books-display">
        {library.length === 0 ? (<h3 className="empty-list">Any movie watched yet</h3>) : library.map((movie) => (
          <div key={movie.id} className="Lesson-Panel">
            <div className='book-info'>
              <span className="Category">{movie.genre}</span>
              <span className="Title">{movie.title}</span>
              <span className="Author">Author 'arreglar'</span>
            </div>
           
              
              <div className="circle">
                  <button
                    className={(movie.watched && 'btnwatched') || (!movie.watched && 'btnNotWatched')}
                    type="submit"
                    onClick={() => watchedMovie(movie.id, movie.watched)}
                  ><span className="Completed">{(movie.watched && 'Watched Movie') || (!movie.watched && 'Not Watched')}</span>
                  </button>
                  </div>
              
      
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchedMovies;
