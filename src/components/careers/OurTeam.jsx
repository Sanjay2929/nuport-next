import React from "react";
import { Setting } from "../common/Icons";
import { OurTeamCareer } from "../common/Helper";

const OurTeam = () => {
  return (
    <div className="bg-darkBlue">
      <div className="xl:max-w-[1324px] container px-5 pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 mx-auto">
        <p className="tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase text-center">
          what you’ll get
        </p>
        <h2 className=" text-[32px] !leading-[110%] text-center sm:text-4xl md:text-5xl lg:text-[52px] xl:text-7xl font-plus font-extrabold pt-3 text-white ">
          Our <span className="text-garyMedium">talent community</span>
        </h2>
        <div className="lg:pt-[84px] pt-12 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
          {OurTeamCareer.map((value, index) => {
            return (
              <div
                key={index}
                className="w-full border border-darkGray bg-lightBlue rounded-xl md:p-6 p-5 md:h-[210px] h-[148px] flex flex-col justify-between"
              >
                <div className="md:w-16 w-11 md:h-16 h-11 rounded-full border-tealBlue border flex justify-center items-center bg-tealBlue bg-opacity-[12%]">
                  {value.icon}
                </div>
                <h3 className="font-bold lg:text-2xl sm:text-xl text-sm text-offWhite">
                  {value.heading}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
