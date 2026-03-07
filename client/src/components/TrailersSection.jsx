import React, { useState } from "react";
import ReactPlayer from "react-player";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import { PlayCircleIcon } from "lucide-react";

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
console.log(dummyTrailers[0]);
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      <div className="relative mt-6">
        <BlurCircle top="-100px" right="-100px" />

        {/* ReactPlayer wrapper */}
        <ReactPlayer
          src={currentTrailer.videoUrl} // keeps your selected trailer
          controls={true}               // show play/pause buttons
          width="100%"
          height="100%"
          className="mx-auto max-w-[960px] aspect-video"
          playing={true}                // autoplay on click
          muted={true}                   // required for autoplay in browsers
        />
{/* <iframe width="560" height="315" src={currentTrailer.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

      </div> {/* <-- THIS CLOSING DIV WAS MISSING */}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-4xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className="relative hover:opacity-80 hover:-translate-y-1 duration-300 transition h-36 md:h-60 cursor-pointer"
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className="rounded-lg w-full h-full object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
