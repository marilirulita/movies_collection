import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsTrash } from 'react-icons/bs';
import {
  removeWish, addNewwish, onLibrary,
} from '../redux/wishes/wishes';

const Watchlist = () => {
  const wishes = useSelector((store) => store.reducerWishes);
  const library = useSelector((store) => store.reducerMovies);
  const dispatch = useDispatch();

  const newMovie = {
    title: '',
    genre: '',
    id: uuidv4(),
    watched: false,
    onlibrary: false,
  };
  const [state, setState] = useState(newMovie);

  const selectGenre = (select) => {
    setState({ ...state, genre: select.options[select.selectedIndex].value });
  };

  // create a new movie to the wishlist store
  const submitNewWish = () => {
    if (state.title !== '' && state.genre !== '') {
      dispatch(addNewwish(state));
      setState(newMovie);
    }
  };

  const deleteWish = (id) => {
    dispatch(removeWish(id));
  };

  // compare library store to wishlist for check coincidences
  const compareLibrary = () => {
    library.map((movie) => (wishes.map((wish) => (movie.title === wish.title
      ? dispatch(onLibrary(movie.title)) : wish))));
  };

  // get data in wishes local storage item if any
  useEffect(() => {
    compareLibrary();
  }, []);

  // track changes for update local storage wishes item
  // useEffect(() => {
  //   localStorage.setItem('wishes', JSON.stringify(wishes));
  // }, [wishes]);

  return (
    <div className="movies-container">
      <h2>My Watchlist</h2>
      <div className="add-new-movie">
        <input
          className="inputs"
          type="text"
          placeholder="Add new movie"
          value={state.title}
          onChange={(e) => setState({ ...state, title: e.target.value.toUpperCase() })}
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
            <div className="deleteWatch">
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
