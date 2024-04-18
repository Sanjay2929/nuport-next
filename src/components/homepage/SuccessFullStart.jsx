import React from "react";
import BookDemo from "../common/BookDemo";
import Image from "next/image";

const SuccessFullStart = ({ description }) => {
  return (
    <div className="xl:max-w-[1324px] container px-5 pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 mx-auto ">
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-4 lg:justify-between pt-12 px-6 pb-9 md:pe-0 md:pb-12 xl:pb-2.5 xl:pt-[53px] xl:ps-0 bg-darkBlue rounded-xl md:rounded-[20px]">
        {/* Left Section */}
        <div className="xl:ps-16" data-aos="fade-right">
          {/* Title */}
          <p className="tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase">
            Let&apos;s discuss
          </p>
          <h2 className=" text-[32px] !leading-[110%] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus font-extrabold pt-3 text-offWhite ">
            Success starts <span className="text-garyMedium">here!</span>
          </h2>
          {/* Description */}
          <p className="max-w-[676px] !leading-[140%] font-plus text-lightGray pt-5 md:pt-6 lg:pt-7 text-sm sm:text-base lg:text-lg font-medium xl:pe-16">
            Reach out to us about your business operation or supply chain
            issues. Our expert team will help you overcome your challenges and
            guide your online business toward success.
          </p>
          {/* Book Demo Button */}
          <div className="pt-10 md:pt-12 lg:pt-14">
            <BookDemo />
          </div>
        </div>
        {/* Right Section */}
        <div className=" flex justify-center md:justify-end w-[95%] sm:w-[70%] sm:mx-auto md:w-[80%] lg:w-auto">
          {/* Image */}
          <Image
            height={449}
            width={474}
            src="/assets/images/homepage/success-start/truck-parcel-image.webp"
            alt="parcel-truck"
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessFullStart;
