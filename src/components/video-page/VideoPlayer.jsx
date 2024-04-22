"use client";
import React, { useEffect, useRef, useState } from "react";
import { VideoPlay } from "../common/Icons";
import Image from "next/image";

const VideoPlayer = ({ src, imgSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const videoRef = useRef(null);

  useEffect(() => {
    // Reset video source when props change
    setCurrentSrc(src);
  }, [src]);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    // Switch to the second video when the first one ends
    setCurrentSrc(secondSrc);
  };
  return (
    <div className=" relative group xl:min-h-[257px] sm:min-h-[178px] min-h-[270px]">
      {!isPlaying && (
        <Image
          src={imgSrc}
          className=" w-full h-full"
          width={412}
          height={244}
          alt="img1"
        />
      )}

      <video
        onClick={handlePlayPause}
        ref={videoRef}
        src={src}
        onEnded={handleVideoEnded}
        style={{ width: "100%" }}
        className={`${isPlaying === false && "hidden"}`}
      ></video>

      {!isPlaying && (
        <span
          onClick={handlePlayPause}
          className=" group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300 absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] bg-tealBlue rounded-full cursor-pointer"
        >
          <VideoPlay />
        </span>
      )}
    </div>
  );
};

export default VideoPlayer;
