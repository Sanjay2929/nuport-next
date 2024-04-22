"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { VideoPlay } from "../common/Icons";
import VideoPlayer from "./VideoPlayer";

const Card = ({ videoSrc, imgSrc, title, time }) => {
  return (
    <div className=" bg-lightTeal border border-transparent hover:border-shark shadow-[3px_6px_12px_0px_#00000033] rounded-xl overflow-hidden flex flex-col h-full">
      <VideoPlayer src={videoSrc} imgSrc={imgSrc} />
      <div className="p-5 flex flex-col justify-between h-full">
        <p className="text-base lg:text-xl font-plus font-medium text-offWhite mb-5">
          {title}
        </p>
        <p className=" font-plus font-semibold text-sm text-gray">{time}</p>
      </div>
    </div>
  );
};

export default Card;
