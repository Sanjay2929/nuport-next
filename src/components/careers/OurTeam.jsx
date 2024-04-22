import React from "react";

const OurTeam = () => {
  return (
    <div className="bg-darkBlue">
      <div className="xl:max-w-[1324px] container px-5 pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-40 mx-auto">
        <p className="tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase text-center">
          what you’ll get
        </p>
        <h2 className=" text-[32px] !leading-[110%] text-center sm:text-4xl md:text-5xl lg:text-[52px] xl:text-7xl font-plus font-extrabold pt-3 text-white ">
          Our teams
        </h2>
        <div className="pt-[84px] grid grid-cols-3">
          <div className="w-full border border-darkGray bg-lightTeal rounded-xl p-6">
            <h3 className="font-bold text-2xl text-offWhite">Engineering</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
