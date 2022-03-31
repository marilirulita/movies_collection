import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import reducerMovies from './movies/movies';
import reducerWishes from './wishes/wishes';

const reducer = combineReducers({
  reducerMovies,
  reducerWishes,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
