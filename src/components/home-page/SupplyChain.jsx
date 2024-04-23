import Image from "next/image";
import BookDemo from "../common/BookDemo";
import { supplyChainList } from "../common/Helper";

const SupplyChain = () => {
  return (
    <div
      className="xl:max-w-[1324px] container px-5 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 mx-auto"
      data-aos="fade-up"
    >
      {/* Title */}
      <p className="sm:text-center tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase">
        Enterprise Cloud Supply Chain
      </p>
      <h2 className="max-w-[731px] mx-auto text-[32px] !leading-[110%] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus font-extrabold pt-3 text-shark sm:text-center">
        Boost your supply chain{" "}
        <span className="text-garyMedium">efficiency</span>
      </h2>
      {/* Description */}
      <p className="max-w-[678px] !leading-[140%] mx-auto font-plus text-riverBed pt-5 md:pt-6 lg:pt-7 text-base md:text-lg lg:text-xl sm:text-center font-medium">
        Comprehensive android app for distribution management: orders, SKU
        scanning, tracking, metrics, and vehicle monitoring in one solution.
      </p>
      {/* Supply Chain Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 pt-12 sm:pt-14 md:pt-16 lg:pt-[84px]">
        <div>
          {supplyChainList.map((value, index) => {
            return (
              <div
                data-aos="fade-right"
                data-aos-delay={`${index}00`}
                key={index}
                className={`py-9 border-b me-8 border-mischka ${value.className}`}
              >
                {/* Icon */}
                <span className="max-w-[56px] md:max-w-[60px] lg:max-w-[64px] inline-block">
                  {value.icon}
                </span>
                {/* Title */}
                <h3 className="pt-7 !leading-[130%] text-xl md:text-2xl lg:text-3xl text-shark  font-plus font-bold">
                  {value.title}
                </h3>
                {/* Description */}
                <p className="pt-3 !leading-[140%] md:pt-4 text-riverBed text-sm md:text-base lg:text-lg font-medium">
                  {value.description}
                </p>
              </div>
            );
          })}
          {/* Book Demo Button */}
          <div className="pt-1 md:pt-3">
            <BookDemo />
          </div>
        </div>
        {/* Supply Chain Image */}
        <div
          className="flex justify-center items-start pt-12 "
          data-aos="fade-left"
        >
          <Image
            className="md:sticky top-40"
            height={648}
            width={630}
            src="/assets/images/home-page/supply-chain/supply-chain-order-image.webp"
            alt="supply-chain"
          />
        </div>
      </div>
    </div>
  );
};

export default SupplyChain;
