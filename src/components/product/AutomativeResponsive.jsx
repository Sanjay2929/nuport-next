import React from "react";
import { AutomatedArrow } from "../common/Icons"; // Importing AutomatedArrow icon component
import Image from "next/image"; // Importing Image component from Next.js

const AutomativeResponsive = ({ mapFunction }) => {
  return (
    <div className="container 2xl:max-w-[1285px] px-5 2xl:px-0 mx-auto py-16 md:py-24 lg:py-[128px] xl:py-[160px]">
      {/* Mapping through mapFunction array */}
      {mapFunction.map((value, index) => (
        <div
          className=" flex justify-between flex-col-reverse lg:flex-row flex-wrap"
          key={index}
        >
          {/* Left side content */}
          <div className="w-full my-10">
            <div>
              {/* Title */}
              <p className=" font-plus font-blod text-base text-orangeDark">
                {value.title}
              </p>
              {/* Main heading */}
              <h3 className=" font-plus font-bold text-3xl sm:text-4xl md:text-5xl text-offWhite max-w-[614px] mt-3">
                {value.description}
                {/* Additional span */}
                <span className="text-garyMedium"> {value.descriptionCo}</span>
              </h3>
              {/* Sub descriptions */}
              <div className="mt-6 lg:mt-10">
                {/* Mapping through subDescription array */}
                {value.subDescription.map((subContent, i) => {
                  return (
                    <div className=" flex gap-3 mt-[18px]" key={i}>
                      {/* AutomatedArrow icon */}
                      <AutomatedArrow />
                      {/* Sub description text */}
                      <p className="max-w-[390px] font-plus text-base sm:text-lg font-semibold text-offWhite mt-[-2px]">
                        {subContent}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Right side image */}
          <div className=" w-full">
            {/* Image component */}
            <Image
              className={` w-full mx-auto`}
              src={value.src} // Image source
              width={521} // Image width
              height={502} // Image height
              alt={value.class} // Alternative text for the image
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutomativeResponsive;
