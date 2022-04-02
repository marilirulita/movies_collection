const local = JSON.parse(localStorage.getItem('wishes'));

const movie = [
  {
    title: 'TITANIC',
    genre: 'Drama',
    id: '1',
    watched: false,
    onlibrary: true,
  },
];

const initialState = typeof local !== 'undefined' ? local : movie;

const ADD_WISH = 'ADD_WISH';
const REMOVE_WISH = 'REMOVE_WISH';
const ON_LIBRARY = 'ON_LIBRARY';
const NOT_ON_LIBRARY = 'NOT_ON_LIBRARY';

// actions
export const addNewwish = (payload) => ({
  type: ADD_WISH,
  payload,
});

export const removeWish = (payload) => ({
  type: REMOVE_WISH,
  payload,
});

export const onLibrary = (payload) => ({
  type: ON_LIBRARY,
  payload,
});

export const notOnLibrary = (payload) => ({
  type: NOT_ON_LIBRARY,
  payload,
});

// reducer
const reducerWishes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WISH:
      return [...state, action.payload];
    case REMOVE_WISH:
      return state.filter((movie) => movie.id !== action.payload);
    case ON_LIBRARY:
      return state.map((movie) => (movie.title === action.payload
        ? ({ ...movie, onlibrary: true }) : movie));
    case NOT_ON_LIBRARY:
      return state.map((movie) => (movie.title === action.payload
        ? ({ ...movie, onlibrary: false }) : movie));
    default:
      return state;
  }
};

export default reducerWishes;
