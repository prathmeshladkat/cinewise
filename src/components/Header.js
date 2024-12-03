import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants.js";
import { toggleGptSearchView } from "../utils/gptSlice.js";
import { changeLanguage } from "../utils/configSlice.js";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // user is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //toggle gpt search button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-full px-4 sm:px-6 py-2 bg-gradient-to-b from-black to-transparent z-10 fixed top-0 left-0">
      <div className="flex justify-between items-center">
        <img src={LOGO} alt="logo" className="w-24 sm:w-32 md:w-48" />
        {user && (
          <div className="flex items-center">
            <div className="hidden md:flex items-center">
              {showGptSearch && (
                <select
                  className="p-2 m-2 bg-gray-900 text-white rounded-lg bg-opacity-70"
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
              <button
                className="py-2 px-4 mx-2 bg-purple-800 text-white rounded-lg hover:bg-purple-700"
                onClick={handleGptSearchClick}
              >
                {showGptSearch ? "HomePage" : "GPT Search"}
              </button>
              <button
                onClick={handleSignOut}
                className="py-2 px-4 text-white hover:underline"
              >
                Sign Out
              </button>
            </div>
            <img
              src={user.photoURL}
              alt="user icon"
              className="w-8 h-8 rounded-full ml-2"
            />
            <button
              className="md:hidden ml-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      {isMenuOpen && user && (
        <div className="md:hidden mt-2">
          {showGptSearch && (
            <select
              className="w-full p-2 mb-2 bg-gray-900 text-white rounded-lg bg-opacity-70"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="w-full py-2 px-4 mb-2 bg-purple-800 text-white rounded-lg hover:bg-purple-700"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="w-full py-2 px-4 text-white hover:underline"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
