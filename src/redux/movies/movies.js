const local = JSON.parse(localStorage.getItem('movies'));
const movies = [
  {
    title: 'La vida es bella',
    genre: 'Drama',
    id: '1',
    watched: false,
  },
  {
    title: 'Como entrenar a tu dragon',
    genre: 'Fantasy',
    id: '2',
    watched: false,
  },
];

const initialState = typeof local !== 'undefined' ? local : movies;

const ADD_MOVIE = 'ADD_MOVIE';
const REMOVE_MOVIE = 'REMOVE_MOVIE';
const WATCHED_MOVIE = 'WATCHED_MOVIE';

// actions

export const addNewMovie = (payload) => ({
  type: ADD_MOVIE,
  payload,
});

export const removeMovie = (payload) => ({
  type: REMOVE_MOVIE,
  payload,
});

export const movieWatched = (id, payload) => ({
  type: WATCHED_MOVIE,
  id,
  payload,
});

// reducer
const reducerMovies = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, action.payload];
    case REMOVE_MOVIE:
      return state.filter((movie) => movie.id !== action.payload);
    case WATCHED_MOVIE:
      return state.map((movie) => (movie.id === action.id
        ? ({ ...movie, watched: action.payload }) : movie));
    default:
      return state;
  }
};

export default reducerMovies;
