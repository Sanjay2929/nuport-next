"use client";
import React, { useEffect, useRef, useState } from "react";
import { byNumberList } from "../common/Helper";

const ByNumber = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [counts, setCounts] = useState(byNumberList.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      const interval = setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, index) => {
            return (
              count +
              Math.ceil(
                (parseInt(byNumberList[index].title.replace(/\D/g, "")) -
                  count) *
                  0.1
              )
            );
          })
        );
      }, 100); // Change the interval according to your preference

      return () => clearInterval(interval);
    }
  }, [isIntersecting]);
  return (
    <div
      className=" md:mb-[160px] mb-20 container mx-auto 2xl:max-w-[1500px] 2xl:px-0 px-5"
      ref={sectionRef}
    >
      <div className=" flex flex-wrap justify-between">
        <div className="lg:w-7/12 w-full">
          <div className="order-2 pt-12 md:pt-0">
            <p className="tracking-[12%] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase">
              Brands We Serve
            </p>
            <h2 className=" !leading-[110%] md:max-w-[500px] lg:max-w-[731px] sm:text-4xl text-[32px] md:text-5xl lg:text-6xl xl:text-7xl font-plus font-extrabold pt-3 text-shark ">
              Trusted by <span className="text-garyMedium">brands</span>
            </h2>
            <p className="text-riverBed text-base lg:text-xl !leading-[140%] max-w-[560px] font-medium pt-5 md:pt-6 lg:pt-7">
              We&apos;re trusted by leading brands for our top-tier supply chain
              solutions. Join our list of happy customers and experience the
              difference.
            </p>
          </div>
        </div>
        <div className=" lg:w-5/12 w-full pt-[35px]">
          <div className=" flex flex-wrap sm:gap-y-[88px] gap-y-10 lg:gap-x-0 sm:gap-x-10  h-full">
            {byNumberList.map((value, index) => {
              return (
                <div
                  className={` ps-3 flex items-center ${
                    index === 0
                      ? "justify-end 2xl:me-24 lg:me-12"
                      : index === 3
                      ? "justify-end 2xl:ms-20 lg:ms-10"
                      : "justify-start"
                  } ${index === 1 && "ms-3"}`}
                  key={index}
                >
                  <div className={`px-1`}>
                    <h3 className="text-[32px] min-w-[145px] text-start !leading-[110%] sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-plus text-shark">
                      {isIntersecting ? counts[index] : 0}
                      {index === 0 ? "+" : index === 1 ? "" : "K+"}
                    </h3>
                    <p className="text-start max-w-[190px] pt-3 md:pt-4 lg:pt-5 !leading-[140%] font-medium text-sm lg:text-base xl:text-lg text-riverBed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByNumber;
