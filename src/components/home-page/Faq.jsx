"use client";
import React, { useState } from "react";
import { faqList } from "../common/Helper";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  // Function to toggle accordion items
  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="xl:max-w-[1324px] container px-5 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 mx-auto">
      <p
        className="text-center tracking-[2.5px] font-bold font-plus text-xs md:text-sm lg:text-base text-orangeDark uppercase"
        data-aos="fade-up"
      >
        Discover your solutions
      </p>
      <h2
        className="max-w-[731px] !leading-[110%] mx-auto text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-plus font-extrabold pt-3 text-shark text-center"
        data-aos="fade-up"
      >
        Frequently asked <span className="text-garyMedium">questions</span>
      </h2>
      <div className="max-w-[1066px] w-full mx-auto pt-6 md:pt-9 lg:pt-12 xl:pt-14">
        {faqList.map((obj, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${index}00`}>
            {/* Accordion item container */}
            <div className=" border-b py-6 lg:pb-8 md:py-7 border-mischka">
              {/* Accordion button */}
              <button
                type="button"
                className={`flex items-center justify-between !leading-[140%] w-full text-left font-bold text-base md:text-xl lg:text-2xl text-shark font-inter ${
                  expandedIndex === index ? "" : ""
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={expandedIndex === index}
                aria-controls={`faqs-text-${index}`}
              >
                {/* Title of the accordion item */}
                {obj.title}
                {/* Chevron icon for indicating accordion state */}

                <span
                  className={`max-w-8 md:max-w-11 w-full h-8 md:h-11 ms-2 rounded-full bg-[#EDEFF2] relative before:absolute before:z-20 after:absolute before:bg-gray after:bg-gray before:top-1/2 before:-translate-x-1/2 before:start-1/2 before:-translate-y-1/2
                                        before:w-[14px] before:h-0.5 before:rounded-2xl after:w-0.5 after:h-[14px] after:rounded-2xl after:-translate-x-1/2 after:top-1/2 after:start-1/2 after:-translate-y-1/2
                                        duration-300 ${
                                          expandedIndex === index
                                            ? "bg-tealBlue before:bg-white after:bg-tealBlue before:z-20 rotate-180"
                                            : ""
                                        }
                                        `}
                ></span>
              </button>
              {/* Accordion content */}
              <div
                id={`faqs-text-${index}`}
                role="region"
                aria-labelledby={`faqs-title-${index}`}
                className={`grid text-sm text-slate-600  overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                {" "}
                <div className="overflow-hidden">
                  <p className="font-medium pt-3 md:pt-4 lg:pt-[18px] text-sm md:text-base lg:text-lg !leading-[140%] text-riverBed">
                    {obj.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
