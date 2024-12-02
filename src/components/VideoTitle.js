import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-2">
        <button className="flex items-center gap-2 bg-white hover:bg-white/90 text-black font-medium px-6 py-2 rounded">
          <Play className="w-6 h-6" fill="currentColor" />
          Play
        </button>
        <button className="flex items-center gap-2 bg-zinc-500/70 hover:bg-zinc-500/50 text-white font-medium px-6 py-2 rounded">
          <Info className="w-6 h-6" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
