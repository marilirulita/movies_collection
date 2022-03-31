import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import reducerMovies from './movies/movies';

const reducer = combineReducers({
  reducerMovies,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
