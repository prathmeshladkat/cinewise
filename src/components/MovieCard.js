import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants.js";
import { CalendarIcon, StarIcon, XIcon } from "lucide-react";

const MovieCard = ({ posterPath, title, release_date, overview }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  if (!posterPath) return null;

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className="p-2  w-[132px] h-[184.8px] rounded-2xl overflow-hidden shadow-lg ">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="object-cover"
        sizes="132px"
        onClick={openDialog}
      />
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-black text-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="relative p-6">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                onClick={closeDialog}
              >
                <XIcon className="h-6 w-6" />
              </button>
              <h3 className="text-2xl font-bold mb-4 pr-8">{title}</h3>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={IMG_CDN_URL + posterPath}
                  alt={title}
                  className="w-full sm:w-40 h-auto rounded-lg shadow-md object-cover"
                />
                <div className="flex-1 space-y-2">
                  <div className="flex items-center text-sm text-gray-400">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <p>Release Date: {release_date}</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {overview}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
