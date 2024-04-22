import React from "react";
import BookDemo from "../common/BookDemo";
import Image from "next/image";

const CareerWithUs = () => {
  return (
    <div id="aboutus" className="bg-darkBlue">
      <div className="xl:max-w-[1324px] container px-5 pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 mx-auto">
        <div
          className="flex md:gap-6 justify-between flex-col-reverse items-center lg:flex-row"
          data-aos="fade-right"
        >
          {/* Left column */}
          <div className=" lg:w-1/2 pt-12 md:pt-0">
            {/* About Us section title */}
            <p className="tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase">
              see your career with us
            </p>
            <h2 className=" text-[32px] !leading-[110%] md:max-w-[500px] lg:max-w-[731px] sm:text-4xl md:text-5xl lg:text-[52px] xl:text-7xl font-plus font-extrabold pt-3 text-white ">
              Join our Nuport{" "}
              <span className="text-garyMedium">talent community</span>
            </h2>
            {/* Description paragraph */}
            <p className="text-lightGray text-base lg:text-lg xl:text-xl !leading-[140%] font-medium pt-5 md:pt-6 lg:pt-7">
              Nuport automates distribution planning workflows for manufacturers
              and distributors. Our software helps enterprises make
              lightning-fast decisions with live insights of their distribution
              channels, automate their route planning to optimize distribution
              times, and digitize their order management tasks.
            </p>
            {/* Additional description paragraph */}
            <p className="text-lightGray text-base lg:text-lg xl:text-xl !leading-[140%] font-medium pt-5 md:pt-6 lg:pt-7 md:pb-12 pb-10">
              Nuport automates distribution planning workflows for manufacturers
              and distributors. Our software helps enterprises make
              lightning-fast decisions with live insights of their distribution
              channels, automate their route planning to optimize distribution
              times, and digitize their order management tasks
            </p>
            {/* BookDemo component */}
            <button className="book_demo_btn bg-tealBlue flex items-center gap-2 px-5 lg:pt-3.5 py-3 lg:pb-4 rounded-full lg:text-base text-sm font-semibold text-white border-tealBlue  border duration-300">
              See 10 Open Jobs
            </button>
          </div>
          {/* Right column */}
          <div className=" flex lg:max-w-[521px] lg:w-1/2 sm:w-[2/3] max-h-[400px] lg:max-h-max justify-center md:justify-end items-center overflow-hidden rounded-[20px]">
            <Image
              data-aos="fade-left"
              data-aos-delay="300"
              className="md:max-w-[521px] max-w-[400px] w-full object-cover"
              src="/assets/images/careers/nuport-desk.png"
              height={606}
              width={521}
              alt="nuport desk"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerWithUs;
