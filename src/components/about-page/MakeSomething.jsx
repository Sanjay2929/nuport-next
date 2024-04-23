import React from "react";
import Image from "next/image";
const MakeSomething = () => {
  return (
    <div className=" grid lg:gap-6 gap-3 row-auto col-auto container mx-auto 2xl:max-w-[1283px] 2xl:px-0 px-5 md:pb-[167px] sm:pb-[100px] pb-20 overflow-hidden relative rounded-xl">
      {" "}
      <Image
        className="w-full min-w-[405px] pointer-events-none absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%]"
        src="/assets/images/about-page/make-something/shape.webp"
        alt="man-1"
        width={455}
        height={511}
      />
      <Image
        className="w-full relative  hover:scale-95 transition-all duration-300 rounded-xl z-10 row-[1/4] col-[1/2]"
        src="/assets/images/about-page/make-something/man-1.webp"
        alt="man-1"
        width={412}
        height={379}
      />
      <Image
        className="w-full relative  hover:scale-95 transition-all duration-300 rounded-xl z-10 row-[1/3] col-[2/3]"
        src="/assets/images/about-page/make-something/something-2.webp"
        alt="man-1"
        width={412}
        height={204}
      />{" "}
      <Image
        className="w-full relative  hover:scale-95 transition-all duration-300 rounded-xl z-10 sm:row-[1/2] row-[7/8] sm:col-[3/4] col-[1/2]"
        src="/assets/images/about-page/make-something/nuport-3.webp"
        alt="man-1"
        width={411}
        height={107}
      />{" "}
      <Image
        className="w-full relative  hover:scale-95 transition-all duration-300 rounded-xl z-10 row-[4/7] col-[1/2]"
        src="/assets/images/about-page/make-something/man-bottom.webp"
        alt="man-1"
        width={412}
        height={379}
      />
      <Image
        className="w-full relative  hover:scale-95 transition-all duration-300 rounded-xl z-10 row-[3/5] col-[2/3]"
        src="/assets/images/about-page/make-something/nuport-4.webp"
        alt="man-1"
        width={412}
        height={326}
      />
      <Image
        className="w-full relative  hover:scale-95 transition-all duration-300 rounded-xl z-10 sm:row-[2/6] row-[8/9] sm:col-[3/4] col-[1/4]"
        src="/assets/images/about-page/make-something/rupor-bottom-2-3.webp"
        alt="man-1"
        width={412}
        height={326}
      />
      <Image
        className="w-full relative  hover:scale-95 transition-all duration-300 rounded-xl z-10 row-[5/7] col-[2/3] object-cover"
        src="/assets/images/about-page/make-something/man-2-3.webp"
        alt="man-1"
        width={412}
        height={204}
      />{" "}
      <Image
        className="w-full relative  hover:scale-95 transition-all duration-300 rounded-xl z-10 sm:row-[6/7] row-[7/8] sm:col-[3/4] col-[2/4]"
        src="/assets/images/about-page/make-something/make-last.webp"
        alt="man-1"
        width={411}
        height={107}
      />{" "}
    </div>
  );
};

export default MakeSomething;
