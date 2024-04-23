import React from "react";
import { RightArrow } from "../../common/Icons";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="bg-darkBlue">
        <div className="xl:max-w-[1324px] px-5 mx-auto container py-20">
          <div className="flex lg:flex-row flex-col gap-[60px]">
            <div className="lg:w-1/2 w-full">
              <div className="border-b border-darkGray">
                <div className="flex gap-3 items-center">
                  <p className="font-plus font-semibold text-lg leading-[140%] text-lightGray">
                    All clients
                  </p>
                  <span>
                    <RightArrow />
                  </span>
                  <p className="font-plus font-semibold text-lg leading-[140%] text-leafyGreen">
                    iFarmer
                  </p>
                </div>
                <h2 className="pt-8 font-plus font-bold lg:text-[60px] md:text-5xl text-4xl leading-[120%] tracking-[1.2px] text-white">
                  How iFarmer transformed it’s supply chain in a efficient way
                </h2>
                <p className="text-lightGray max-w-[513px] font-plus pt-4 font-medium md:text-lg text-base leading-[140%] pb-10 ">
                  Lorem ipsum dolor sit amet consectetur. Dolor tristique
                  vulputate diam tristique pellentesque bibendum eget. Ac
                  aliquam sit ornare dapibus leo quis. Tellus sed iaculis purus
                  quis. Commodo et rhoncus arcu ipsum est porttitor quis quis
                  risus.
                </p>
              </div>
              <div className="pt-10 sm:flex items-start lg:gap-[57.25px] sm:gap-10 gap-5">
                <div>
                  <p className="font-plus font-bold md:text-4xl text-3xl leading-[122%] tracking-[0.72px] text-center text-easternBlue">
                    100K+
                  </p>
                  <p className="md:pt-5 pt-2 font-plus text-center md:text-base text-sm text-gray font-medium leading-[140%]">
                    Locations Delivered
                  </p>
                </div>
                <div className=" sm:contents hidden  w-[1px]">
                  <Image
                    className="h-[126px] w-[1px]"
                    src="/assets/images/case-study/iframe-gradient-line.png"
                    height={126}
                    width={1}
                    alt="jamil akbar profile"
                  />
                </div>
                <div className=" sm:my-0 my-5">
                  <p className="font-plus font-bold md:text-4xl text-3xl leading-[122%] tracking-[0.72px] text-center text-easternBlue">
                    5K+
                  </p>
                  <p className="md:pt-5 pt-2 font-plus text-center md:text-base text-sm text-gray font-medium leading-[140%]">
                    Orders Per Day
                  </p>
                </div>
                <div className=" sm:contents hidden  w-[1px]">
                  <Image
                    className="h-[126px] w-[1px]"
                    src="/assets/images/case-study/iframe-gradient-line.png"
                    height={126}
                    width={1}
                    alt="jamil akbar profile"
                  />
                </div>
                <div>
                  <p className="font-plus font-bold md:text-4xl text-3xl leading-[122%] tracking-[0.72px] text-center text-easternBlue">
                    150K+
                  </p>
                  <p className="md:pt-5 pt-2 font-plus text-center md:text-base text-sm text-gray font-medium leading-[140%]">
                    End Users Served
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="flex lg:justify-end justify-center">
                <Image
                  className=""
                  src="/assets/images/case-study/ifarmer.png"
                  height={691}
                  width={594}
                  alt="i farmer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
