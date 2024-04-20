import React from "react";
import { CircleArrow, SearchIcon } from "../common/Icons";

const Hero = () => {
  return (
    <div className="pt-[160px] pb-[120px] container 2xl:max-w-[1285px] px-5 2xl:px-0 mx-auto flex flex-col items-center">
      <div className="ps-5 pe-2 flex gap-2.5 items-center py-1.5 md:text-base text-xs yellow_gradient rounded-full border border-orangeDark text-white">
        Know us better <CircleArrow />
      </div>
      <h1 className="font-extrabold lg:text-[72px] pb-12 sm:text-5xl text-[36px] text-white text-center max-w-[1141px] mx-auto !leading-[110%] pt-4">
        Blogs
      </h1>
      <label
        htmlFor="search"
        className=" border border-gray rounded-full ps-5 flex items-center max-w-[400px] w-full"
      >
        <SearchIcon />
        <input
          type="text"
          className=" bg-transparent text-offWhite placeholder:text-offWhite font-plus w-full pe-3 font-normal text-sm border-0 focus-visible:outline-none ms-2 py-4"
          id="search"
          placeholder="Search blog"
        />
      </label>
    </div>
  );
};

export default Hero;
