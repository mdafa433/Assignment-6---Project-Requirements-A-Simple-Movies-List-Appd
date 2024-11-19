import React from 'react';

function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-5 gap-4 mt-4">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="bg-orange-500 rounded shadow-lg overflow-hidden">
          <img src={movie.Poster} alt={movie.Title} className="w-full h-96 object-cover"/>
          <div className="p-2 text-center">
            <h3 className="text-sm font-bold text-white">{movie.Title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
