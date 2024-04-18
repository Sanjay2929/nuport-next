"use client";

import React, { useRef, useState } from "react";
import { testimonialsVideoList } from "../common/Helper";

import { VideoPlay } from "../common/Icons";
import CommonBtn from "../common/CommonBtn";

const TestimonialsVideo = () => {
  const videoRefs = useRef([]); // Refs to store references to video elements
  const [isPlaying, setIsPlaying] = useState([]); // State to track which videos are playing

  // Function to toggle play/pause of a video
  const togglePlayPause = (index) => {
    const updatedIsPlaying = Array(testimonialsVideoList.length).fill(false);
    updatedIsPlaying[index] = true;
    setIsPlaying(updatedIsPlaying);

    // Pause other videos when one is played
    videoRefs.current.forEach((ref, i) => {
      if (i !== index && ref) {
        ref.pause();
      }
    });

    // Play or pause the clicked video
    if (updatedIsPlaying[index]) {
      videoRefs.current[index].play();
    } else {
      videoRefs.current[index].pause();
    }
  };

  // Function to handle click on a video
  const handleClickOnVideo = (index) => {
    if (isPlaying[index]) {
      // Pause the video if it's playing
      videoRefs.current[index].pause();
      setIsPlaying((prevState) => {
        const newState = [...prevState];
        newState[index] = false;
        return newState;
      });
    }
  };

  return (
    <div
      id="videos"
      className="xl:max-w-[1324px] container px-5 pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-40 mx-auto"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:gap-4">
        <div className="p-0" data-aos="fade-up">
          <p className="tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase">
            Testimonials + Videos
          </p>
          <h2 className=" text-[32px] !leading-[110%] md:max-w-[500px] lg:max-w-[731px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus font-extrabold pt-3 text-shark ">
            Join the{" "}
            <span className="text-garyMedium">automation revolution</span>
          </h2>
        </div>
        <div className="flex items-end pt-10 md:pt-0">
          <CommonBtn title="Explore All Video" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-4 lg:gap-6 pt-12 sm:pt-14 md:pt-16 lg:pt-[84px]">
        {testimonialsVideoList.map((value, index) => {
          return (
            <div
              key={index}
              className="max-w-[413px] mx-auto"
              data-aos="fade-up"
              data-aos-delay={`${index}00`}
            >
              <div className="relative">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className={`w-full max-w-[412px] object-cover xl:h-[298px] lg:h-[250px] sm:h-[200px] h-[242px] rounded-xl relative z-10 ${
                    isPlaying[index] ? "cursor-pointer" : ""
                  }`}
                  loop={true}
                  muted
                  controls={isPlaying[index]}
                  poster={value.image}
                  onClick={() => handleClickOnVideo(index)}
                >
                  <source src={value.video} type="video/mp4" />
                </video>
                {/* Show play button if video is not playing */}
                {!isPlaying[index] && (
                  <button
                    aria-label="watch"
                    className="absolute top-1/2 left-1/2 hover:scale-[1.1] duration-300 transform -translate-x-1/2 -translate-y-1/2 lg:w-[52px] w-[45px] lg:h-[52px] h-[45px] flex justify-center items-center z-10 sm:max-w-none"
                    onClick={() => togglePlayPause(index)}
                  >
                    <VideoPlay />
                  </button>
                )}
              </div>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold !leading-[140%] pt-2 md:pt-4 lg:pt-5 text-riverBed">
                {value.title}
                <span className="text-shark font-bold">{value.spantitle}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialsVideo;
