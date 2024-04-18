"use client";

import React, { useRef, useState } from "react";
import BookDemo from "../common/BookDemo";
import { CircleRight, VideoPlay } from "../common/Icons";

const OurWork = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing
  const videoRef = useRef(null); // Ref to the video element

  // Function to toggle play/pause of the video
  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Function to handle click on the video element
  const handleClickOnVideo = () => {
    if (!videoRef.current.paused) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="bg-darkBlue -mt-1">
      <div className="xl:max-w-[1324px] container px-5 pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 mx-auto">
        {/* Grid layout */}
        <div className="grid md:grid-cols-2 md:gap-6 lg:gap-9 xl:gap-14 items-center">
          {/* Left Section */}
          <div className="flex justify-center md:justify-start items-center ">
            <div
              className="relative"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {/* Video Element */}
              <video
                ref={videoRef}
                className={`w-full max-w-[334px] lg:max-w-[521px] h-[389px] md:h-[460px] lg:h-[606px] object-cover rounded-xl md:rounded-[20px] relative z-10 ${
                  isPlaying ? "cursor-pointer" : ""
                }`}
                loop={true}
                muted
                controls={isPlaying}
                poster="/assets/images/homepage/our-work/our-work-people.webp"
                onClick={handleClickOnVideo}
              >
                <source src="/assets/video/video.mp4" type="video/mp4" />
              </video>
              {/* Play/Pause Button */}
              <button
                aria-label="watch"
                className="absolute top-1/2 hover:scale-[1.1] duration-300 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[81px] w-[58px] lg:h-[81px] h-[58px] flex justify-center items-center z-10"
                onClick={togglePlayPause}
              >
                {isPlaying ? "" : <VideoPlay />}
              </button>
            </div>
          </div>
          {/* Right Section */}
          <div className="pt-12 md:pt-0 xl:ps-6" data-aos="fade-left">
            {/* Title */}
            <p className="tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase">
              Our work process
            </p>
            <h2 className=" text-[32px] !leading-[110%] md:max-w-[500px] lg:max-w-[731px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus font-extrabold pt-3 text-white ">
              How we <span className="text-garyMedium">do it</span>
            </h2>
            {/* Description */}
            <p className="text-lightGray text-base lg:text-xl !leading-[140%] font-medium pt-5 md:pt-6 lg:pt-7">
              Leave your competition in the dust with the ability to orchestrate
              a fully visible, elastically scalable, and endlessly optimizable
              supply chain from a single, integrated platform.
            </p>
            {/* Process Steps */}
            <div className="flex gap-[10px] sm:gap-3 items-center pt-5 md:pt-6 lg:pt-7">
              <span className="max-w-[19px] sm:max-w-[23px] inline-block">
                <CircleRight />
              </span>
              <p className="font-semibold text-sm md:text-base !leading-[140%] lg:text-lg text-offWhite">
                Supply Chain Intelligence & Consulting
              </p>
            </div>
            <div className="flex gap-[10px] sm:gap-3 items-center pt-[18px]">
              <span className="max-w-[19px] sm:max-w-[23px] inline-block">
                <CircleRight />
              </span>
              <p className="font-semibold text-sm md:text-base !leading-[140%] lg:text-lg text-offWhite">
                Supply Chain Software
              </p>
            </div>
            <div className="flex gap-[10px] sm:gap-3 items-center pt-[18px]">
              <span className="max-w-[19px] sm:max-w-[23px] inline-block">
                <CircleRight />
              </span>
              <p className="font-semibold text-sm md:text-base !leading-[140%] lg:text-lg text-offWhite">
                End-To-End Logistics
              </p>
            </div>
            {/* Book Demo Button */}
            <div className="pt-9 md:pt-10 lg:pt-12">
              <BookDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
