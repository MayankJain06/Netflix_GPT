
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () =>{
    const  upcomingMovies = useSelector((store)=>store.movies. upcomingMovies);
   
// Fetch Data from the TMDB API and update store
const dispatch = useDispatch();
const getUpcomingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const json = await data?.json();
    //console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
}

useEffect(()=>{
    ! upcomingMovies &&
    getUpcomingMovies();
},[]);

};

export default  useUpcomingMovies;