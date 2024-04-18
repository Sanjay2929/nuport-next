import React from "react";
import { CircleArrow, Comma } from "../common/Icons";

const Hero = () => {
  return (
    <div className=" pt-[160px] container mx-auto 2xl:max-w-[1283px] 2xl:px-0 px-5 relative">
      <div className=" flex flex-wrap justify-between md:mb-[162px] sm:mb-[100px] mb-20">
        <div className=" lg:w-4/12 w-full">
          <div className="sticky top-3 flex justify-start items-start flex-col">
            <div className="ps-5 pe-2 flex gap-2.5 items-center py-1.5 md:text-base text-xs yellow_gradient rounded-full border border-orangeDark text-white mb-3 ">
              Know about us <CircleArrow />
            </div>
            <p className=" font-plus font-extrabold text-offWhite sm:text-4xl text-[32px] md:text-5xl lg:text-6xl xl:text-7xl leading-[normal]">
              About us
            </p>
          </div>
        </div>
        <div className="lg:w-8/12 w-full flex flex-col items-end pt-[50px]">
          <div>
            <span className="mb-[23px]">
              {" "}
              <Comma />
            </span>
            <p className=" text-offWhite font-plus text-[32px]  sm:text-4xl md:text-5xl font-bold lg:max-w-[739px] !leading-[140%]">
              We are a team of{" "}
              <span className="text-gray">
                engineers, operators, designers,
              </span>{" "}
              and <span className="text-gray">data scientists,</span> optimizing
              the supply chain of companies who like to stay ahead of
              competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
