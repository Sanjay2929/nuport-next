import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="bg-white">
      <div className="py-20 xl:max-w-[1133px] container mx-auto px-5">
        <p className="text-center font-plus font-medium md:text-4xl sm:text-3xl text-2xl leading-[140%] tracking-[0.72px] text-shark">
          “Nuport is indeed an incredible platform for turning the whole process
          of supply chain businesses into automation. This platform has made a
          significant change in our supply chain by automating agricultural
          distribution planning.”
        </p>
        <div className="flex flex-col items-center pt-[58px]">
           <Image
              className=""
              src="/assets/images/case-study/jamil-akbar.png"
              height={80}
              width={80}
              alt="jamil akbar profile"
          />
          <p className="pt-3 font-plus font-semibold text-[30px] leading-[126%] text-shark">Jamil Akbar</p>
          <p className="pt-[6px] font-plus font-medium text-lg leading-[140%] text-riverBed">COO at iFARMER</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
