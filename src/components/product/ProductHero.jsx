"use client";
import React, { useState } from "react";
import { ArrowUpward, CircleArrow, SearchIcon } from "../common/Icons";
const ProductHero = ({ heading, description, topbtn, type }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div className="overflow-hidden bg-darkBlue">
        <div className="container 2xl:max-w-[1380px] mx-auto flex justify-center items-center flex-col 2xl:px-0 px-5 2xl:pt-40 md:pt-24 pt-[72px] relative">
          <div className="ps-5 pe-2 flex gap-2.5 items-center py-1.5 md:text-base text-xs yellow_gradient rounded-full border border-orangeDark text-white">
            {topbtn} <CircleArrow />
          </div>
          <h1 className="font-extrabold xl:text-[96px] lg:text-[80px] sm:text-5xl text-garyMedium text-[36px] text-center max-w-[1141px] mx-auto leading-[110%] pt-4">
            {heading}
          </h1>
          {description === undefined ? (
            ""
          ) : (
            <p className="max-w-[747px] mx-auto md:text-xl text-base font-medium text-center text-lightGray md:pt-7 pt-3 md:pb-14 pb-10">
              {description}
            </p>
          )}
          {type === "toggle" ? (
            <div className=" flex items-center justify-center mt-[-12px] md:mb-[120px] mb-20 gap-3">
              <p className=" font-plus font-medium text-xl text-center text-offWhite">
                Enterprise
              </p>
              <div
                className={`w-12 h-6 rounded-xl bg-easternBlue p-1 relative ${
                  isChecked === false && " !bg-white"
                }`}
                onClick={handleToggle}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full absolute transition-all ease-in-out duration-300 end-1 ${
                    isChecked === false && "end-[56%] bg-easternBlue"
                  }`}
                ></div>
              </div>
            </div>
          ) : type === "search" ? (
            <label
              htmlFor="search"
              className=" border border-gray rounded-full ps-5 flex items-center max-w-[400px] mb-[120px] w-full mt-12"
            >
              <SearchIcon />
              <input
                type="text"
                className=" bg-transparent text-offWhite placeholder:text-offWhite font-plus w-full pe-3 font-normal text-sm border-0 focus-visible:outline-none ms-2 py-4"
                id="search"
                placeholder="Search blog"
              />
            </label>
          ) : (
            <div className="flex items-center sm:flex-row flex-col md:gap-6 gap-4 lg:pb-[415px] sm:pb-[200px] pb-32">
              <button className="bg-tealBlue flex items-center gap-2 px-5 pt-3.5 pb-4 rounded-full md:text-base text-sm font-semibold group text-white hover:border-tealBlue group hover:text-tealBlue border border-transparent duration-300 hover:bg-transparent">
                Schedule a Demo <ArrowUpward />
              </button>
              <p className="text-lightWhite text-base font-medium">
                No credit card required
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
