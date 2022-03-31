import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsTrash } from 'react-icons/bs';
import { addNewMovie, removeMovie, movieWatched } from '../redux/movies/movies';

const Library = () => {
  const library = useSelector((state) => state.reducerMovies);
  const dispatch = useDispatch();

  const newMovie = {
    title: '',
    genre: '',
  };

  const [state, setState] = useState(newMovie);

  const selectGenre = (select) => {
    setState({ title: state.title, genre: select.options[select.selectedIndex].value });
  };

  const submitNewMovie = () => {
    if (state.title !== '' && state.genre !== '') {
      state.id = uuidv4();
      state.watched = false;
      dispatch(addNewMovie(state));
      setState({ title: '', genre: '' });
    }
  };

  const deleteMovie = (id) => {
    dispatch(removeMovie(id));
  };

  const watchedMovie = (id, toggle) => {
    const watched = !toggle;
    dispatch(movieWatched(id, watched));
  };

  return (
    <div className="movies-container">
      <h2>Add New Movie</h2>
      <div className="add-new-movie">
        <input
          className="inputs"
          type="text"
          placeholder="Add new movie"
          value={state.title}
          onChange={(e) => setState({ title: e.target.value.toUpperCase(), genre: state.genre })}
        />
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
          className="add-movie-button"
        >
          <span>Add Movie</span>
        </button>
      </div>
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
              <button
                id={movie.id}
                type="submit"
                value="delete"
                onClick={() => deleteMovie(movie.id)}
                className="delete-button"
              >
                <BsTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
