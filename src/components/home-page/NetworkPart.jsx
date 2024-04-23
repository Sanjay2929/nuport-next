"use client";
import React, { useRef } from "react";
import {
  GrayDoubleQuotes,
  GrayLeftArrow,
  GrayRightArrow,
} from "../common/Icons";
import Image from "next/image";
import { networkPartCards } from "../common/Helper";
import Slider from "react-slick";

const NetworkPart = () => {
  const slider = useRef(null); // Creating a ref for the Slider component

  //   SLIDER SETTINGS
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    speed: 5000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1023.98,
        settings: {
          slidesToShow: 2,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToScroll: 1,
          initialSlide: 0,
          cssEase: "ease",
          autoplay: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToScroll: 1,
          initialSlide: 0,
          cssEase: "ease",
          autoplay: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToScroll: 1,
          initialSlide: 0,
          cssEase: "ease",
          autoplay: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToScroll: 1,
          initialSlide: 0,
          cssEase: "ease",
          autoplay: false,
        },
      },
    ],
  };

  return (
    <div
      id="blog"
      className="overflow-hidden pb-[124px] sm:pb-[130px] md:pb-[160px] relative network_part_slider"
    >
      <div className="absolute flex items-center gap-5 bottom-[64px] left-1/2 -translate-x-1/2 lg:hidden">
        {/* Slider navigation arrows */}
        <span
          onClick={() => slider?.current?.slickPrev()}
          className="cursor-pointer network_arrow"
        >
          <GrayLeftArrow strokeColor={"#B1B7C7"} />
        </span>
        <span
          onClick={() => slider?.current?.slickNext()}
          className="cursor-pointer network_arrow"
        >
          <GrayRightArrow strokeColor={"#B1B7C7"} />
        </span>
      </div>
      <div
        className="xl:max-w-[1324px] container px-5 mx-auto"
        data-aos="fade-up"
      >
        {/* Title Section */}
        <p className="text-center tracking-[3px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase mb-3">
          Real Impact of our clients
        </p>
        <h2 className="max-w-[731px] mx-auto text-[32px] !leading-[110%] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus font-extrabold text-shark text-center">
          Be part of <span className="text-garyMedium">our network</span>
        </h2>
        <p className="max-w-[310px] sm:max-w-[678px] !leading-[140%] mx-auto font-plus text-riverBed pt-5 md:pt-6 lg:pt-7 text-sm md:text-lg lg:text-xl text-center font-medium mb-12 sm:mb-14 md:mb-16 lg:mb-[68px]">
          Our customers are our partners in innovation. Here’s what our
          customers are saying about us.
        </p>
      </div>
      {/* SLIDER CARDS */}
      <Slider ref={slider} {...settings}>
        {/* Mapping over networkPartCards to render individual cards */}
        {networkPartCards.map((value, index) => (
          <div key={index} className="px-3 duration-300 hover:-translate-y-3">
            <div className="border border-mischka bg-offWhite rounded-[20px] px-4 py-6 md:px-9 md:pt-8 2xl:pt-12 md:pb-[37.6px] h-full flex flex-col justify-between">
              <div>
                {/* Quotation icon */}
                <span className="max-w-[38px] sm:max-h-[58px] sm:max-w-[58px] inline-block">
                  <GrayDoubleQuotes />
                </span>
                {/* Customer testimonial */}
                <p className="mt-6 text-arsenicGray font-medium text-sm sm:text-base lg:text-xl xl:text-2xl mb-[36px] sm:mb-[40px] lg:mb-[58px] !leading-[140%]">
                  {value.description}
                </p>
              </div>
              <div className="flex items-center justify-between gap-2">
                {/* Customer profile image and details */}
                <div className="flex items-center gap-3">
                  <Image
                    className="max-w-[36px] max-h-[36px] sm:max-w-[45px] sm:max-h-[45px] md:max-w-[56px] md:max-h-[56px]"
                    width={56}
                    height={56}
                    src={value.image}
                    alt="profile-image"
                  />
                  <div>
                    <p className="font-semibold text-sm sm:text-base xl:text-xl text-shark mb-[6px]">
                      {value.name}
                    </p>
                    <p className="font-normal text-xs sm:text-sm lg:text-base xl:text-lg text-riverBed">
                      {value.role}
                    </p>
                  </div>
                </div>
                {/* Customer company logo */}
                <Image
                  className={value.companyImageStyle}
                  width="0"
                  height="0"
                  sizes="100vw"
                  src={value.companyImage}
                  alt="company-logo"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NetworkPart;
