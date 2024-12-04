import React from "react";
import GptSearchBar from "./GptSearchBar.js";
import { BG_URL } from "../utils/constants.js";
import GptMovieSuggestions from "./GptMovieSuggestions.js";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover w-screen"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
        <h1 className="text-4xl font-bold text-center text-gray-800 my-8 p-6 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-lg shadow-lg transform -skew-y-1 hover:skew-y-0 transition-transform duration-300 ease-in-out">
          This feature is under maintenance
        </h1>
      </div>
    </>
  );
};

export default GptSearch;
