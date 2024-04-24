"use client";
import React, { useEffect, useRef, useState } from "react";
import { VideoPlay } from "../common/Icons";
import Image from "next/image";

// VideoPlayer component renders a video player with play/pause functionality
const VideoPlayer = ({ src, imgSrc }) => {
  // State to track if the video is playing
  const [isPlaying, setIsPlaying] = useState(false);
  // State to track the current video source
  const [currentSrc, setCurrentSrc] = useState(src);
  // Reference to the video element
  const videoRef = useRef(null);

  // Reset video source when props change
  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  // Function to handle play/pause of the video
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Function to handle video end event
  const handleVideoEnded = () => {
    setIsPlaying(false);
    // Switch to the second video when the first one ends
    setCurrentSrc(secondSrc);
  };

  return (
    <div className="relative group xl:min-h-[257px] sm:min-h-[178px] min-h-[270px]">
      {/* Display image if the video is not playing */}
      {!isPlaying && (
        <Image
          src={imgSrc}
          className="w-full h-full"
          width={412}
          height={244}
          alt="img1"
        />
      )}

      {/* Video element */}
      <video
        onClick={handlePlayPause}
        ref={videoRef}
        src={src}
        onEnded={handleVideoEnded}
        style={{ width: "100%" }}
        className={`${isPlaying === false && "hidden"}`}
      ></video>

      {/* Play button */}
      {!isPlaying && (
        <span
          onClick={handlePlayPause}
          className="group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300 absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] bg-tealBlue rounded-full cursor-pointer"
        >
          <VideoPlay />
        </span>
      )}
    </div>
  );
};

export default VideoPlayer;
