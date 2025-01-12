
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {  addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () =>{
    const popularMovies = useSelector((store)=>store.movies.popularMovies);
// Fetch Data from the TMDB API and update store
const dispatch = useDispatch();
const getPopulargMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data?.json();
    //console.log(json.results);
    dispatch(addPopularMovies(json.results));
}

useEffect(()=>{
   !popularMovies&& getPopulargMovies();
},[]);

};

export default  usePopularMovies;