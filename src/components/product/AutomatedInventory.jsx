import React from "react";
import Image from "next/image";
import { maximizingYourEfficiency } from "../common/Helper";
import { AutomatedArrow } from "../common/Icons";
const AutomatedInventory = () => {
  return (
    <div className=" bg-darkBlue relative">
      <div className="container 2xl:max-w-[1285px] px-5 2xl:px-0 mx-auto py-16 md:py-24 lg:py-[128px] xl:py-[160px]">
        <div className=" flex justify-between flex-col-reverse lg:flex-row flex-wrap">
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
          <div className="lg:w-6/12">
            <Image
              className="sticky top-10"
              src="/assets/images/productpage/automated-inventory/automated.webp"
              width={521}
              height={502}
              alt="inventory"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedInventory;
