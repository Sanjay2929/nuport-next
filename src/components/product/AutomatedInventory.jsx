"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { maximizingYourEfficiency } from "../common/Helper";
import { AutomatedArrow } from "../common/Icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const AutomatedInventory = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = ScrollTrigger.create({
      trigger: ".trigger",
      pin: ".trigger .box-2",
      start: "top top",
      markers: false,
      end: "bottom center",
      scroller: "body",
      scrub: true,
    });
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".box-2",
        start: "top top",
        end: "bottom 0%",
        markers: true,
        scrub: true,
      },
    });
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".box-3",
        start: "100% top",
        end: "+=500% 20%",
        markers: false,
        scrub: true,
      },
    });
    t1.fromTo(
      ".box-2",
      {
        // background: "blue",
        // backgroundImage:
        // "url(/assets/images/productpage/automated-inventory/automated.webp)",
        opacity: 100,
      },
      {
        // background: "red",
        // backgroundImage: "url(/assets/images/homepage/about-us/drone.webp)",
        opacity: 0,
      }
    );
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className=" bg-darkBlue relative">
      <div className="container 2xl:max-w-[1285px] px-5 2xl:px-0 mx-auto py-16 md:py-24 lg:py-[128px] xl:py-[160px]">
        <div className=" flex justify-between flex-col-reverse lg:flex-row flex-wrap trigger">
          <div className="lg:w-6/12 mt-10 lg:mt-0">
            {maximizingYourEfficiency.map((value, index) => (
              <div
                key={index}
                className={`${index !== 0 ? " mt-14 lg:mt-[120px]" : "mt-0"}`}
              >
                <p className=" font-plus font-blod text-base text-orangeDark">
                  {value.title}
                </p>
                <h3 className=" font-plus font-bold text-3xl sm:text-4xl md:text-5xl text-offWhite max-w-[614px] mt-3">
                  {value.description}
                  <span className="text-garyMedium">
                    {" "}
                    {value.descriptionCo}
                  </span>
                </h3>
                <div className="mt-6 lg:mt-10">
                  {value.subDescription.map((subContent, index) => {
                    return (
                      <div className=" flex gap-3 mt-[18px]" key={index}>
                        <AutomatedArrow />
                        <p className="max-w-[390px] font-plus text-base sm:text-lg font-semibold text-offWhite mt-[-2px]">
                          {subContent}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-6/12 flex justify-end">
            <Image
              className="box-2 h-[400px]"
              src="/assets/images/productpage/automated-inventory/automated.webp"
              width={521}
              height={502}
              alt="inventory"
            />
            {/* <Image
              className="box-3 hidden"
              src="/assets/images/homepage/about-us/drone.webp"
              width={521}
              height={502}
              alt="inventory"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedInventory;
