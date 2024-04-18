import React from "react";
import { trustedKnownPartners } from "../common/Helper";
import Image from "next/image";

const TrustedByKnown = () => {
  return (
    <div className="">
      <div className="container 2xl:max-w-[1380px] mx-auto">
        <Image
          width={1380}
          height={841}
          className="w-full 2xl:px-0 px-5 max-w-[1380px] lg:mt-[-330px] sm:mt-[-150px] mt-[-100px] relative z-30"
          src="/assets/images/productpage/trusted-by-known/mac-book-pro.webp"
          alt="laptop"
        />
        <div className="overflow-hidden lg:pb-[72px] sm:pb-5">
          <h2 className="text-center uppercase font-bold text-base text-gray tracking-[1.8px] lg:pt-[120px] pt-[52px] lg:pb-10 sm:pb-5 pb-2.5">
            TRUSTED BY known
          </h2>
          <div className="relative h-[60px] w-full">
            <div className="flex justify-between lg:gap-x-8 gap-x-3 items-center trusted_slider absolute left-0 top-1/2 -translate-y-1/2">
              {trustedKnownPartners.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="lg:w-[177px] w-[100px] flex justify-center"
                  >
                    <Image
                      className={`hover:scale-110 duration-300 lg:w-[${value.width}px] w-[100px] object-contain h-[50px]`}
                      width={value.width}
                      height={50}
                      src={value.image}
                      alt={value.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedByKnown;
