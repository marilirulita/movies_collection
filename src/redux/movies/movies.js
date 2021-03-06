const movies = [
  {
    title: 'BEAUTY AND THE BEAST',
    genre: 'Drama',
    id: '1',
    watched: false,
    onlibrary: false,
  },
  {
    title: 'LIFE IS BEAUTIFUL',
    genre: 'Fantasy',
    id: '2',
    watched: false,
    onlibrary: false,
  },
];

const initialState = [];

const GET_DATA = 'GET_DATA';
const ADD_MOVIE = 'ADD_MOVIE';
const REMOVE_MOVIE = 'REMOVE_MOVIE';
const WATCHED_MOVIE = 'WATCHED_MOVIE';

// actions
const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

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

export const getStorageData = () => async (dispatch) => {
  const answer = await JSON.parse(localStorage.getItem('movies'));
  const data = answer !== null ? answer : movies;
  dispatch(getData(data));
}

// reducer
const reducerMovies = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.payload];
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
