import React from "react";
import { nuport } from "../common/Helper"; // Importing data from Helper file
import Image from "next/image"; // Importing Image component from Next.js

const LastMileDelivery = () => {
  return (
    <div className="xl:max-w-[1324px] container mx-auto">
      {/* Main container */}
      <div className="pt-12 flex justify-between gap-6 md:flex-row flex-col">
        {/* Left side content */}
        <div className="md:w-1/2">
          {/* Title section */}
          <p className="font-plus font-bold text-base text-orangeDark leading-[126%] !tracking-[1.92px] uppercase">
            All industry solutions
          </p>
          {/* Subtitle */}
          <p className="pt-3 font-plus font-bold lg:text-[48px] md:text-[42px] sm:text-[36px] text-[32px] leading-[120%] tracking-[0.96px] text-white">
            Why Nuport for last mile delivery
          </p>
          {/* Mapping through data and rendering */}
          <div className="sm:pt-4">
            {nuport.map((fmcg, index) => (
              <div
                key={index}
                className="sm:py-7 py-6 border-b border-darkGray"
              >
                {/* Individual item title */}
                <p className="font-plus font-bold leading-[140%] text-white lg:text-2xl sm:text-xl text-lg">
                  {fmcg.title}
                </p>
                {/* Individual item description */}
                <p className="md:pt-4 pt-2 text-lightGray font-plus font-normal sm:text-lg text-base max-w-[630px] leading-[140%]">
                  {fmcg.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Right side image */}
        <div className="md:w-1/2">
          {/* Image container */}
          <div className="flex md:justify-end justify-center md:sticky top-10">
            {/* Image component */}
            <Image
              className="rounded-[20px] object-cover sm:h-full h-[389px]"
              src="/assets/images/industry/fmcg.png" // Image source
              height={559} // Image height
              width={512} // Image width
              alt="fmcg industry" // Alternative text for the image
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastMileDelivery;
