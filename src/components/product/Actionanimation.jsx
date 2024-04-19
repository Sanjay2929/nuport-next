"use client";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";
import { useLayoutEffect } from "react";
import { maximizingYourEfficiency } from "../common/Helper";
import { AutomatedArrow } from "../common/Icons";
import Image from "next/image";

const Actionanimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".target",
        start: "top top",
        end: "+=500%",
        markers: true,
        scroller: "body",
        pin: true,
      },
    });
    tl.set(".team-img", {
      autoAlpha: 1,
      opacity: 1,
    });

    let second = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_1",
        start: "top -50%",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    second

      .fromTo(
        ".img_one",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".team-img",
        {
          opacity: 0,
        },
        "-=.5"
      );

    let third = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_2",
        start: "top -20%",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    third

      .fromTo(
        ".img_two",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".img_one",
        {
          opacity: 0,
        },
        "-=.5"
      );

    let four = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_3",
        start: "top -20%",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    four

      .fromTo(
        ".img_three",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".img_two",
        {
          opacity: 0,
        },
        "-=.5"
      );

    let five = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_4",
        start: "top -20%",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    five

      .fromTo(
        ".img_four",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".img_three",
        {
          opacity: 0,
        },
        "-=.5"
      );

    let six = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_5",
        start: "top -20%",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    six

      .fromTo(
        ".img_five",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .to(
        ".img_four",
        {
          opacity: 0,
        },
        "-=.5"
      );
    return tl.kill();
  }, []);
  return (
    <>
      <section id="benefit">
        {" "}
        {/* <Action /> */}
        <div className="bg-black pt-5 relative d-none d-xl-block index_1">
          <div className="overflow-hidden">
            <div className="relative">
              <div className="container container-modified">
                <div className=" flex flex-wrap justify-center justify-content-lg-between section_1 mb-5 mb-xl-0 ">
                  <div className="w-6/12 h-[400px] flex flex-col justify-center target py-4 text-center">
                    <div className=" relative">
                      <div className="w-full p-4 absolute img_one">
                        <Image
                          className="animtion_img"
                          src="/assets/images/productpage/automated-inventory/data.png"
                          width={521}
                          height={502}
                          alt="inventory"
                        />
                      </div>

                      <div className="w-full p-4 absolute img_two">
                        <Image
                          className="animtion_img"
                          src="/assets/images/productpage/automated-inventory/order.png"
                          width={521}
                          height={502}
                          alt="inventory"
                        />
                      </div>

                      <div className="w-full p-4 absolute img_three ">
                        <Image
                          className="animtion_img"
                          src="/assets/images/productpage/automated-inventory/partaner.png"
                          width={521}
                          height={502}
                          alt="inventory"
                        />
                      </div>

                      <div className="w-full  p-4 absolute img_four">
                        <Image
                          className="animtion_img"
                          src="/assets/images/productpage/automated-inventory/portal.webp"
                          width={521}
                          height={502}
                          alt="inventory"
                        />
                      </div>

                      <div className="w-full p-4 absolute img_five">
                        <Image
                          className="animtion_img"
                          src="/assets/images/productpage/automated-inventory/supplier.png"
                          width={521}
                          height={502}
                          alt="inventory"
                        />
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                  <div className="flex w-6/12 flex-wrap justify-center lg:justify-end">
                    {" "}
                    {maximizingYourEfficiency.map((value, index) => (
                      <div
                        key={index}
                        className={`${
                          index !== 0 ? " mt-14 lg:mt-[120px]" : "mt-0"
                        } ${value.section} `}
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
                              <div
                                className=" flex gap-3 mt-[18px]"
                                key={index}
                              >
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Actionanimation;
