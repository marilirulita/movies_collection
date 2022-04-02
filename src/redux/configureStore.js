import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerMovies, { getStorageData } from './movies/movies';
import reducerWishes, { getStorageWishes } from './wishes/wishes';

const reducer = combineReducers({
  reducerMovies,
  reducerWishes,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

store.dispatch(getStorageData());
store.dispatch(getStorageWishes());

export default store;
