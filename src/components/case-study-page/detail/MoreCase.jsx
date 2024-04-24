"use client";
import {
  AchieveBusinessGoalsCards,
  moreCaseStudy,
} from "@/components/common/Helper";
import { GrayLeftArrow, GrayRightArrow } from "@/components/common/Icons";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import IFarmerCard from "../IfarmerCard";
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
          {moreCaseStudy.map((value, index) => (
            <div key={index} className="px-3 sm:my-0 my-5">
              <IFarmerCard
                title={value.title}
                logo={value.logo}
                description={value.description}
                path={value.path}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MoreCase;
