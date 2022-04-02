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

const GET_WISH = 'GET_WISH';
const ADD_WISH = 'ADD_WISH';
const REMOVE_WISH = 'REMOVE_WISH';
const ON_LIBRARY = 'ON_LIBRARY';

// actions
export const getWishes = (payload) => ({
  type: GET_WISH,
  payload,
});

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

// reducer
const reducerWishes = (state = initialState, action) => {
  switch (action.type) {
    case GET_WISH:
      return [...action.payload];
    case ADD_WISH:
      return [...state, action.payload];
    case REMOVE_WISH:
      return state.filter((movie) => movie.id !== action.payload);
    case ON_LIBRARY:
      return state.map((movie) => (movie.title === action.payload
        ? ({ ...movie, onlibrary: true }) : movie));
    default:
      return state;
  }
};

export default reducerWishes;
