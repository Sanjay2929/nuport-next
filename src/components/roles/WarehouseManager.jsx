import Image from "next/image";
import React from "react";
import { field } from "../common/Helper";

const WarehouseManager = () => {
  return (
    // Container with maximum width and centered alignment
    <div className="xl:max-w-[1324px] container mx-auto">
      {/* Section containing content and image */}
      <div className="pt-12 flex justify-between gap-6 md:flex-row flex-col">
        {/* Left section with text content */}
        <div className="md:w-1/2">
          {/* Title for the section */}
          <p className="font-plus font-bold text-base text-orangeDark leading-[126%] !tracking-[1.92px] uppercase">
            All industry solutions
          </p>
          {/* Subtitle for the section */}
          <p className="pt-3 font-plus font-bold lg:text-[48px] md:text-[42px] sm:text-[36px] text-[32px] leading-[120%] tracking-[0.96px] text-white">
            Why Nuport for warehouse manager
          </p>
          {/* Description text */}
          <p className="md:pt-4 lg:pt-7 pt-2 text-lightGray font-plus font-normal sm:text-lg lg:text-xl text-base max-w-[619px] leading-[140%]">
            A geographically distributed field sales force needs a powerful set
            of tools to manage daily tasks
          </p>
          {/* Render dynamic content from the 'field' array */}
          <div className="sm:pt-4">
            {field.map((sales, index) => (
              <div
                key={index}
                // Apply border style to each item except the last one
                className={` sm:py-7 py-6 border-darkGray ${
                  field.length === index + 1 ? "md:border-b" : "border-b"
                }`}
              >
                {/* Title of the item */}
                <p className="font-plus font-bold leading-[140%] text-white lg:text-2xl sm:text-xl text-lg">
                  {sales.title}
                </p>
                {/* Description of the item */}
                <p className="md:pt-4 pt-2 text-lightGray font-plus font-normal sm:text-lg text-base max-w-[564px] leading-[140%]">
                  {sales.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Right section with image */}
        <div className="md:w-1/2">
          <div className="flex md:justify-end justify-center md:sticky top-10">
            {/* Image component */}
            <Image
              className="rounded-[20px] object-cover sm:h-full h-[389px]"
              src="/assets/images/roles/field-sales.png"
              height={559}
              width={512}
              alt="fmcg industry"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseManager;
