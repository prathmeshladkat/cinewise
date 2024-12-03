import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addTvSeries } from "../utils/moviesSlice.js";

const useSeries = () => {
  //fetch data from tmdb
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addTvSeries(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useSeries;
