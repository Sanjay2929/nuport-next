import React from "react";
import BookDemo from "../common/BookDemo";
import { empowerings } from "../common/Helper";

const DiscoverSolutions = ({ heading, solutionCards }) => {
  return (
      <div className="container 2xl:max-w-[1285px] px-5 2xl:px-0 mx-auto mt-[59px] mb-16 md:mb-24 lg:mb-[128px] xl:mb-[160px]">
        <div className=" flex justify-center flex-wrap xl:justify-between items-end">
          <div className="text-center xl:text-start">
            <p className="text-base font-bold font-plus text-orangeDark mb-3 uppercase">
              Discover your solutions
            </p>
            <h2 className="font-plus text-gray-900 text-[32px] lg:text-5xl xl:text-7xl font-extrabold max-w-[848px] mx-auto">
              {heading}
            </h2>
          </div>
          <div className="text-center xl:text-start mt-8 xl:mt-0">
            <BookDemo />
          </div>
        </div>
        <div className=" flex flex-wrap justify-center xl:justify-between mt-10 lg:mt-[88px]">
          {solutionCards.map((value, index) => (
            <div
              key={index}
              className=" w-full sm:w-6/12 lg:w-4/12 px-3 lg:px-2 xl:px-3 pt-6 xl:pt-0 transition-all ease-in-out duration-300 hover:-translate-y-2"
            >
              <div className=" max-w-[412px] mx-auto sm:mx-0 min-h-[344px] p-3 xl:p-7 rounded-2xl bg-offWhite border border-mischka flex flex-col justify-between">
                {value.icon}
                <div>
                  <h3
                    className={`!leading-[142%] text-xl lg:text-2xl text-shark  font-plus font-bold mb-4 ${value.widthTitle}`}
                  >
                    {value.title}
                  </h3>
                  <p className="text-base font-plus font-normal text-arsenicGray max-w-[397px]">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default DiscoverSolutions;
