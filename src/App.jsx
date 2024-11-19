import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import MovieList from './components/Movie';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('marvel'); 

  const fetchMovies = (searchTerm) => {
    if (!searchTerm.trim()) return;
    const apiKey = import.meta.env.VITE_MY_MOVIE_API;

    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      })
  
  };
  
  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  return (
    <div className="min-h-screen">
      <Header title="FinProH8"/>
      <div className="container mx-auto p-4">
      <Search setQuery={setQuery} />
        <h2 className="text-2xl text-blue-500 font-semibold my-4">Show your favorite movies</h2>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
