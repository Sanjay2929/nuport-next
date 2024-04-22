import Image from "next/image";
import React from "react";
import { Location } from "../common/Icons";
import { solution } from "../common/Helper";
import Fmcg from "./Fmcg";

const BusinessSolution = () => {
  return (
    <div className="bg-darkBlue">
      <div className="xl:max-w-[1324px] container px-5 pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 mx-auto">
        <div className="flex gap-2 ">
          {solution.map((tabs, value) => (
            <div
              key={value}
              className="bg-lightTeal hover:bg-tealBlue group hover:border-transparent transition-all duration-300 ease-in-out flex gap-3 items-center rounded-[16px_16px_0px_0px] border-darkGray py-7 px-6 border w-full"
            >
              <span>{tabs.icons}</span>
              <p className="font-plus font-semibold text-white text-base lg:text-lg xl:text-xl !leading-[140%]">
                {tabs.title}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Fmcg />
        </div>
      </div>
    </div>
  );
};

export default BusinessSolution;
