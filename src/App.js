import React, { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./Search.svg";
import MovieCard from "./movieCard";
var API_URL = "http://www.omdbapi.com/?apikey=e74db551";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovie = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("");
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h1>MOVIEASY</h1>
        <div className="search">
          <input
            placeholder="Search movie. . . . . . "
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <img
            src={searchIcon}
            alt="search"
            onClick={() => {
              searchMovie(searchTerm);
            }}
          />
        </div>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((item) => (
            <MovieCard movie={item} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No such movie found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

// e74db551
