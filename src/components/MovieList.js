import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex scrollbar-hidden overflow-x-scroll ">
        <div className="flex cursor-pointer">
          {movies?.map((movie) => (
            <MovieCard
              className="cursor-pointer"
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.original_name || movie.title}
              release_date={movie.release_date || movie.first_air_date}
              overview={movie.overview}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
