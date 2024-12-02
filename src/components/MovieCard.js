import React from "react";
import { IMG_CDN_URL } from "../utils/constants.js";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="p-2  w-[132px] h-[184.8px] rounded-2xl overflow-hidden shadow-lg ">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="object-cover"
        sizes="132px"
      />
    </div>
  );
};

export default MovieCard;
