import React from "react";
import { ecommercesList } from "../common/Helper";
import BookDemo from "../common/BookDemo";

const Ecommerce = () => {
  return (
    <div className="xl:max-w-[1324px] container px-5 pb-7 pt-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div data-aos="fade-right">
          <div className="sticky top-10">
            <p className="tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase">
              E-commerce suite
            </p>
            <h2 className=" text-[32px] !leading-[110%] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus font-extrabold pt-3 text-shark ">
              Scale your <span className="text-nowrap">e-commerce</span>{" "}
              <span className="text-garyMedium">grow like a PRO</span>
            </h2>
            <p className="max-w-[295px] sm:max-w-[628px] !leading-[140%] font-plus text-riverBed pt-5 md:pt-6 lg:pt-7 text-sm sm:text-base md:text-lg lg:text-xl font-medium xl:pe-16">
              Comprehensive android app for distribution management: orders, SKU
              scanning, tracking, metrics, & vehicle monitoring in one solution
            </p>
            <div className="pt-10 md:pt-12">
              <BookDemo />
            </div>
          </div>
        </div>
        <div>
          {ecommercesList.map((value, index) => {
            return (
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                key={index}
                className={`py-9 border-b border-mischka ${value.className}`}
              >
                <span className="max-w-[56px] md:max-w-[60px] lg:max-w-[64px] inline-block">
                  {value.icon}
                </span>
                <h3 className="pt-7 !leading-[130%] text-xl md:text-2xl lg:text-3xl text-shark  font-plus font-bold">
                  {value.title}
                </h3>
                <p className="pt-3 !leading-[140%] md:pt-4 text-riverBed text-sm md:text-base lg:text-lg font-medium">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
