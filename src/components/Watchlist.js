import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeWish, addNewwish } from "../redux/wishes/wishes";

const Watchlist = () => {
  const wishes = useSelector((store) => store.reducerWishes);
  const library = useSelector((store) => store.reducerMovies);
  const dispatch = useDispatch();

  const newMovie = {
    title: "",
    genre: "",
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
    if (state.title !== "" && state.genre !== "") {
      const answer = library.filter((movie) => movie.title === state.title);
      answer.length > 0
        ? dispatch(addNewwish(answer[0]))
        : dispatch(addNewwish(state));
      setState(newMovie);
    }
  };

  const deleteWish = (id) => {
    dispatch(removeWish(id));
  };

  return (
    <div className="movies-container">
      <div className="add-book">
        <h2 className="add-book-title">My Wishlist</h2>
        <div className="inputs-elements">
          <input
            className="inputs"
            type="text"
            placeholder="Add new movie"
            value={state.title}
            onChange={(e) =>
              setState({ ...state, title: e.target.value.toUpperCase() })
            }
          />
          <label htmlFor="genre">
            <select
              name="genre"
              id="genre"
              onClick={(e) => selectGenre(e.target)}
            >
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
            className="add-book-button"
          >
            <span className="ADD-BOOK">Add Movie</span>
          </button>
        </div>
      </div>
      <div className="books-display">
        {wishes.length === 0 ? (
          <h3 className="empty-list">Any movie in your library yet</h3>
        ) : (
          wishes.map((movie) => (
            <div key={movie.id} className="Lesson-Panel">
              <div className="book-info">
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
                      className="btnNotWatched"
                      type="submit"
                      /* agregar funcion para agregar movie en library */
                    >
                      <span className="Completed">Add to Library</span>
                    </button>
                  </div>
                </div>
                <div className="chapter-section">
                  <span className="Current-Lesson">
                    {(movie.onlibrary && "This movie is in your library") ||
                      (!movie.onlibrary && "Not in your libray yet")}
                  </span>

                  <button
                    id={movie.id}
                    type="submit"
                    value="delete"
                    onClick={() => deleteWish(movie.id)}
                    className="Delete-button"
                  >
                    <span className="Delete-text">DELETE MOVIE</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Watchlist;
