/* eslint-disable react-hooks/exhaustive-deps */
// Disabling exhaustive-deps rule for specific useEffect
"use client";
import React, { useState, useEffect, useRef } from "react";
import { brandsList } from "../common/Helper";

// BrandServe component definition
const BrandServe = () => {
  const [isIntersecting, setIsIntersecting] = useState(false); // State to track intersection
  const [counts, setCounts] = useState(brandsList.map(() => 0)); // State to track counts
  const sectionRef = useRef(null); // Ref for section

  useEffect(() => {
    // Intersection Observer to detect when the section enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting); // Updating intersection state
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observing the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Unobserving the section
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      // If section is intersecting
      const interval = setInterval(() => {
        // Interval to update counts gradually
        setCounts((prevCounts) =>
          prevCounts.map((count, index) => {
            return (
              count +
              Math.ceil(
                (parseInt(brandsList[index].title.replace(/\D/g, "")) - count) *
                  0.1
              )
            );
          })
        );
      }, 100); // Change the interval according to your preference

      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [isIntersecting]);

  return (
    <div className="bg-offWhite" ref={sectionRef}> {/* BrandServe section */}
      <div className="xl:max-w-[1324px] container px-5 pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-40 pb-[33px] sm:pb-10 md:pb-14 lg:pb-16 xl:pb-[84px] mx-auto">
        {/* Title and description */}
        <p className="text-center tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase">
          Brands We Serve
        </p>
        <h2 className="max-w-[731px] !leading-[110%] mx-auto text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus font-extrabold pt-3 text-shark text-center">
          Trusted by <span className="text-garyMedium">500+ businesses</span>
        </h2>
        <p className="max-w-[300px] sm:max-w-[678px] !leading-[140%] mx-auto font-plus text-riverBed pt-5 md:pt-6 lg:pt-7 text-sm md:text-lg lg:text-xl text-center font-medium">
          We&apos;re trusted by leading brands for our top-tier supply chain
          solutions. Join our satisfied clientele and experience excellence.
        </p>
        {/* Brand cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 pt-12 sm:pt-14 md:pt-16 lg:pt-[84px]">
          {brandsList.map((value, index) => {
            return (
              <div
                key={index}
                className={`relative before:h-full before:absolute before:w-0.5 before:!bg-gradient before:bg-contain before:bg-no-repeat before:end-0 before:top-0 pl-1 sm:px-1 ${value.className}`}
              >
                <h3 className="text-[32px] text-center !leading-[110%] sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-plus text-shark">
                  {/* Displaying counts */}
                  {isIntersecting ? counts[index] : 0}K+
                </h3>
                <p className="text-center pt-3 md:pt-4 lg:pt-5 !leading-[140%] font-medium text-sm lg:text-base xl:text-lg text-riverBed">
                  {value.description} {/* Brand description */}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandServe; // Exporting BrandServe component
