import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondoryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-60 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies.nowplayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowplayingMovies} />
        <MovieList title={"Horror Movies"} movies={movies.nowplayingMovies} />
      </div>
    </div>
  );
};

export default SecondoryContainer;
