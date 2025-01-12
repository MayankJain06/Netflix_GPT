import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSlice';


const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store)=>store.config.lang);
    const searchText = useRef(null);
    //console.log(process.env.REACT_APP_OPENAI_KEY);
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_OPENAI_KEY);


    const searchMovieTMDB = async (movie)=>{
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
      const json = await data.json();

      return json.results;
    }
    const handleGptSearchClick =async ()=>{
        console.log(searchText.current.value);

        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + "only  give me names of 5 Movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        // Make an API Call to GPT API and get Movie Results 
        const gptResults =await model.generateContent(gptQuery);
        console.log(gptResults);
        console.log(gptResults.response?.candidates[0].content?.parts[0]?.text);

        if(!gptResults.response){
          //TODO: Write Error Handling
        }
        // Hera Pheri, Golmaal, Bhool Bhulaiyaa, Chup Chup Ke, Phir Hera Pheri
        const gptMovies = gptResults?.response?.candidates[0]?.content?.parts[0]?.text?.split(",");

         // [Hera Pheri, Golmaal, Bhool Bhulaiyaa, Chup Chup Ke, Phir Hera Pheri]

         // For Each Movie i will try to search TMDB API  
         const promiseArray = gptMovies?.map(movie=>searchMovieTMDB(movie));
         // [Promises, Promises, Promises, Promises, Promises]

         const tmdbResults =await Promise.all(promiseArray); 
         console.log("data is ",tmdbResults);
         dispatch(addGptMovieResults({movieNames:gptMovies,movieResults:tmdbResults}));
    }

  return (
    <div className='pt-[10%] flex justify-center' onSubmit={(e)=>e.preventDefault()}>
     <form className=' w-1/2 bg-black grid grid-cols-12'>
        <input ref={searchText} type="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceHolder}></input>
        <button className='py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg'onClick={handleGptSearchClick}>{lang[langKey].search}</button>
     </form>
    </div>
  )
}

export default GptSearchBar;
