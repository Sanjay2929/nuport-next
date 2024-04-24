import React from "react";
import { nuport } from "../common/Helper"; // Importing data for Nuport
import Image from "next/image";

const Fmcg = () => {
  return (
    <div className="xl:max-w-[1324px] container mx-auto">
      {/* Container for the FMCG section */}
      <div className="pt-12 flex justify-between gap-6 md:flex-row flex-col">
        {/* Left side content */}
        <div className="md:w-1/2">
          {/* Title for industry solutions */}
          <p className="font-plus font-bold text-base text-orangeDark leading-[126%] !tracking-[1.92px] uppercase">
            All industry solutions
          </p>
          {/* Title for FMCG */}
          <p className="pt-3 font-plus font-bold lg:text-[48px] md:text-[42px] sm:text-[36px] text-[32px] leading-[120%] tracking-[0.96px] text-white">
            Why Nuport for FMGC
          </p>
          {/* Render Nuport data */}
          <div className="sm:pt-4">
            {/* Mapping over Nuport data */}
            {nuport.map((fmcg, index) => (
              <div
                key={index}
                className={` sm:py-7 py-6 border-darkGray ${
                  nuport.length === index + 1 ? "md:border-b":"border-b"
                }`}
              >
                {/* Title for each section */}
                <p className="font-plus font-bold leading-[140%] text-white lg:text-2xl sm:text-xl text-lg">
                  {fmcg.title}
                </p>
                {/* Description for each section */}
                <p className="md:pt-4 pt-2 text-lightGray font-plus font-normal sm:text-lg text-base max-w-[630px] leading-[140%]">
                  {fmcg.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Right side image */}
        <div className="md:w-1/2">
          <div className="flex md:justify-end justify-center md:sticky top-10">
            {/* Image of the FMCG industry */}
            <Image
              className="rounded-[20px] object-cover sm:h-full h-[389px]"
              src="/assets/images/industry/fmcg.png"
              height={559}
              width={512}
              alt="fmcg industry"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fmcg;
