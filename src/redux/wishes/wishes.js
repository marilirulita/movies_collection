const movie = [
  {
    title: 'TITANIC',
    genre: 'Drama',
    id: '1',
    watched: false,
    onlibrary: false,
  },
];

const initialState = [];

const GET_WISHES = 'GET_WISHES';
const ADD_WISH = 'ADD_WISH';
const REMOVE_WISH = 'REMOVE_WISH';
const ON_LIBRARY = 'ON_LIBRARY';
const NOT_ON_LIBRARY = 'NOT_ON_LIBRARY';

// actions
const getWishes = (payload) => ({
  type: GET_WISHES,
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

export const notOnLibrary = (payload) => ({
  type: NOT_ON_LIBRARY,
  payload,
});

export const getStorageWishes = () => async (dispatch) => {
  const answer = await JSON.parse(localStorage.getItem('wishes'));
  const data = answer !== null ? answer : movie;
  dispatch(getWishes(data));
}

// reducer
const reducerWishes = (state = initialState, action) => {
  switch (action.type) {
    case GET_WISHES:
      return [...action.payload];
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
