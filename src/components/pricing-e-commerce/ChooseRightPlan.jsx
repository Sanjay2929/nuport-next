import React from "react";
import { CircleCheck, CircleCross } from "../common/Icons";
import { choosePlan } from "../common/Helper";

const ChooseRightPlan = () => {
  return (
    <div className="xl:max-w-[1324px] container px-5 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 mx-auto">
      <p className="text-center text-orangeDark uppercase font-plus font-bold md:text-base sm:text-sm text-xs leading-[126%] tracking-[1.92px]">
        Let’s discuss
      </p>
      <h1 className="font-extrabold lg:text-[72px] sm:text-5xl text-[32px] text-shark text-center max-w-[1141px] mx-auto !leading-[110%] pt-3">
        Choose the
        <span className="text-garyMedium block">right plan for you</span>
      </h1>
      <div className="flex justify-end pt-[84px] pb-10 border-b border-mischka mb-3">
        <div className="sm:w-1/2 xl:max-w-[552px] lg:max-w-[450px] w-full sm:max-w-[300px] flex items-center justify-between">
          <p className="font-bold xl:text-[30px] text-2xl text-shark">Basic</p>
          <p className="font-bold xl:text-[30px] text-2xl text-shark">Pro</p>
          <p className="font-bold xl:text-[30px] text-2xl text-shark">
            Advanced
          </p>
        </div>
      </div>
      {choosePlan.map((value, index) => {
        return (
          <div key={index} className="py-7 border-b border-mischka">
            <h3 className="font-bold xl:text-[30px] text-2xl text-shark pb-6 max-w-[521px]">
              {value.heading}
            </h3>
            <div className="flex flex-col gap-7">
              {value.benefit.map((subvalue, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between sm:flex-row flex-col sm:items-center sm:gap-0 gap-4"
                  >
                    <p className="font-medium lg:text-2xl text-xl text-graynormal sm:w-[50%] pe-5">
                      {subvalue.title}
                    </p>
                    <div className="xl:max-w-[552px] lg:max-w-[450px] sm:max-w-[300px] sm:w-1/2 w-full flex justify-between">
                      <span className="flex justify-center xl:w-20 w-[64px]">
                        {subvalue.basic ? <CircleCheck /> : <CircleCross />}
                      </span>
                      <span className="flex justify-center xl:w-[45px] w-10">
                        {subvalue.pro ? <CircleCheck /> : <CircleCross />}
                      </span>
                      <span className="flex justify-center xl:w-[150px] w-[120px]">
                        {subvalue.advanced ? <CircleCheck /> : <CircleCross />}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChooseRightPlan;
