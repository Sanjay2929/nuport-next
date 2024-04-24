"use client";
import { AchieveBusinessGoalsCards } from "@/components/common/Helper";
import { GrayLeftArrow, GrayRightArrow } from "@/components/common/Icons";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
const MoreCase = () => {
  const [leftMargin, setLeftMargin] = useState(0);
  //   CUSTOM MARGIN LEFT
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setLeftMargin(containerRef.current.getBoundingClientRect().left);
    }
    window.addEventListener("resize", () => {
      if (containerRef.current) {
        setLeftMargin(containerRef.current.getBoundingClientRect().left);
      }
    });
  }, [leftMargin]);

  const slider = useRef(null);
  //   SLIDER SETTINGS
  var settings = {
    slidesToShow: 3.25,
    centerPadding: "100px",
    arrows: false,
    slidesToScroll: 1,
    centerMode: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.2,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.2,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 1023.98,
        settings: {
          slidesToShow: 1.2,
          centerPadding: "110px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          centerPadding: "85px",
        },
      },
      {
        breakpoint: 640,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className="bg-darkBlue mt-[143px] overflow-hidden">
      <div
        className="xl:max-w-[1324px] container px-5 mx-auto flex items-end justify-between"
        ref={containerRef}
      >
        <div data-aos="fade-up">
          <p className="text-orangeDark text-base mb-3 tracking-[2.5px] font-bold uppercase">
            Client use cases per industry
          </p>
          <h2 className="max-w-[731px] mr-auto text-[32px] !leading-[110%] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus font-extrabold text-white">
            More <span className="text-garyMedium">Case Study</span>
          </h2>
        </div>
        <div className="sm:flex items-center gap-5 hidden">
          <span
            className="cursor-pointer achieve_arrow"
            onClick={() => slider?.current?.slickPrev()}
          >
            <GrayLeftArrow strokeColor={"#6A758F"} />
          </span>
          <span
            className="cursor-pointer achieve_arrow"
            onClick={() => slider?.current?.slickNext()}
          >
            <GrayRightArrow strokeColor={"#6A758F"} />
          </span>
        </div>
      </div>
      <div
        className="mt-7 sm:mt-8 md:mt-10 lg:mt-14 xl:mt-[84px] overflow-hidden"
        style={{ marginLeft: `${leftMargin + 16}px` }}
      >
        {/* SLIDER CARDS */}
        <Slider ref={slider} {...settings}>
          {AchieveBusinessGoalsCards.map((value, index) => (
            <div key={index} className="pl-1 pr-5 sm:px-3 mt-6 sm:mt-0">
              <div className="border-[1.5px] border-darkGray rounded-[20px] px-7 py-8 sm:p-7 md:pb-[37.6px] sm:h-[350px] md:h-[400px] lg:h-[400px] xl:h-[400px] 2xl:h-[440px] flex flex-col justify-between hover:border-white duration-300">
                <span className="max-w-[40px] md:max-w-[56px]">
                  {value.icon}
                </span>
                <div className="pt-[103px] sm:pt-0">
                  <p className="text-2xl lg:text-3xl font-bold !leading-[140%] md:!leading-[36px] lg:leading-[38px] text-white max-w-[298px]">
                    <span className="text-moonstone">{value.range}</span>{" "}
                    {value.title}
                  </p>
                  <p className="!leading-[140%] text-sm md:text-base lg:text-lg font-medium text-lightGray mt-3 md:mt-4">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MoreCase;
