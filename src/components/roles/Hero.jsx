import React from "react";
import { CircleArrow } from "../common/Icons";

const Hero = () => {
  return (
    // Hero section with dark blue background
    <div className="bg-darkBlue">
      {/* Container for hero content */}
      <div className="md:pt-[160px] sm:py-[72px] pt-[72px] pb-10 md:pb-[120px] container 2xl:max-w-[1285px] px-5 2xl:px-0 mx-auto flex flex-col items-center">
        {/* Business solution label with arrow icon */}
        <div className="ps-5 pe-2 flex gap-2.5 items-center py-1.5 md:text-base text-xs yellow_gradient rounded-full border border-orangeDark text-white">
          Your business solution <CircleArrow />
        </div>
        {/* Main heading */}
        <h1 className="font-extrabold lg:text-[72px] sm:pb-7 pb-5 sm:text-5xl text-[32px] text-white text-center max-w-[1141px] mx-auto !leading-[110%] sm:pt-4 pt-3">
          Solutions <span className="text-garyMedium">by roles</span>
        </h1>
        {/* Subheading */}
        <p className="text-lightGray font-normal md:text-xl sm:text-lg text-base text-center max-w-[747px]">
          Whichever part of supply chain you belong to, we have a solution for
          you
        </p>
      </div>
    </div>
  );
};

export default Hero;
