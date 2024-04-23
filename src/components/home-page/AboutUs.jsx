import React from "react";
import BookDemo from "../common/BookDemo";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div id="aboutus" className="bg-darkBlue">
      <div className="xl:max-w-[1324px] container px-5 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 mx-auto">
        <div className="grid md:grid-cols-2 md:gap-10" data-aos="fade-right">
          {/* Left column */}
          <div className="order-2 pt-12 md:pt-0">
            {/* About Us section title */}
            <p className="tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase">
              About us
            </p>
            <h2 className=" text-[32px] !leading-[110%] md:max-w-[500px] lg:max-w-[731px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus font-extrabold pt-3 text-white ">
              What <span className="text-garyMedium">we do</span>
            </h2>
            {/* Description paragraph */}
            <p className="text-lightGray text-base lg:text-xl !leading-[140%] font-medium pt-5 md:pt-6 lg:pt-7">
              Nuport is a cloud supply chain platform for e-commerce and
              enterprise applications. Our technology encompass integrated order
              management, smart warehousing, distribution planning, route
              optimization, and tailored applications.
            </p>
            {/* Additional description paragraph */}
            <p className="text-lightGray text-base lg:text-xl !leading-[140%] font-medium pt-5 md:pt-6 lg:pt-7">
              Our expert team collaborates with clients from the e-commerce and
              enterprise sectors to increase throughput, streamline operations,
              reduce operating costs, and enhance user experience.
            </p>
            {/* BookDemo component */}
            <div className="pt-9 md:pt-10 lg:pt-12">
              <BookDemo />
            </div>
          </div>
          {/* Right column */}
          <div className="flex justify-center md:justify-end items-center order-1 md:order-2">
            <Image
              data-aos="fade-left"
              data-aos-delay="300"
              className="md:max-w-[540px] max-w-[400px] w-full"
              src="/assets/images/home-page/about-us/drone.webp"
              height={516}
              width={540}
              alt="drone image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
