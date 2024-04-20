import React from "react";
import { CircleArrow } from "../common/Icons";

const Hero = () => {
  return (
    <div className="pt-[160px] pb-[120px] flex flex-col items-center">
      <div className="ps-5 pe-2 flex gap-2.5 items-center py-1.5 md:text-base text-xs yellow_gradient rounded-full border border-orangeDark text-white">
        Know us better <CircleArrow />
      </div>
      <h1 className="font-extrabold lg:text-[72px] pb-12 sm:text-5xl text-[36px] text-white text-center max-w-[1141px] mx-auto !leading-[110%] pt-4">
        Blogs
      </h1>
    </div>
  );
};

export default Hero;
