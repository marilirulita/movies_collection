import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './redux/movies/movies';
import Navbar from './components/Navbar';
import Library from './components/Library';
import WatchedMovies from './components/WatchedMovies';
import Watchlist from './components/Watchlist';
import './App.css';

function App() {
  const library = useSelector((state) => state.reducerMovies);
  const dispatch = useDispatch();

  // Default movies
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

  // this efect check for data in local sorage if any create a new item
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('movies'));
    if (typeof storage === 'undefined') {
      localStorage.setItem('movies', JSON.stringify(movies));
      dispatch(getData(movies));
    } else {
      dispatch(getData(storage));
    }
  }, []);

  // check for changes in library data (store) and update local storage
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(library));
  }, [library]);

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="watchedMovies" element={<WatchedMovies />} />
        <Route path="watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
}

export default App;
