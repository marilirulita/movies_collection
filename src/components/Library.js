import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const Library = () => {
  const newMovie = {
    title: '',
    genere: '',
    id: '',
  };
  const [state, setState] = useState(newMovie);
  const [library, setNewMovie] = useState([]);

  const submitNewMovie = () => {
    if (state.title !== '' && state.genere !== '') {
      state.id = uuidv4();
      setNewMovie([...library, state]);
      setState({ title: '', genere: '' });
    }
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
          onChange={(e) => setState({ title: e.target.value, genere: state.genere })}
        />
        <input
          className="inputs"
          type="text"
          placeholder="Select a genere"
          value={state.genere}
          onChange={(e) => setState({ title: state.title, genere: e.target.value })}
        />
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
            <span>{movie.genere}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
