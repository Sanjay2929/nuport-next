"use client";
import { caseStudyIntro, valueSuggest } from "@/components/common/Helper";
import { Calender, ValueTick, VideoPlay } from "@/components/common/Icons";
import React, { useRef, useState } from "react";

const Introduction = () => {
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
    <div className="container 2xl:max-w-[1285px] px-5 2xl:px-0 mx-auto relative">
      <div className=" flex flex-wrap relative ">
        <div className=" lg:w-8/12 w-full lg:pe-3">
          {caseStudyIntro.map((content, index) => {
            return (
              <div className="mb-[64px]" key={index}>
                <p className=" md:text-4xl text-3xl text-white mb-6 font-plus font-bold tracking-[-2%]">
                  {content.heading}
                </p>
                <p className=" text-lightGray font-medium md:text-xl text-base font-plus">
                  {content.description}
                </p>
              </div>
            );
          })}
          <div className=" max-h-[405px] rounded-[20px] relative mb-[64px]">
            {/* Video Element */}
            <video
              ref={videoRef}
              className={`w-full h-full object-cover max-h-[405px] object-top rounded-xl md:rounded-[20px] relative z-10 ${
                isPlaying ? "cursor-pointer" : ""
              }`}
              loop={true}
              muted
              controls={isPlaying}
              poster="/assets/images/case-study/thumbnail.png"
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
          <div className="mb-[64px]">
            <p className=" md:text-4xl text-3xl text-white mb-6 font-plus font-bold tracking-[-2%]">
              How we helped iFarmer
            </p>
            <p className=" text-lightGray font-medium md:text-xl text-base font-plus">
              Lorem ipsum dolor sit amet consectetur. Dolor tristique vulputate
              diam tristique pellentesque bibendum eget. Ac aliquam sit ornare
              dapibus leo quis. Tellus sed iaculis purus quis. Commodo et
              rhoncus arcu ipsum est porttitor quis quis risus.Lorem ipsum dolor
              sit amet consectetur. Dolor tristique vulputate diam tristique
              pellentesque bibendum eget. Ac aliquam sit ornare dapibus leo
              quis. Tellus sed iaculis purus quis. Commodo et rhoncus arcu ipsum
              est porttitor quis quis risus.Lorem ipsum dolor sit amet
              consectetur. Dolor tristique vulputate diam tristique pellentesque
              bibendum eget. Ac aliquam sit ornare dapibus leo quis. Tellus sed
              iaculis purus quis.
            </p>
          </div>
        </div>
        <div className=" lg:w-4/12 w-full lg:ps-3">
          <div className=" bg-lightBlue sticky top-[64px] rounded-[20px] p-[28px]">
            <p className=" text-white font-bold md:text-xl text-base font-plus mb-[30px]  ">
              Values we added to iFarmer
            </p>
            {valueSuggest.map((content, index) => {
              return (
                <div className=" flex items-center gap-2 mb-[10px]" key={index}>
                  <ValueTick />
                  <p className=" text-white font-medium md:text-lg text-base font-plus">
                    {content}
                  </p>
                </div>
              );
            })}
            <button className="book_demo_btn bg-tealBlue flex items-center gap-2 px-5 lg:pt-3.5 py-3 lg:pb-4 rounded-full lg:text-base text-sm font-semibold text-white border-tealBlue  border duration-300 mt-20 w-full justify-center">
              <Calender /> Book a Free Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
