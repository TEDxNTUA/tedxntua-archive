"use client";
import React, { useState } from "react";
export default function WatchCard({
  title,
  thumbnail,
  bio,
  yt_link,
  speaker_name,
  speaker_info,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex flex-col bg-neutral-50 rounded-md border-[3px] w-full sm:w-[50%] md:w-[80%] lg:w-full border-[#eb0028] mx-auto h-full">
      <div className="flex flex-col grow lg:h-[70%]">
        <a target="_blank" href={yt_link} className="hover:cursor-pointer">
          <div className="flex flex-col rounded-sm justify-center items-center ">
            <img
              className="w-full h-full object-center object-cover hover:blur-[1px] hover:border-[2px] hover:border-[#eb0028]"
              src={thumbnail}
              alt={title}
            />
            <img
              src={"/play_button.png"}
              alt="play_button"
              className="absolute z-5 mx-auto lg:h-[10%]"
            />
          </div>
        </a>
        <div className="flex flex-col mb-2 grow lg:justify-evenly pr-[0.1vw]">
          <a target="_blank" href={yt_link} className="hover:cursor-pointer">
            <div className="px-3 md:px-4 lg:px-6 items-center">
              <h2 className="text-black py-2 md:py-2 font-semibold text-center text-lg lg:text-xl lg:h-fit 2xl:text-xl hover:text-[#eb0028] ">
                {title}
              </h2>
            </div>
          </a>
          <div className="flex flex-col gap-2">
            <div
              id="bio"
              className={`px-3 md:px-4 lg:px-6 overflow-y-hidden ${
                isExpanded ? "h-full" : "h-[15vh]"
              }`}
            >
              <p className="tracking-tighter text-justify text-base">{bio}</p>
            </div>

            <div
              className="flex justify-center align-center"
              id="show_more_btn"
            >
              <button
                className="text-[#eb0028] text-xs font-bold cursor-pointer border-black border rounded-md px-2 py-1 hover:bg-[#eb0028] hover:text-white"
                onClick={toggleContent}
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-row">
        <div className="w-11/12 bg-[#eb0028] h-[0.12rem] mx-auto my-1 md:my-2" />
        <a
          target="_blank"
          href={speaker_info}
          className="hover:cursor-pointer hover:font-extrabold align"
        >
          <div className="flex flex-col justify-center mb-2">
            <h3 className="font-bold text-center align-bottom text-xl hover:text-[#eb0028]">
              {speaker_name}
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
}
