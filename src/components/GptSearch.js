import React from "react";
import GptSearchBar from "./GptSearchBar.js";
import { BG_URL } from "../utils/constants.js";
import GptMovieSuggestions from "./GptMovieSuggestions.js";
import GeminiSearchBar from "./geminiSearchBar.js";

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
        <GeminiSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
