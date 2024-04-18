import React from "react";
import BookDemo from "../common/BookDemo";
import { increaseEfficiency } from "../common/Helper";

const IncreaseEfficiency = () => {
  return (
    <div className="xl:max-w-[1324px] container px-5 py-16 sm:py-20 md:py-28 lg:py-40 mx-auto ">
      <div
        className="flex flex-col md:flex-row md:justify-between md:gap-4"
        data-aos="fade-up"
      >
        <div className="p-0">
          {/* Title for Increase Efficiency section */}
          <p className="tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase">
            Steps to smooth delivery
          </p>
          <h2 className=" text-[32px] !leading-[110%] max-w-[336px] md:max-w-[500px] lg:max-w-[731px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus font-extrabold pt-3 text-shark ">
            Increase efficiency with&nbsp;
            <span className="text-garyMedium">3 easy steps</span>
          </h2>
        </div>
        {/* Booking demo component */}
        <div className="flex items-end pt-10 md:pt-0">
          <BookDemo />
        </div>
      </div>
      {/* Grid for displaying the steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 sm:mt-16 lg:mt-[84px] gap-6">
        {increaseEfficiency.map((steps, index) => {
          return (
            <div key={index} data-aos="fade-up" data-aos-delay={`${index}00`}>
              {/* Step number */}
              <p
                className={`!leading-[120%] gradient_text_stroke text-5xl xl:text-6xl relative font-plus font-bold bg-steps-heading-gradients bg-clip-text text-transparent mb-4 lg:mb-6 after:content-[attr(data-number)] after:z-[-1]`}
                data-number={index + 1}
              >
                {index + 1}
              </p>
              {/* Step title */}
              <h3 className="!leading-[142%] text-xl lg:text-2xl text-shark  font-plus font-bold mb-3">
                {steps.title}
              </h3>
              {/* Step description */}
              <p className="text-base xl:text-lg  font-plus font-normal text-riverBed max-w-[397px]">
                {steps.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IncreaseEfficiency;
