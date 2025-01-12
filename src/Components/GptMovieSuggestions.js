import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from '.././Components/MovieList';

const GptMovieSuggestions = () => {
  const {movieNames,movieResults} = useSelector(store=>store.gpt);
  if(!movieNames) return null;
  return (
    <div className='p-8 m-8 bg-black text-white bg-opacity-80'>
     {movieNames.map((movieName,index)=> (
          <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
          />
     ))
     }
    </div>
  )
}

export default GptMovieSuggestions;
