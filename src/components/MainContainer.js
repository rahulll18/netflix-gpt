import React from "react";
import { useSelector } from "react-redux";
import VideoBG from "./VideoBG";
import Videotitle from "./Videotitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowplayingMovies);
  
  //early return
  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview } = mainMovie;

  return (
    <div>
      <Videotitle title={original_title} overview={overview} />
      <VideoBG />
    </div>
  );
};

export default MainContainer;
