import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const TrustedByKnown = ({ laptopimg, trustedpartners }) => {
  // Slider settings for different breakpoints
  var settings = {
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 1280,
        settings: {
          infinite: true,
          slidesToShow: 5,
          autoplay: true,
          autoplaySpeed: 0,
          arrows: false,
          speed: 5000,
          pauseOnHover: false,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 0,
          arrows: false,
          speed: 5000,
          pauseOnHover: false,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3.5,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 0,
          arrows: false,
          speed: 5000,
          pauseOnHover: false,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <div className="">
      <div className="container 2xl:max-w-[1380px] mx-auto">
        {/* Laptop image */}
        <Image
          width={1380}
          height={841}
          className={`w-full 2xl:px-0 px-5 max-w-[1380px] lg:mt-[-330px] sm:mt-[-150px] mt-[-100px] relative z-30 ${
            laptopimg === undefined && "hidden"
          }`}
          src={laptopimg}
          alt="laptop"
        />
        <div className="overflow-hidden lg:pb-[72px] sm:pb-5">
          {/* Section title */}
          <h2 className="text-center uppercase font-bold text-base text-gray tracking-[1.8px] lg:pt-[120px] pt-[52px] lg:pb-10 sm:pb-5 pb-2.5">
            TRUSTED BY known
          </h2>
          <div className="relative h-[60px] w-full">
            {/* Slider for trusted partners */}
            <Slider
              {...settings}
              className="flex justify-between lg:gap-x-8 gap-x-3 items-center"
            >
              {/* Mapping over the trustedPartners array to render each partner's image */}
              {trustedpartners.map((value, index) => {
                return (
                  <div key={index} className="flex justify-center">
                    <Image
                      className={`w-[80px] sm:w-[120px] object-contain h-[40px] sm:h-[50px] ${value.customWidth}`}
                      width={value.width}
                      height={50}
                      src={value.image}
                      alt={value.title}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedByKnown;
