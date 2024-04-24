"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { VideoPlay } from "../common/Icons";
import VideoPlayer from "./VideoPlayer";

// Card component that displays a video player, title, and time
const Card = ({ videoSrc, imgSrc, title, time }) => {
  return (
    // Container for the card with light teal background and styling
    <div className="bg-lightTeal border border-transparent hover:border-shark shadow-[3px_6px_12px_0px_#00000033] rounded-xl overflow-hidden flex flex-col h-full">
      {/* VideoPlayer component displaying the video */}
      <VideoPlayer src={videoSrc} imgSrc={imgSrc} />
      {/* Container for the text content */}
      <div className="p-5 flex flex-col justify-between h-full">
        {/* Title of the video */}
        <p className="text-base lg:text-xl font-plus font-medium text-offWhite mb-5">
          {title}
        </p>
        {/* Time of the video */}
        <p className="font-plus font-semibold text-sm text-gray">{time}</p>
      </div>
    </div>
  );
};

export default Card;
