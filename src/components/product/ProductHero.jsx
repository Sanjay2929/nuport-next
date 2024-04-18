import React from "react";
import { ArrowUpward, CircleArrow } from "../common/Icons";
const ProductHero = () => {
  return (
    <div>
      <div className="overflow-hidden bg-darkBlue">
        <div className="container 2xl:max-w-[1380px] mx-auto flex justify-center items-center flex-col 2xl:px-0 px-5 2xl:pt-40 md:pt-24 pt-[72px] relative">
          <div className="ps-5 pe-2 flex gap-2.5 items-center py-1.5 md:text-base text-xs yellow_gradient rounded-full border border-orangeDark text-white">
            Create happy customers <CircleArrow />
          </div>
          <h1 className="font-extrabold xl:text-[96px] lg:text-[80px] sm:text-5xl text-garyMedium text-[36px] text-center max-w-[1141px] mx-auto leading-[110%] pt-4">
            Automate & scale
            <span className=" text-offWhite">
              your entire e-commerce business
            </span>
          </h1>
          <p className="max-w-[747px] mx-auto md:text-xl text-base font-medium text-center text-lightGray md:pt-7 pt-3 md:pb-14 pb-10">
            A platform that connects to every e-commerce entity, automates
            repetitive tasks, increases visibility, and speeds up transactions.
          </p>
          <div className="flex items-center sm:flex-row flex-col md:gap-6 gap-4 lg:pb-[415px] sm:pb-[200px] pb-32">
            <button className="bg-tealBlue flex items-center gap-2 px-5 pt-3.5 pb-4 rounded-full md:text-base text-sm font-semibold group text-white hover:border-tealBlue group hover:text-tealBlue border border-transparent duration-300 hover:bg-transparent">
              Schedule a Demo <ArrowUpward />
            </button>
            <p className="text-lightWhite text-base font-medium">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
