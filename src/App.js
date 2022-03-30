import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Library from './components/Library';
import WatchedMovies from './components/WatchedMovies';
import Watchlist from './components/Watchlist';
import './App.css';

function App() {
  return (
    <div>
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
