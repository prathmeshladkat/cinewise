import React from "react";
import MovieList from "./MovieList";

import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52 pl-12  relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topratedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Tv Series"} movies={movies.tvseries} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
