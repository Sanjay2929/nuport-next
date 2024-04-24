import React from "react";
import { AutomatedArrow } from "../common/Icons"; // Importing custom icon component
import Image from "next/image"; // Importing Next.js Image component for optimized image loading

// DynamicResponsive component definition
const DynamicResponsive = ({ mapFunction }) => {
  return (
    <div className="container 2xl:max-w-[1285px] px-5 2xl:px-0 mx-auto py-16 md:py-24 lg:py-[128px] xl:py-[160px]">
      {mapFunction.map((value, index) => ( // Mapping over the mapFunction prop
        <div
          className=" flex justify-between flex-col-reverse lg:flex-row flex-wrap"
          key={index} // Setting unique key for each mapped item
        >
          <div className="w-full my-10"> {/* Left column */}
            <div>
              {/* Title */}
              <p className=" font-plus font-blod text-base text-orangeDark">
                {value.title}
              </p>
              {/* Description */}
              <h3 className=" font-plus font-bold text-3xl sm:text-4xl md:text-5xl text-offWhite max-w-[614px] mt-3">
                {value.description}
                <span className="text-garyMedium"> {value.descriptionCo}</span>
              </h3>
              <div className="mt-6 lg:mt-10"> {/* Sub-descriptions */}
                {value.subDescription.map((subContent, i) => {
                  return (
                    <div
                      className={` pb-[28px] mb-[28px] max-w-[540px] ${
                        index === value.subDescription.length - 1
                          ? ""
                          : " border-b border-darkGray"
                      }`}
                      key={i} // Setting unique key for each sub-description
                    >
                      {/* Sub-title */}
                      <p className="max-w-[390px] font-plus text-base sm:text-lg font-semibold text-offWhite mt-[-2px]">
                        {subContent.title}
                      </p>
                      {/* Sub-description */}
                      <p className=" font-plus font-normal md:text-lg text-base text-lightGray">
                        {subContent.subTitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" w-full"> {/* Right column */}
            {/* Image */}
            <Image
              className={` w-full mx-auto`}
              src={value.src} // Image source
              width={521} // Image width
              height={502} // Image height
              alt={value.class} // Image alt text
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicResponsive; // Exporting DynamicResponsive component
