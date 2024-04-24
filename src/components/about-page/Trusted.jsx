import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { trustedBrand, trustedPartners } from "../common/Helper";

const Trusted = () => {
  // Slider settings for the Trusted Partners section
  var trusted = {
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 1280,
        settings: {
          infinite: true,
          slidesToShow: 5,
          autoplay: true,
          autoplaySpeed: 0,
          arrows: false,
          speed: 5000,
          pauseOnHover: false,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 0,
          arrows: false,
          speed: 5000,
          pauseOnHover: false,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 0,
          arrows: false,
          speed: 5000,
          pauseOnHover: false,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <div className=" md:mb-[120px] sm:mb-20 mb-10 md:pt-[160px] sm:pt-20 pt-10 container mx-auto 2xl:max-w-[1283px] 2xl:px-0 px-5 border-b border-mischka md:pb-[120px]  sm:pb-20 pb-10 overflow-hidden">
      <div className=" flex flex-wrap justify-between items-center">
        {/* Left side content */}
        <div className="lg:w-7/12 w-full">
          <div className="order-2 pt-12 md:pt-0">
            {/* Title and description */}
            <p className="tracking-[12%] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase">
              Brands We Serve
            </p>
            <h2 className=" text-[32px] !leading-[110%] md:max-w-[500px] lg:max-w-[731px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus font-extrabold pt-3 text-shark ">
              Trusted by <span className="text-garyMedium">brands</span>
            </h2>
            <p className="text-riverBed text-base lg:text-xl !leading-[140%] max-w-[560px] font-medium pt-5 md:pt-6 lg:pt-7">
              We&apos;re trusted by leading brands for our top-tier supply chain
              solutions. Join our list of happy customers and experience the
              difference.
            </p>
          </div>
        </div>
        {/* Right side content */}
        <div className=" lg:w-5/12 w-full">
          {/* Display trusted brand logos for larger screens */}
          <div className=" lg:flex hidden flex-wrap gap-y-4 h-full">
            {trustedBrand.map((value, index) => {
              return (
                <div
                  className=" w-6/12 flex items-center justify-center mb-6"
                  key={index}
                >
                  <Image
                    className={`hover:scale-110 duration-300 w-full  object-contain ${value.maxWidth}`}
                    width={value.width}
                    height={80}
                    src={value.image}
                    alt={value.title}
                  />
                </div>
              );
            })}
          </div>
          {/* Slider for trusted partners logos on smaller screens */}
          <div className="relative h-[60px] w-full lg:hidden mt-10">
            <Slider
              {...trusted}
              className="flex justify-between lg:gap-x-8 gap-x-3 items-center trusted_slider absolute left-0 top-1/2 -translate-y-1/2"
            >
              {trustedPartners.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="lg:w-[177px] w-[100px] flex justify-center"
                  >
                    <Image
                      className={`hover:scale-110 duration-300 w-[140px] object-contain h-[90px]`}
                      width={value.width}
                      height={90}
                      src={value.image}
                      alt={value.title}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
