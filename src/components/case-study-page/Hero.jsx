import React from "react";
import { RightArrow } from "../common/Icons";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="bg-darkBlue">
        <div className="xl:max-w-[1324px] px-5 mx-auto container py-20">
          <div className="flex gap-[60px]">
            <div className="w-1/2">
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
                <h2 className="pt-8 font-plus font-bold text-[60px] leading-[120%] tracking-[1.2px] text-white">
                  How iFarmer transformed it’s supply chain in a efficient way
                </h2>
                <p className="text-lightGray max-w-[513px] font-plus pt-4 font-medium text-lg leading-[140%] pb-10 ">
                  Lorem ipsum dolor sit amet consectetur. Dolor tristique
                  vulputate diam tristique pellentesque bibendum eget. Ac
                  aliquam sit ornare dapibus leo quis. Tellus sed iaculis purus
                  quis. Commodo et rhoncus arcu ipsum est porttitor quis quis
                  risus.
                </p>
              </div>
              <div className="pt-10 flex items-start gap-[57.25px]">
                <div>
                  <p className="font-plus font-bold text-[36px] leading-[122%] tracking-[0.72px] text-center text-easternBlue">
                    100K+
                  </p>
                  <p className="pt-5 font-plus text-center text-gray font-medium text-base leading-[140%]">
                    Locations Delivered
                  </p>
                </div>
                <div>
                  <Image
                    className="h-[126px]"
                    src="/assets/images/case-study/iframe-gradient-line.png"
                    height={126}
                    width={1}
                    alt="jamil akbar profile"
                  />
                </div>
                <div>
                  <p className="font-plus font-bold text-[36px] leading-[122%] tracking-[0.72px] text-center text-easternBlue">
                    5K+
                  </p>
                  <p className="pt-5 font-plus text-center text-gray font-medium text-base leading-[140%]">
                    Orders Per Day
                  </p>
                </div>
                <div>
                  <Image
                    className="h-[126px]"
                    src="/assets/images/case-study/iframe-gradient-line.png"
                    height={126}
                    width={1}
                    alt="jamil akbar profile"
                  />
                </div>
                <div>
                  <p className="font-plus font-bold text-[36px] leading-[122%] tracking-[0.72px] text-center text-easternBlue">
                    150K+
                  </p>
                  <p className="pt-5 font-plus text-center text-gray font-medium text-base leading-[140%]">
                    End Users Served
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex justify-end">
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
