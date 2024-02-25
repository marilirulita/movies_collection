import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMovie, removeMovie, movieWatched } from '../redux/movies/movies';
import { notOnLibrary, onLibrary } from '../redux/wishes/wishes';

const Library = () => {
  const library = useSelector((state) => state.reducerMovies);
  const dispatch = useDispatch();

  const newMovie = {
    title: '',
    genre: '',
    id: uuidv4(),
    watched: false,
    onlibrary: true,
  };

  const [state, setState] = useState(newMovie);

  const selectGenre = (select) => {
    setState({ ...state, genre: select.options[select.selectedIndex].value });
  };

  // update the object new movie with all data to library (store)
  const submitNewMovie = () => {
    if (state.title !== '' && state.genre !== '') {
      dispatch(onLibrary(state.title));
      dispatch(addNewMovie(state));
      setState(newMovie);
    }
  };

  const deleteMovie = (id, title) => {
    dispatch(removeMovie(id));
    dispatch(notOnLibrary(title));
  };

  // toggle watched atribute in movie element
  const watchedMovie = (id, toggle) => {
    const watched = !toggle;
    dispatch(movieWatched(id, watched));
  };

  return (
    <div className="movies-container">
      
      <div className="add-book">
        <h2 className="add-book-title">Add New Movie</h2>
        <div className='inputs-elements'>
          <input
            className="inputs"
            type="text"
            placeholder="Add new movie"
            value={state.title}
            onChange={(e) => {
              setState({ ...state, title: e.target.value.toUpperCase() });
            }}
          />
          {/* ver si le agrego la misma clase que el de arriba y ver si agrego otro input para el author */}
          <label htmlFor="genre">
            <select name="genre" id="genre" onClick={(e) => selectGenre(e.target)}>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="Thriller">Thriller</option>
              <option value="Western">Western</option>
            </select>
          </label>
          <button
            type="submit"
            value="add-movie"
            onClick={submitNewMovie}
            className="add-book-button"
          >
            <span className="ADD-BOOK">Add Movie</span>
          </button>
        </div>
      </div>
      <div className="books-display">
        {library.length === 0 ? (<h3 className="empty-list">Any movie in your library yet</h3>) : library.map((movie) => (
          <div key={movie.id} className="Lesson-Panel">
            <div className='book-info'>
              <span className="Category">{movie.genre}</span>
              <span className="Title">{movie.title}</span>
              <span className="Author">Author 'arreglar'</span>
              <div className="comments-section">
                <span className="Comments">Comments</span>
                <span className="Comments">Remove</span>
                <span className="Comments">Edit</span>
              </div>
            </div>
            <div className="status-section">
              <div className="percent-section">
              <div className="circle">
                  <button
                    className={(movie.watched && 'btnwatched') || (!movie.watched && 'btnNotWatched')}
                    type="submit"
                    onClick={() => watchedMovie(movie.id, movie.watched)}
                  ><span className="Completed">{(movie.watched && 'Watched Movie') || (!movie.watched && 'Not Watched')}</span>
                  </button>
                  </div>
              </div>

              <div className="chapter-section">
                <span className="Current-Chapter">CURRENT CHAPTER</span>
                <span className="Current-Lesson">Chapter 13</span>
                <button
                id={movie.id}
                type="submit"
                value="delete"
                onClick={() => deleteMovie(movie.id, movie.title)}
                className="Delete-button"
                >
                  <span className="Delete-text">DELETE BOOK</span>
                </button>
              </div>
             
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
