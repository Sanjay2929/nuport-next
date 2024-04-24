"use client";
import React, { useState } from "react";
import Card from "./Card";
import { videoContent } from "../common/Helper";

// Video component displays a list of video cards
const Video = () => {
  // State to manage the visibility of additional cards
  const [showMore, setShowMore] = useState(false);
  const [displayedCards, setDisplayedCards] = useState(3);

  // Function to handle "Show More" button click
  const showMoreHandler = () => {
    setShowMore(!showMore);
    setDisplayedCards(showMore ? 3 : videoContent.length);
  };

  return (
    // Container for the video section with dark blue background
    <div className="bg-darkBlue container 2xl:max-w-[1380px] mx-auto 2xl:px-0 px-5">
      <div className="flex-wrap flex gap-y-6">
        {/* Mapping through videoContent array to display video cards */}
        {videoContent.slice(0, displayedCards).map((value, index) => {
          return (
            <div className="lg:w-4/12 sm:w-6/12 w-full sm:px-3" key={index}>
              {/* Rendering Card component for each video */}
              <Card
                videoSrc={value.video}
                imgSrc={value.thumbnail}
                title={value.title}
                time={value.time}
              />
            </div>
          );
        })}
      </div>
      {/* Button to toggle visibility of additional cards */}
      <div className="flex items-center justify-center text-offWhite font-semibold font-plus text-base mt-6 pb-[160px]">
        {videoContent.length > 4 && (
          <div className="flex items-center justify-center text-offWhite font-semibold font-plus text-base">
            <button
              className={`bg-tealBlue border border-tealBlue transition-all ease-in-out duration-300 py-[15px] px-5 rounded-full text-center common_btn group`}
              onClick={showMoreHandler}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
