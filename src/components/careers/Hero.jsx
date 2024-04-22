import React from "react";
import { CircleArrow } from "../common/Icons";

const Hero = () => {
  return (
    <div className="bg-darkBlue">
      <div className="md:pt-[160px] py-[72px] md:pb-[120px] container 2xl:max-w-[1285px] px-5 2xl:px-0 mx-auto flex flex-col items-center">
        <div className="ps-5 pe-2 flex gap-2.5 items-center py-1.5 md:text-base text-xs yellow_gradient rounded-full border border-orangeDark text-white">
          Build with us <CircleArrow />
        </div>
        <h1 className="font-extrabold lg:text-[72px] pb-7 sm:text-5xl text-[36px] text-white text-center max-w-[1141px] mx-auto !leading-[110%] pt-4">
          Careers
        </h1>
        <p className="text-lightGray font-normal text-xl text-center">
          Become a critical part of our team.
        </p>
      </div>
    </div>
  );
};

export default Hero;
