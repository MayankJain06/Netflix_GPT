import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  // Ensure movies is an array, or default to an empty array
  const validMovies = Array.isArray(movies) ? movies : [];

  return (
    <div className='pX-6'>
        <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          {validMovies.length > 0 ? (
            validMovies.map((movie, index) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available.</p> // Fallback if no movies are present
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

