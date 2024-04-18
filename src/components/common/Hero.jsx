import React from "react";
import Image from "next/image";
import { ArrowUpward, CircleArrow } from "./Icons";

const Hero = () => {
  return (
    <div className="overflow-hidden bg-darkBlue">
      <div className="container 2xl:max-w-[1380px] mx-auto flex justify-center items-center flex-col 2xl:px-0 px-5 2xl:pt-40 md:pt-24 pt-[72px] relative">
        <div className="ps-5 pe-2 flex gap-2.5 items-center py-1.5 md:text-base text-xs yellow_gradient rounded-full border border-orangeDark text-white">
          Integrate, automate and scale. <CircleArrow />
        </div>
        <h1 className="font-extrabold 2xl:text-[116px] xl:text-[100px] lg:text-[80px] sm:text-5xl text-[36px] text-white text-center max-w-[1141px] mx-auto !leading-[110%] pt-4">
          Cloud supply chain for{" "}
          <span className="text-garyMedium">e-commerce</span> &{" "}
          <span className="text-garyMedium">enterprise</span>
        </h1>
        <p className="max-w-[747px] mx-auto md:text-xl text-base font-medium text-center text-lightGray md:pt-7 pt-3 md:pb-14 pb-10">
          Increase throughput and grow sales with an optimized and integrated
          supply chain ecosystem.{" "}
          <span className="font-bold text-white">
            Trusted by 500+ businesses.
          </span>
        </p>
        <div className="flex items-center sm:flex-row flex-col md:gap-6 gap-4 lg:pb-[415px] sm:pb-[200px] pb-32">
          <button className="common_btn bg-tealBlue flex items-center gap-2 px-5 lg:pt-3.5 lg:pb-4 py-3 rounded-full md:text-base text-sm font-semibold group text-white hover:border-tealBlue group border border-tealBlue duration-300 hover:bg-orange-400">
            Get Started <ArrowUpward />
          </button>
          <p className="text-lightWhite lg:text-base md:text-sm text-xs font-medium">
            No credit card required
          </p>
        </div>
        <Image
          className="absolute 3xl:right-auto lg:w-[80px] sm:w-[60px] w-10  lg:right-0 right-7  3xl:left-full sm:top-[57%] top-[60%]"
          width={80}
          height={68}
          src="/assets/images/homepage/hero/documents.png"
          alt="documents"
        />
        <Image
          className="absolute 3xl:left-auto lg:w-[138px] w-[40px] sm:w-[70px] left-0 3xl:right-full lg:bottom-24 bottom-[100px]"
          width={138}
          height={119}
          src="/assets/images/homepage/hero/laugage.png"
          alt="laugage"
        />
        <Image
          className="absolute 3xl:left-auto xl:w-[366px] md:w-[200px] sm:w-[120px] w-[65px]  left-0 md:-translate-x-1/2 -translate-x-1/3 3xl:translate-x-0 3xl:right-full md:top-[40%] top-[60%]"
          width={366}
          height={358}
          src="/assets/images/homepage/hero/loading-machine.png"
          alt="loading-machine"
        />
        <Image
          className="absolute 3xl:right-auto xl:w-[168px] w-[100px] sm:w-[130px]  right-0 3xl:left-full md:top-[36%] top-[45%] translate-x-2/3 lg:translate-x-1/2"
          width={168}
          height={132}
          src="/assets/images/homepage/hero/small-drone.png"
          alt="drone"
        />
        <Image
          className="absolute 3xl:right-auto xl:w-[611px]  sm:w-[300px] w-[200px]  right-0 3xl:left-full translate-x-2/3 3xl:translate-x-0 sm:-bottom-10 bottom-14"
          width={611}
          height={472}
          src="/assets/images/homepage/hero/truck.png"
          alt="truck"
        />
      </div>
    </div>
  );
};

export default Hero;
