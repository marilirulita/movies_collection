import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Library from "./components/Library";
import WatchedMovies from "./components/WatchedMovies";
import Wishlist from "./components/Wishlist";
import "./App.css";

function App() {
  const library = useSelector((state) => state.reducerMovies);
  const wishes = useSelector((state) => state.reducerWishes);

  // check for changes in library data (store) and update local storage
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(library));
    localStorage.setItem("wishes", JSON.stringify(wishes));
  }, [library, wishes]);

  return (
    <div className="Bookstore-CMS">
    <div className="panel-bg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="watchedMovies" element={<WatchedMovies />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
