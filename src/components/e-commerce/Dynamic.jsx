"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  automateImage,
  dynamicImage,
  dynamicOrder,
  maximizingYourEfficiency,
} from "../common/Helper";
import { AutomatedArrow } from "../common/Icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Dynamic = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = ScrollTrigger.create({
      trigger: ".trigger",
      // pin: ".trigger .box-2",
      start: "top top",
      markers: false,
      end: "bottom center",
      // scroller: "body",
      scrub: true,
    });
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".img1",
        start: "center center",
        end: "center -35%",
        // markers: true,
        scrub: true,
      },
    });
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".img2",
        start: "center 40%",
        end: "center -110%",
        // markers: true,
        scrub: true,
      },
    });
    let t3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".img2",
        start: "center -90%",
        end: "center -220%",
        // markers: true,
        scrub: true,
      },
    });
    let t4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".img4",
        start: "center -120%",
        end: "center -250%",
        // markers: true,
        scrub: true,
      },
    });
    let t5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".img5",
        start: "center -150%",
        end: "center -340%",
        // markers: true,
        scrub: true,
      },
    });
    let t6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".img6",
        start: "center -240%",
        end: "center -300%",
        // markers: true,
        scrub: true,
      },
    });
    t2.fromTo(
      ".img2",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    ).to(".img2", {
      opacity: 0,
    });
    t4.fromTo(
      ".img4",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    ).to(".img4", {
      opacity: 0,
    });
    t1.fromTo(
      ".img1",
      {
        opacity: 1,
      },
      {
        opacity: 0,
      }
    );
    t3.fromTo(
      ".img3",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    ).to(".img3", {
      opacity: 0,
    });
    t5.fromTo(
      ".img5",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    ).to(".img5", {
      opacity: 0,
    });
    t6.fromTo(
      ".img6",
      {
        opacity: 0,
      },
      {
        opacity: 1,
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
            {dynamicOrder.map((value, index) => (
              <div
                key={index}
                className={`${
                  index !== dynamicOrder.length - 1 ? "min-h-screen" : ""
                } ${index !== 0 ? " mt-14 lg:mt-[120px]" : "mt-0"}`}
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
                <div className="mt-6 lg:mt-[44px]">
                  {value.subDescription.map((subContent, index) => {
                    return (
                      <div
                        className={` pb-[28px] mb-[28px] max-w-[540px] ${
                          index === value.subDescription.length - 1
                            ? ""
                            : " border-b border-darkGray"
                        }`}
                        key={index}
                      >
                        <p className="max-w-[390px] font-plus text-base sm:text-lg font-semibold text-offWhite mt-[-2px]">
                          {subContent.title}
                        </p>
                        <p className=" font-plus font-normal text-lg text-lightGray">
                          {subContent.subTitle}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-6/12 flex justify-end">
            <div className=" box-2 w-full">
              {dynamicImage.map((content, index) => {
                return (
                  <Image
                    key={index}
                    className={`${content.class} h-[400px] transition-all ease-in-out duration-300 bg-cover bg-no-repeat sticky top-[30%]`}
                    src={content.src}
                    width={521}
                    height={502}
                    alt={content.class}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;