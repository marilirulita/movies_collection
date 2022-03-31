import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';

const Library = () => {
  const newMovie = {
    title: '',
    genre: '',
    id: '',
  };
  const [state, setState] = useState(newMovie);
  const [library, setNewMovie] = useState([]);

  const selectGenre = (select) => {
    setState({ title: state.title, genre: select.options[select.selectedIndex].value });
  };

  const submitNewMovie = () => {
    if (state.title !== '' && state.genre !== '') {
      state.id = uuidv4();
      setNewMovie([...library, state]);
      setState({ title: '', genre: '' });
    }
  };

  const deleteMovie = (id) => {
    setNewMovie((library) => library.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <div>
        <input
          className="inputs"
          type="text"
          placeholder="Add new movie"
          value={state.title}
          onChange={(e) => setState({ title: e.target.value.toUpperCase(), genre: state.genre })}
        />
        <label htmlFor="genre">
          Choose a genre:
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
      <div>
        {library.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <span>{movie.genre}</span>
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
        ))}
      </div>
    </div>
  );
};

export default Library;
