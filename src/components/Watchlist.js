import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsTrash } from 'react-icons/bs';
import {
  removeWish, addNewwish, getWishes, onLibrary,
} from '../redux/wishes/wishes';

const Watchlist = () => {
  const wishes = useSelector((store) => store.reducerWishes);
  const library = useSelector((store) => store.reducerMovies);
  const dispatch = useDispatch();
  const newMovie = {
    title: '',
    genre: '',
  };
  const [state, setState] = useState(newMovie);

  const selectGenre = (select) => {
    setState({ title: state.title, genre: select.options[select.selectedIndex].value });
  };

  const submitNewWish = () => {
    if (state.title !== '' && state.genre !== '') {
      state.id = uuidv4();
      state.onlibrary = false;
      dispatch(addNewwish(state));
      setState({ title: '', genre: '' });
    }
  };

  const deleteWish = (id) => {
    dispatch(removeWish(id));
  };

  const compareLibrary = () => {
    library.map((movie) => dispatch(onLibrary(movie.title)));
  };

  useEffect(() => {
    compareLibrary();
    const wishes = JSON.parse(localStorage.getItem('wishes'));
    if (typeof wishes !== 'undefined') {
      dispatch(getWishes(wishes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wishes', JSON.stringify(wishes));
  }, [wishes]);

  return (
    <div className="movies-container">
      <h2>My Watchlist</h2>
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
          onClick={submitNewWish}
          className="add-movie-button"
        >
          <span>Add Movie</span>
        </button>
      </div>
      <div className="display-movies">
        {wishes.map((movie) => (
          <div key={movie.id} className="movie-container">
            <div>
              <h3>{movie.title}</h3>
              <span>{movie.genre}</span>
            </div>
            <div>
              <span
                className={(movie.onlibrary && 'btnwatched') || (!movie.onlibrary && 'btnNotWatched')}
              >
                {(movie.onlibrary && 'This movie is in your library') || (!movie.onlibrary && 'Not in your libray yet')}
              </span>
              <button
                id={movie.id}
                type="submit"
                value="delete"
                onClick={() => deleteWish(movie.id)}
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

export default Watchlist;
