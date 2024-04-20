import React from "react";
import { workProcess } from "../common/Helper";
const WorkProcess = () => {
  return (
    <div className="container 2xl:max-w-[1285px] px-5 2xl:px-0 mx-auto mt-[59px]">
      <p className="text-base font-bold font-plus text-orangeDark mb-3 uppercase text-center">
        work process
      </p>
      <h2 className="font-plus text-gray-900 text-[32px] lg:text-5xl xl:text-7xl font-extrabold max-w-[848px] mx-auto text-center">
        How it <span className="text-garyMedium"> works </span>
      </h2>
      <div className=" flex flex-wrap lg:justify-between justify-center mt-10 lg:mt-[84px] gap-x-6 gap-y-8">
        {workProcess.map((value, index) => (
          <div
            key={index}
            className=" w-full sm:w-[calc(50%-12px)] lg:max-w-[calc(33.3%-16px)] transition-all ease-in-out duration-300 hover:-translate-y-2"
          >
            <div className=" sm:max-w-[412px] mx-auto sm:mx-0 rounded-2xl flex flex-col justify-between">
              <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full border border-tealBlue bg-tealBlue bg-opacity-[12%]">
                {value.icon}
              </div>
              <div>
                <h3
                  className={`!leading-[142%] text-xl lg:text-2xl text-shark  font-plus font-bold mb-4 xl:pt-9 pt-5 ${value.widthTitle}`}
                >
                  {value.title}
                </h3>
                <p className="text-lg font-plus font-normal text-arsenicGray sm:max-w-[397px]">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
