import React from "react";
import { moreCaseStudy } from "../common/Helper";
import Ifarmer from "../case-study-page/Ifarmer";
import { CircleArrow } from "../common/Icons";

const CaseStudyCards = () => {
  return (
    <div className="xl:max-w-[1324px] container px-5 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 mx-auto">
      <div className="flex flex-col items-center">
        <div className="ps-5 pe-2 flex gap-2.5 items-center py-1.5 md:text-base text-xs yellow_gradient rounded-full border border-orangeDark text-white">
          Client use cases per industry <CircleArrow />
        </div>
        {/* Heading */}
        <h1 className="font-extrabold lg:text-[72px] sm:text-5xl text-[36px] text-white text-center max-w-[1141px] mx-auto !leading-[110%] pt-4">
          Case Study
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:pt-[84px] sm:pt-12 pt-6 sm:gap-y-6">
        {moreCaseStudy.map((value, index) => (
          <div key={index} className="sm:px-3 pe-4 sm:my-0 my-5">
            <Ifarmer
              title={value.title}
              logo={value.logo}
              description={value.description}
              path={value.path}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCards;
