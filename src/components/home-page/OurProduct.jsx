import React from "react";
import Image from "next/image";
import CommonBtn from "../common/CommonBtn";

const OurProduct = () => {
  return (
    <div className="container 2xl:max-w-[1285px] px-5 2xl:px-0 mx-auto mt-12 mb-16 sm:mb-16 md:mb-24 lg:mb-[128px] xl:mb-[164px]">
      {/* Title Section */}
      <div data-aos="fade-up">
        <p className="text-center text-xs sm:text-base font-bold font-plus text-orangeDark mb-3 uppercase tracking-[2.5px]">
          Discover our solutions
        </p>
        <h2 className="text-center font-plus text-gray-900 text-[32px] lg:text-5xl xl:text-7xl mb-12 sm:mb-16 lg:mb-[84px] font-extrabold">
          Our <span className="text-garyMedium">Products</span>
        </h2>
      </div>
      {/* Products Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6">
        {/* E-Commerce Suite */}
        <div
          data-aos="fade-right"
          className="w-full !max-w-[400px] mx-auto sm:m-0 md:!max-w-[628px] overflow-hidden p-6 sm:p-9 lg:p-12 pb-6 bg-darkBlue !min-h-[276px] lg:!min-h-[520px] sm:!max-w-[500px] sm:!min-h-[400px] rounded-xl sm:rounded-[20px] relative transition-all ease-in-out duration-300 hover:-translate-y-2"
        >
          <div className="relative z-10">
            <div>
              {/* Product Title */}
              <h3 className="mb-2 sm:mb-4 text-xl sm:text-3xl lg:text-[40px] xl:text-5xl font-bold text-offWhite max-w-[185px] sm:max-w-[346px] !leading-[120%]">
                E-Commerce Suite
              </h3>
              {/* Product Description */}
              <p className="mb-8  text-sm sm:text-base lg:text-lg text-lightGray max-w-[243px] sm:max-w-full !pb-8 md:!pb-0">
                A dynamic, scalable, and fully integrated suite of e-Commerce
                and D2C business applications.
              </p>
            </div>
            {/* Explore Product Button */}
            <CommonBtn title="Explore Product" />
          </div>
          {/* Product Image */}
          <Image
            className="absolute bottom-2.5 right-0 max-w-[120px] sm:max-w-[200px] lg:max-w-[340px] max-h-[132px] sm:max-h-[250px] z-[1] w-full"
            src="/assets/images/home-page/our-product/e-commerce.png"
            width={280}
            height={250}
            alt="e-commerce"
          />
          {/* Product Shadow Effects */}
          <div className="lg:w-[338px] w-[150px] lg:h-[215px] h-[100px] absolute top-10 left-0 z-0 -translate-x-1/2 product_gradient_shadow rotate-[19deg] blur-[55px] lg:blur-[150px]"></div>
          <div className="lg:w-[338px] w-[150px] lg:h-[215px] h-[100px] absolute bottom-10 right-0 z-0 translate-x-1/2 product_gradient_shadow rotate-[19deg] blur-[55px] lg:blur-[150px]"></div>
        </div>
        {/* Enterprise Cloud Supply Chain */}
        <div
          data-aos="fade-left"
          className="w-full !max-w-[400px] mx-auto sm:m-0 overflow-hidden md:!max-w-[628px] p-6 sm:p-9 lg:p-12  bg-darkBlue !min-h-[276px] pb-6 lg:!min-h-[520px] sm:!max-w-[500px] sm:!min-h-[400px]  rounded-xl sm:rounded-[20px] relative transition-all ease-in-out duration-300 hover:-translate-y-2"
        >
          <div className="relative z-20">
            <div>
              {/* Product Title */}
              <h3 className="mb-2 sm:mb-4 text-xl sm:text-3xl lg:text-[40px] xl:text-5xl font-bold text-offWhite max-w-[185px]  sm:max-w-[400px] !leading-[120%]">
                Enterprise Cloud Supply Chain
              </h3>
              {/* Product Description */}
              <p className="mb-8  text-sm sm:text-base lg:text-lg text-lightGray max-w-[243px] sm:max-w-[425px] !pb-3 md:!pb-0">
                A robust, vertically scalable, and customizable suite of supply
                chain automation tools for high-throughput industrial
                applications.
              </p>
            </div>
            {/* Explore Product Button */}
            <CommonBtn title="Explore Product" />
          </div>
          {/* Product Image */}
          <Image
            className="absolute bottom-2.5 right-0 max-w-[120px] sm:max-w-[200px] lg:max-w-[340px] max-h-[132px] sm:max-h-[250px] z-10"
            src="/assets/images/home-page/our-product/enterprise-cloud.png"
            width={310}
            height={250}
            alt="enterprise"
          />
          {/* Product Shadow Effects */}
          <div className="lg:w-[338px] w-[150px] lg:h-[215px] h-[100px] absolute top-10 left-0 z-0 -translate-x-1/2 product_gradient_shadow rotate-[19deg] blur-[55px] lg:blur-[150px]"></div>
          <div className="lg:w-[338px] w-[150px] lg:h-[215px] h-[100px] absolute bottom-10 right-0 z-0 translate-x-1/2 product_gradient_shadow rotate-[19deg] blur-[55px] lg:blur-[150px]"></div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
